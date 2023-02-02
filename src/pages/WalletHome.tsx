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
        <div className="iconssection-wrapper">
          <div className="iconssection">
            <div className="swap-button-parent">
              <button className="swap-button" onClick={onSwapButtonClick}>
                <img
                  className="home-icon-interlocution"
                  alt=""
                  src="../asserts/home--icon--interlocution.svg"
                />
                <div className="ranking">Market</div>
              </button>
              <button className="swap-button">
                <img
                  className="home-icon-interlocution"
                  alt=""
                  src="../asserts/home--icon--interlocution1.svg"
                />
                <div className="ranking">Swap</div>
              </button>
              <button className="swap-button" onClick={onSendButtonClick}>
                <img
                  className="home-icon-interlocution"
                  alt=""
                  src="../asserts/home--icon--interlocution2.svg"
                />
                <div className="ranking">Send</div>
              </button>
              <button className="swap-button" onClick={onReceiveButtonClick}>
                <img
                  className="home-icon-interlocution"
                  alt=""
                  src="../asserts/home--icon--interlocution3.svg"
                />
                <div className="ranking">Receive</div>
              </button>
              <button className="swap-button" onClick={openSideMenuPopup}>
                <img
                  className="home-icon-interlocution"
                  alt=""
                  src="../asserts/home--icon--interlocution4.svg"
                />
                <div className="ranking">More...</div>
              </button>
            </div>
          </div>
        </div>
        <div className="tradableorderssection-parent">
          <div className="tradableorderssection">
            <div className="catalogtab">
              <button className="tokentab" onClick={() => setCat("")}>
                <b className="token">Token</b>
                <div className="ellipse-parent">
                  <img
                    className="group-child"
                    alt=""
                    src="../asserts/ellipse-43.svg"
                  />
                  <div className="div">18</div>
                </div>
              </button>
              <button className="nft-tab" onClick={() => setCat("nft")}>
                <b className="token">NFT</b>
                <div className="ellipse-parent">
                  <img
                    className="group-child"
                    alt=""
                    src="../asserts/ellipse-43.svg"
                  />
                  <div className="div">18</div>
                </div>
              </button>
              <button className="fiat-tab" onClick={() => setCat("fiat")}>
                <b className="fiat">Fiat</b>
              </button>
              <button className="fiat-tab" onClick={() => setCat("tot")}>
                <b className="fiat">Goods</b>
              </button>
              <button className="fiat-tab" onClick={() => setCat("svc")}>
                <b className="fiat">Service</b>
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
