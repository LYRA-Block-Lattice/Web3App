import { FunctionComponent, useCallback, useEffect, useState } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SideMenuPopup from "../components/SideMenuPopup";
import PortalDrawer from "../components/PortalDrawer";
import WalletCard from "../components/WalletCard";

import {
  getAppSelector,
  getAuthSelector,
  getNotifySelector
} from "../app/selectors";
import TokenDisplayItem from "../components/TokenDisplayItem";
import BottomNavigationBar from "../components/BottomNavigationBar";
import * as actionTypes from "../app/actionTypes";
import "./WalletHome.css";
import { IBalance } from "../app/wallet/walletReducer";
import NFTInWalletDisplay from "../components/NFTInWalletDisplay";
import PrimaryAccountContainer from "../components/PrimaryAccountContainer";
import WalletToolBar from "../components/WalletToolBar";
import CatalogTab from "../components/CatalogTab";

const catMap: { [index: string]: any } = {
  Token: "Token",
  NFT: "nft",
  Fiat: "fiat",
  Goods: "tot",
  Service: "svc"
};

type CoinItemType = {
  coins: IBalance[];
};

const CoinItem: FunctionComponent<CoinItemType> = ({ coins }) => {
  const notify = useSelector(getNotifySelector);

  function getWorth(token: IBalance): string {
    var ticker = token.Ticker;
    if (ticker.startsWith("tether/")) ticker = ticker.replace("tether/", "");
    if (ticker.startsWith("fiat/"))
      ticker = ticker.replace("fiat/", "").toLowerCase();
    const price = notify.prices?.find((a) => a.ticker == ticker)?.price;
    if (price === undefined) return "";
    return (
      "$" +
      (price * token.Balance).toLocaleString(undefined, {
        maximumFractionDigits: 2
      })
    );
  }

  return (
    <>
      {coins
        .filter((a) => a.Balance > 0)
        .map((a) => {
          switch (a.Domain) {
            case "nft":
              return <NFTInWalletDisplay key={a.Ticker} tok={a} />;
            default:
              return (
                <TokenDisplayItem
                  key={a.Ticker}
                  tokenIcon="../asserts/lyralogoblackicon@2x.png"
                  tokenName={a.Name ?? a.Ticker}
                  tokenAmount={a.Balance?.toLocaleString(undefined, {
                    maximumFractionDigits: 2
                  })}
                  tokenDollar={getWorth(a)}
                />
              );
          }
        })}
    </>
  );
};

const WalletHome: FunctionComponent = () => {
  const navigate = useNavigate();

  const [isSideMenuPopupOpen, setSideMenuPopupOpen] = useState(false);
  const dispatch = useDispatch();
  const app = useSelector(getAppSelector);
  const auth = useSelector(getAuthSelector);

  const [cat, setCat] = useState("");

  const [sellcnt, setSellcnt] = useState(0);
  const [bidcnt, setBidcnt] = useState(0);

  useEffect(() => {
    dispatch({ type: actionTypes.SIGNALR_CONNECT });
    dispatch({ type: actionTypes.WALLET_GET_BALANCE });
  }, [dispatch]);

  const ofCatalog = (selcat: string, list: IBalance[]) => {
    console.log("ofCatalog", selcat);
    if (selcat === "") return list;
    else if (selcat === "Token")
      return list.filter(
        (a) =>
          a.Domain != "fiat" &&
          a.Domain != "nft" &&
          a.Domain != "tot" &&
          a.Domain != "svc"
      );
    else return app.wallet.balances.filter((a) => a.Domain == catMap[selcat]);
  };

  const onSwapButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSendButtonClick = useCallback(() => {
    if (!auth.hasKey) navigate("/openwallet?ret=/sendtokenform");
    else navigate("/sendtokenform");
  }, [navigate]);

  const scanToPay = useCallback(() => {
    if (!auth.accountId) navigate("/openwallet?ret=/scantopay");
    else navigate("/scantopay");
  }, [navigate]);

  const onReceiveButtonClick = useCallback(() => {
    if (!auth.hasKey) navigate("/openwallet");
    else
      dispatch({
        type: actionTypes.WALLET_RECEIVE,
        payload: auth.accountId
      });
  }, [navigate]);

  const openSideMenuPopup = useCallback(() => {
    setSideMenuPopupOpen(true);
  }, []);

  const closeSideMenuPopup = useCallback(() => {
    setSideMenuPopupOpen(false);
  }, []);

  return (
    <div className="wallethome main-content">
      <TopNavigationBar title="My Wallet" />
      <div className="wallet-card-group">
        <PrimaryAccountContainer />
        <WalletToolBar />
        <div className="coinlisting">
          <CatalogTab selcat={cat} onSelect={(cat) => setCat(cat)} />
        </div>
        <CoinItem coins={ofCatalog(cat, app.wallet.balances)} />
      </div>
      <BottomNavigationBar />
    </div>
    // {isSideMenuPopupOpen && (
    //   <PortalDrawer
    //     overlayColor="rgba(113, 113, 113, 0.3)"
    //     placement="Right"
    //     onOutsideClick={closeSideMenuPopup}
    //   >
    //     <SideMenuPopup onClose={closeSideMenuPopup} />
    //   </PortalDrawer>
    // )}
  );
};

export default WalletHome;
