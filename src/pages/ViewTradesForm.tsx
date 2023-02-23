import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import MarketToolBar from "../components/MarketToolBar";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./ViewTradesForm.css";

const ViewTradesForm: FunctionComponent = () => {
  const onMiniProgramsButtonsClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onBannerImageClick = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  return (
    <div className="viewtradesform">
      <TopNavigationBar
        title="My Trades"
        onMiniProgramsButtonsClick={onMiniProgramsButtonsClick}
        onTitleClick={onTitleClick}
      />
      <div className="wallet-card-group">
        <div className="wallet-card">
          <div className="wallet-card-inner">
            <div className="rectangle-wrapper">
              <div className="rectangle2" />
            </div>
          </div>
          <div className="wallet-card-child">
            <div className="balance-display-zone-parent">
              <a className="balance-display-zone">
                <button className="wallet-name-label">
                  My Primary Account
                </button>
                <div className="balance-display-zone-child" />
                <b className="usdtbalance">1,025,000</b>
                <b className="lyrlabel">LYR</b>
                <div className="balance-display-zone-item" />
              </a>
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
          </div>
        </div>
        <MarketToolBar
          homeIconInterlocution="../asserts/home--icon--interlocution10.svg"
          homeIconInterlocution1="../asserts/home--icon--interlocution11.svg"
          homeIconInterlocution2="../asserts/home--icon--interlocution12.svg"
          homeIconInterlocution3="../asserts/home--icon--interlocution13.svg"
          homeIconInterlocution4="../asserts/home--icon--interlocution14.svg"
        />
        <div className="ordercard">
          <div className="order-brief-section">
            <button className="banner-image" onClick={onBannerImageClick}>
              <div className="order-banner">
                <div className="order-image">
                  <img
                    className="icbaseline-generating-tokens-icon"
                    alt=""
                    src="../asserts/icbaselinegeneratingtokens2.svg"
                  />
                  <img
                    className="order-image-child"
                    alt=""
                    src="../asserts/arrow-1.svg"
                  />
                  <img
                    className="icbaseline-generating-tokens-icon"
                    alt=""
                    src="../asserts/carbonuserservicedesk2.svg"
                  />
                </div>
                <div className="order-status">
                  <b className="open">Open</b>
                </div>
              </div>
            </button>
            <a className="title-section">
              <div className="trade-parent">
                <b className="trade">Trade</b>
                <b className="trade">BTC</b>
                <img
                  className="frame-item"
                  alt=""
                  src="../asserts/arrow-2.svg"
                />
                <b className="tetherusdt2">tether/USDT</b>
              </div>
              <div className="title-section-child" />
              <div className="am-wrapper">
                <div className="trade">12/29/2022 10:25:37 AM</div>
              </div>
              <div className="details-section">
                <div className="block1">
                  <div className="trade">Price</div>
                </div>
                <div className="block2">
                  <div className="trade">10,323</div>
                </div>
                <div className="details-section-child" />
                <div className="block3">
                  <div className="trade">Amount</div>
                </div>
                <div className="block2">
                  <div className="trade">1113.2</div>
                </div>
              </div>
            </a>
          </div>
          <div className="trades-section">
            <div className="width-controller" />
          </div>
          <div className="itemactions">
            <button className="delist-button">
              <div className="mini-button">Cancel</div>
            </button>
            <button className="delist-button">
              <div className="mini-button">Close</div>
            </button>
            <button className="delist-button">
              <div className="mini-button">Complain</div>
            </button>
            <button className="delist-button">
              <div className="mini-button">Comment</div>
            </button>
          </div>
        </div>
      </div>
      <BottomNavigationBar
        boxAltLight1="../asserts/box-alt-light.svg"
        moleculeLight1="../asserts/molecule-light.svg"
        walletLight1="../asserts/wallet-light.svg"
        userAltLight1="../asserts/user-alt-light.svg"
        textColor="#434343"
        textColor2="#0ebd8d"
      />
    </div>
  );
};

export default ViewTradesForm;
