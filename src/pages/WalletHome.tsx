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

  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onFrameButtonClick = useCallback(() => {
    //TODO: sel token
  }, []);

  const onFrameButton1Click = useCallback(() => {
    //TODO: sel nft
  }, []);

  const onFrameButton2Click = useCallback(() => {
    //TODO: sel fiat
  }, []);

  const onFrameButton3Click = useCallback(() => {
    //TODO: sel goods
  }, []);

  const onFrameButton4Click = useCallback(() => {
    //TODO: sel services
  }, []);

  return (
    <div className="wallethome main-content">
      <TopNavigationBar title="My Wallet" />
      <div className="wallet-card-parent">
        <PrimaryAccountContainer />
        <WalletToolBar />
        <div className="coinlisting">
          <CatalogTab
            onFrameButtonClick={onFrameButtonClick}
            onFrameButton1Click={onFrameButton1Click}
            onFrameButton2Click={onFrameButton2Click}
            onFrameButton3Click={onFrameButton3Click}
            onFrameButton4Click={onFrameButton4Click}
          />
          <div className="tokendisplayitem">
            <img
              className="lyralogoblackicon"
              alt=""
              src="../asserts/lyralogoblackicon@2x.png"
            />
            <div className="frame-container">
              <div className="lyra-coin-parent">
                <b className="lyra-coin">Lyra Coin</b>
                <div className="lyr-parent">
                  <b className="lyr">1,234,525 LYR</b>
                  <b className="b2">$2,183</b>
                </div>
              </div>
              <div className="line-div" />
            </div>
          </div>
          <div className="tokendisplayitem1">
            <div className="frame-container">
              <div className="lyra-coin-parent">
                <img
                  className="lyralogoblackicon"
                  alt=""
                  src="../asserts/lyralogoblueicon4@2x.png"
                />
                <b className="lyra-coin">Custom Coin</b>
                <div className="lyr-parent">
                  <b className="lyr">1,234,525 CUS</b>
                  <b className="b2">$2,183</b>
                </div>
              </div>
              <div className="line-div" />
            </div>
          </div>
          <div className="tokendisplayitem2">
            <img
              className="logosbitcoin-icon"
              alt=""
              src="../asserts/logosbitcoin.svg"
            />
            <div className="frame-container">
              <div className="lyra-coin-parent">
                <b className="lyra-coin">BitCoin</b>
                <div className="lyr-parent">
                  <b className="lyr">1.2345 BTC</b>
                  <b className="b2">$20,183</b>
                </div>
              </div>
              <div className="line-div" />
            </div>
          </div>
          <div className="tokendisplayitem2">
            <img
              className="lyralogoblackicon"
              alt=""
              src="../asserts/mask-group@2x.png"
            />
            <div className="frame-container">
              <div className="lyra-coin-parent">
                <b className="lyra-coin">T-Shirt Blue</b>
                <div className="lyr-parent">
                  <b className="lyr">3 Items</b>
                  <b className="b2">$20,183</b>
                </div>
              </div>
              <div className="line-div" />
            </div>
          </div>
        </div>
      </div>
      {showTokens()}
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
