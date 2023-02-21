import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SideMenuPopup from "../components/SideMenuPopup";
import PortalDrawer from "../components/PortalDrawer";
import TokenCatalogTabs from "../components/TokenCatalogTabs";
import WalletCard from "../components/WalletCard";

import {
  getAppSelector,
  getAuthSelector,
  getNotifySelector
} from "../app/selectors";
import TokenDisplayItem from "../components/TokenDisplayItem";
import * as actionTypes from "../app/actionTypes";
import "./WalletHome.css";
import { IBalance } from "../app/wallet/walletReducer";
import NFTInWalletDisplay from "../components/NFTInWalletDisplay";

const WalletHome: FunctionComponent = () => {
  const navigate = useNavigate();

  const [isSideMenuPopupOpen, setSideMenuPopupOpen] = useState(false);
  const dispatch = useDispatch();
  const app = useSelector(getAppSelector);
  const auth = useSelector(getAuthSelector);
  const notify = useSelector(getNotifySelector);

  const [cat, setCat] = useState("");

  const [sellcnt, setSellcnt] = useState(0);
  const [bidcnt, setBidcnt] = useState(0);

  useEffect(() => {
    dispatch({ type: actionTypes.SIGNALR_CONNECT });
    dispatch({ type: actionTypes.WALLET_GET_BALANCE });
  }, [dispatch]);

  const ofCatalog = (list: IBalance[]) => {
    if (cat === "")
      return list.filter(
        (a) =>
          a.Domain != "fiat" &&
          a.Domain != "nft" &&
          a.Domain != "tot" &&
          a.Domain != "svc"
      );
    else return app.wallet.balances.filter((a) => a.Domain == cat);
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

  const showTokens = () => {
    //console.log("in use call back to showTokens", app?.wallet?.balances);
    if (app.wallet.balances === undefined) return <div>No coins.</div>;
    else {
      return (
        <>
          {ofCatalog(app.wallet.balances)
            .filter((a) => a.Balance > 0)
            .map((a) => {
              switch (a.Domain) {
                case "nft":
                  return <NFTInWalletDisplay key={a.Ticker} tok={a} />;
                default:
                  return (
                    <TokenDisplayItem
                      key={a.Ticker}
                      coinIcon="../asserts/lyralogoblackicon@2x.png"
                      coinName={a.Name ?? a.Ticker}
                      amountText={a.Balance?.toLocaleString(undefined, {
                        maximumFractionDigits: 2
                      })}
                      amountWorth={getWorth(a)}
                    />
                  );
              }
            })}
        </>
      );
    }
  };

  return (
    <>
      <div className="wallethome">
        <WalletCard />
        <div className="iconssection-container">
          <div className="iconssection1">
            <div className="swap-button-parent">
              <button className="swap-button" onClick={onSwapButtonClick}>
                <img
                  className="home-icon-interlocution"
                  alt=""
                  src="../asserts/home--icon--interlocution4.svg"
                />
                <div className="ranking">Market</div>
              </button>
              <button className="swap-button">
                <img
                  className="home-icon-interlocution"
                  alt=""
                  src="../asserts/home--icon--interlocution5.svg"
                />
                <div className="ranking">Swap</div>
              </button>
              <button className="swap-button" onClick={onSendButtonClick}>
                <img
                  className="home-icon-interlocution"
                  alt=""
                  src="../asserts/home--icon--interlocution6.svg"
                />
                <div className="ranking">Send</div>
              </button>
              <button className="swap-button" onClick={onReceiveButtonClick}>
                <img
                  className="home-icon-interlocution"
                  alt=""
                  src="../asserts/home--icon--interlocution7.svg"
                />
                <div className="ranking">Receive</div>
              </button>
              <button className="swap-button" onClick={openSideMenuPopup}>
                <img
                  className="home-icon-interlocution"
                  alt=""
                  src="../asserts/home--icon--interlocution8.svg"
                />
                <div className="ranking">More...</div>
              </button>
            </div>
          </div>
        </div>
        <div className="tradableorderssection-parent">
          <TokenCatalogTabs
            tradableOrdersSectionAlignSelf="unset"
            tradableOrdersSectionWidth="455px"
            tradableOrdersSectionBoxSizing="border-box"
          />
          <div className="coinlisting">
            <TokenDisplayItem
              coinIcon="../asserts/lyralogoblackicon@2x.png"
              coinName="Lyra Coin"
              amountText="1,234,525 LYR"
              amountWorth="$2,183"
            />
            <div className="tokendisplayitem">
              <div className="frame-group">
                <div className="lyralogoblueicon-parent">
                  <img
                    className="lyralogoblueicon4"
                    alt=""
                    src="../asserts/lyralogoblueicon4@2x.png"
                  />
                  <b className="custom-coin">Custom Coin</b>
                  <div className="cus-parent">
                    <b className="cus">1,234,525 CUS</b>
                    <b className="b">$2,183</b>
                  </div>
                </div>
                <div className="frame-child" />
              </div>
            </div>
            <TokenDisplayItem
              coinIcon="../asserts/logosbitcoin.svg"
              coinName="BitCoin"
              amountText="1.2345 BTC"
              amountWorth="$20,183"
              lyraLogoBlackIconObjectFit="unset"
            />
            <TokenDisplayItem
              coinIcon="../asserts/mask-group@2x.png"
              coinName="T-Shirt Blue"
              amountText="3 Items"
              amountWorth="$20,183"
            />
          </div>
        </div>
        <div className="coinlisting">{showTokens()}</div>
      </div>
      {isSideMenuPopupOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeSideMenuPopup}
        >
          <SideMenuPopup onClose={closeSideMenuPopup} />
        </PortalDrawer>
      )}
    </>
  );
};

export default WalletHome;
