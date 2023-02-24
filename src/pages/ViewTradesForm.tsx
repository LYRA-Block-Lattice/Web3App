import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import WalletCardContainer from "../components/WalletCardContainer";
import MarketToolBarContainer from "../components/MarketToolBarContainer";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./ViewTradesForm.css";

const ViewTradesForm: FunctionComponent = () => {
  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onContextMenuButtonClick = useCallback(() => {
    //TODO: context menu
  }, []);

  const onBannerImageClick = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  return (
    <div className="viewtradesform">
      <TopNavigationBar
        title="View Trades"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className="wallet-card-container">
        <WalletCardContainer />
        <MarketToolBarContainer
          homeIconInterlocution="../asserts/home--icon--interlocution10.svg"
          homeIconInterlocution1="../asserts/home--icon--interlocution11.svg"
          homeIconInterlocution2="../asserts/home--icon--interlocution12.svg"
          homeIconInterlocution3="../asserts/home--icon--interlocution13.svg"
          homeIconInterlocution4="../asserts/home--icon--interlocution14.svg"
        />
        <div className="ordercard1">
          <div className="order-brief-section1">
            <button className="banner-image1" onClick={onBannerImageClick}>
              <div className="order-banner1">
                <div className="order-image1">
                  <img
                    className="icbaseline-generating-tokens-icon1"
                    alt=""
                    src="../asserts/icbaselinegeneratingtokens8.svg"
                  />
                  <img
                    className="order-image-item"
                    alt=""
                    src="../asserts/arrow-1.svg"
                  />
                  <img
                    className="icbaseline-generating-tokens-icon1"
                    alt=""
                    src="../asserts/carbonuserservicedesk7.svg"
                  />
                </div>
                <div className="order-status1">
                  <b className="open1">Open</b>
                </div>
              </div>
            </button>
            <a className="title-section1">
              <div className="trade-parent">
                <b className="trade">Trade</b>
                <b className="trade">BTC</b>
                <img
                  className="arrow-icon"
                  alt=""
                  src="../asserts/arrow-2.svg"
                />
                <b className="tetherusdt3">tether/USDT</b>
              </div>
              <div className="title-section-child" />
              <div className="am-wrapper">
                <div className="trade">12/29/2022 10:25:37 AM</div>
              </div>
              <div className="details-section1">
                <div className="block11">
                  <div className="trade">Price</div>
                </div>
                <div className="block21">
                  <div className="trade">10,323</div>
                </div>
                <div className="details-section-item" />
                <div className="block31">
                  <div className="trade">Amount</div>
                </div>
                <div className="block21">
                  <div className="trade">1113.2</div>
                </div>
              </div>
            </a>
          </div>
          <div className="trades-section1">
            <div className="width-controller1" />
          </div>
          <div className="itemactions">
            <button className="delist-button">
              <div className="mini-button2">Cancel</div>
            </button>
            <button className="delist-button">
              <div className="mini-button2">Close</div>
            </button>
            <button className="delist-button">
              <div className="mini-button2">Complain</div>
            </button>
            <button className="delist-button">
              <div className="mini-button2">Comment</div>
            </button>
          </div>
        </div>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default ViewTradesForm;
