import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ExtraWalletButtons from "../components/ExtraWalletButtons";
import PortalDrawer from "../components/PortalDrawer";

import { getAppSelector } from "../app/selectors";
import TokenDisplayItem from "../components/TokenDisplayItem";
import * as actionTypes from "../app/actionTypes";
import "./WalletHome.css";

const WalletHome: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isFrameOpen, setFrameOpen] = useState(false);
  const dispatch = useDispatch();
  const app = useSelector(getAppSelector);

  const [sellcnt, setSellcnt] = useState(0);
  const [bidcnt, setBidcnt] = useState(0);

  useEffect(() => {
    dispatch({ type: actionTypes.SIGNALR_CONNECT });
    dispatch({ type: actionTypes.WALLET_GET_BALANCE });
  }, [dispatch]);

  const onSwapButtonClick = useCallback(() => {
    navigate("/market");
  }, [navigate]);

  const onSendButtonClick = useCallback(() => {
    navigate("/sendtokenform");
  }, [navigate]);

  const onReceiveButtonClick = useCallback(() => {
    dispatch({
      type: actionTypes.WALLET_RECEIVE,
      payload: app.wallet.accountId
    });
  }, [navigate]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const showTokens = () => {
    console.log("in use call back to showTokens", app?.wallet?.balances);
    if (app.wallet.balances === undefined) return <div>No coins.</div>;
    else {
      return (
        <>
          {app.wallet.balances.map((a) => (
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
                <button className="qrcode-button">
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
              <button className="swap-button" onClick={openFrame}>
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
        <div className="tradableorderssection">
          <div className="catalogtab">
            <div className="token-parent">
              <b className="token">Token</b>
              <div className="ellipse-parent">
                <img
                  className="group-child"
                  alt=""
                  src="../asserts/ellipse-43.svg"
                />
                <div className="div">18</div>
              </div>
            </div>
            <div className="nft-parent">
              <b className="token">NFT</b>
              <div className="ellipse-parent">
                <img
                  className="group-child"
                  alt=""
                  src="../asserts/ellipse-43.svg"
                />
                <div className="div">18</div>
              </div>
            </div>
            <div className="fiat-wrapper">
              <b className="fiat">Fiat</b>
            </div>
            <div className="fiat-wrapper">
              <b className="fiat">Goods</b>
            </div>
            <div className="fiat-wrapper">
              <b className="fiat">Service</b>
            </div>
          </div>
        </div>
        <div className="coinlisting">{showTokens()}</div>
      </div>
      {isFrameOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeFrame}
        >
          <ExtraWalletButtons onClose={closeFrame} />
        </PortalDrawer>
      )}
    </>
  );
};

export default WalletHome;
