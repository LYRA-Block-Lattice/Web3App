import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SideMenuPopup from "../components/SideMenuPopup";
import PortalDrawer from "../components/PortalDrawer";
import WalletCard from "../components/WalletCard";

import { getAppSelector, getAuthSelector } from "../app/selectors";
import TokenDisplayItem from "../components/TokenDisplayItem";
import * as actionTypes from "../app/actionTypes";
import "./WalletHome.css";
import { IBalance } from "../app/wallet/walletReducer";

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
    if (auth.hasKey) dispatch({ type: actionTypes.WALLET_GET_BALANCE });
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

  const showTokens = () => {
    //console.log("in use call back to showTokens", app?.wallet?.balances);
    if (app.wallet.balances === undefined) return <div>No coins.</div>;
    else {
      return (
        <>
          {ofCatalog(app.wallet.balances).map((a) => (
            <TokenDisplayItem
              key={a.Ticker}
              coinIcon="../asserts/lyralogoblackicon@2x.png"
              coinName={a.Name ?? a.Ticker}
              amountText={a.Balance?.toLocaleString(undefined, {
                maximumFractionDigits: 2
              })}
              amountWorth=""
            />
          ))}
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
            <div className="swap-button-group">
              <button className="send-button" onClick={onSwapButtonClick}>
                <img
                  className="home-icon-interlocution4"
                  alt=""
                  src="../asserts/home--icon--interlocution4.svg"
                />
                <div className="ranking4">Market</div>
              </button>
              <button className="send-button">
                <img
                  className="home-icon-interlocution4"
                  alt=""
                  src="../asserts/home--icon--interlocution5.svg"
                />
                <div className="ranking4">Swap</div>
              </button>
              <button className="send-button" onClick={onSendButtonClick}>
                <img
                  className="home-icon-interlocution4"
                  alt=""
                  src="../asserts/home--icon--interlocution6.svg"
                />
                <div className="ranking4">Send</div>
              </button>
              <button className="send-button" onClick={onReceiveButtonClick}>
                <img
                  className="home-icon-interlocution4"
                  alt=""
                  src="../asserts/home--icon--interlocution7.svg"
                />
                <div className="ranking4">Receive</div>
              </button>
              <button className="send-button" onClick={openSideMenuPopup}>
                <img
                  className="home-icon-interlocution4"
                  alt=""
                  src="../asserts/home--icon--interlocution8.svg"
                />
                <div className="ranking4">More...</div>
              </button>
            </div>
          </div>
        </div>
        <div className="tradableorderssection-parent">
          <div className="tradableorderssection2">
            <div className="catalogtab1">
              <button className="tokentab1" onClick={() => setCat("")}>
                <b className="token1">Token</b>
                <div className="ellipse-container">
                  <img
                    className="group-inner"
                    alt=""
                    src="../asserts/ellipse-43.svg"
                  />
                  <div className="div2">18</div>
                </div>
              </button>
              <button className="nft-tab1" onClick={() => setCat("nft")}>
                <b className="token1">NFT</b>
                <div className="ellipse-container">
                  <img
                    className="group-inner"
                    alt=""
                    src="../asserts/ellipse-43.svg"
                  />
                  <div className="div2">18</div>
                </div>
              </button>
              <button className="fiat-tab1" onClick={() => setCat("fiat")}>
                <b className="fiat1">Fiat</b>
              </button>
              <button className="fiat-tab1" onClick={() => setCat("tot")}>
                <b className="fiat1">Goods</b>
              </button>
              <button className="fiat-tab1" onClick={() => setCat("svc")}>
                <b className="fiat1">Service</b>
              </button>
            </div>
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
