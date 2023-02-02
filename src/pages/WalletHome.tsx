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
              <button className="swap-button">
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
              <button className="tokentab">
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
              <button className="nft-tab">
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
              <button className="fiat-tab">
                <b className="fiat">Fiat</b>
              </button>
              <button className="fiat-tab">
                <b className="fiat">Goods</b>
              </button>
              <button className="fiat-tab">
                <b className="fiat">Service</b>
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
              <div className="frame-parent">
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
