import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SideMenuPopup from "../components/SideMenuPopup";
import PortalDrawer from "../components/PortalDrawer";

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
          !a.token.startsWith("fiat/") &&
          !a.token.startsWith("nft/") &&
          !a.token.startsWith("tot/") &&
          !a.token.startsWith("svc/")
      );
    else return app.wallet.balances.filter((a) => a.token.startsWith(cat));
  };

  const onSwapButtonClick = useCallback(() => {
    navigate("/market");
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
              key={a.token}
              coinIcon="../asserts/lyralogoblackicon@2x.png"
              coinName={a.token}
              amountText={a.balance?.toString()}
              amountWorth="$2"
            />
          ))}
        </>
      );
    }
  };

  return (
    <>
      <div className="wallethome">
        <div className="wallet-card">
          <div className="wallet-card-inner">
            <div className="rectangle-wrapper">
              <div className="rectangle" />
            </div>
          </div>
          <div className="frame-parent">
            <div className="balance-display-zone-parent">
              <Link className="balance-display-zone" to="/openwallet">
                <button className="wallet-name-label">{app.name}</button>
                <div className="balance-display-zone-child" />
                <b className="usdtbalance">{app.wallet.balance}</b>
                <b className="lyrlabel">LYR</b>
                <div className="balance-display-zone-item" />
                <b className="usdtbalance">{app.wallet.usdt}</b>
                <b className="lyrlabel">USDT</b>
              </Link>
              <div className="qrcode-button-wrapper">
                <button className="qrcode-button" onClick={scanToPay}>
                  <div className="qrcode-button-round" />
                  <img
                    className="qrcode-icon"
                    alt=""
                    src="../asserts/qrcode-icon.svg"
                  />
                </button>
              </div>
            </div>
            <div className="token-lists">
              <button className="go-nft-button">
                <div className="nft-count">{app.wallet.nftcnt}</div>
                <b className="nft-label">NFT</b>
              </button>
              <button className="go-nft-button">
                <div className="tot-count">{app.wallet.totcnt}</div>
                <b className="nft-label">TOT</b>
              </button>
              <button className="go-nft-button">
                <div className="tot-count">{sellcnt}</div>
                <b className="nft-label">Selling</b>
              </button>
              <button className="go-nft-button">
                <div className="tot-count">{bidcnt}</div>
                <b className="nft-label">Buying</b>
              </button>
            </div>
          </div>
        </div>
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
              <button className="nft-tab" onClick={() => setCat("nft/")}>
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
              <button className="fiat-tab" onClick={() => setCat("fiat/")}>
                <b className="fiat">Fiat</b>
              </button>
              <button className="fiat-tab" onClick={() => setCat("tot/")}>
                <b className="fiat">Goods</b>
              </button>
              <button className="fiat-tab" onClick={() => setCat("svc/")}>
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
