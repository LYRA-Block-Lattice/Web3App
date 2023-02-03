import { FunctionComponent, useState, useCallback } from "react";
import SideMenuPopup from "../components/SideMenuPopup";
import PortalDrawer from "../components/PortalDrawer";
import WalletCard from "../components/WalletCard";
import { useNavigate } from "react-router-dom";
import TokenDisplayItem from "../components/TokenDisplayItem";
import "./WalletHome.css";

const WalletHome: FunctionComponent = () => {
  const [isSideMenuPopupOpen, setSideMenuPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openSideMenuPopup = useCallback(() => {
    setSideMenuPopupOpen(true);
  }, []);

  const closeSideMenuPopup = useCallback(() => {
    setSideMenuPopupOpen(false);
  }, []);

  const onSwapButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSendButtonClick = useCallback(() => {
    navigate("/sendtokenform");
  }, [navigate]);

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
              <button className="send-button">
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
              <button className="tokentab1">
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
              <button className="nft-tab1">
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
              <button className="fiat-tab1">
                <b className="fiat1">Fiat</b>
              </button>
              <button className="fiat-tab1">
                <b className="fiat1">Goods</b>
              </button>
              <button className="fiat-tab1">
                <b className="fiat1">Service</b>
              </button>
            </div>
          </div>
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
                    className="lyralogoblueicon"
                    alt=""
                    src="../asserts/lyralogoblueicon@2x.png"
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
