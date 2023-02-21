import { FunctionComponent, useState, useCallback } from "react";
import WalletCard from "../components/WalletCard";
import { useNavigate } from "react-router-dom";
import SideMenuPopup from "../components/SideMenuPopup";
import PortalDrawer from "../components/PortalDrawer";
import TokenCatalogTabs from "../components/TokenCatalogTabs";
import TokenDisplayItem from "../components/TokenDisplayItem";
import "./WalletHome.css";

const WalletHome: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isSideMenuPopupOpen, setSideMenuPopupOpen] = useState(false);

  const onSwapButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSendButtonClick = useCallback(() => {
    navigate("/sendtokenform");
  }, [navigate]);

  const openSideMenuPopup = useCallback(() => {
    setSideMenuPopupOpen(true);
  }, []);

  const closeSideMenuPopup = useCallback(() => {
    setSideMenuPopupOpen(false);
  }, []);

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
                  src="../asserts/home--icon--interlocution5.svg"
                />
                <div className="ranking">Market</div>
              </button>
              <button className="swap-button">
                <img
                  className="home-icon-interlocution"
                  alt=""
                  src="../asserts/home--icon--interlocution6.svg"
                />
                <div className="ranking">Swap</div>
              </button>
              <button className="swap-button" onClick={onSendButtonClick}>
                <img
                  className="home-icon-interlocution"
                  alt=""
                  src="../asserts/home--icon--interlocution7.svg"
                />
                <div className="ranking">Send</div>
              </button>
              <button className="swap-button">
                <img
                  className="home-icon-interlocution"
                  alt=""
                  src="../asserts/home--icon--interlocution8.svg"
                />
                <div className="ranking">Receive</div>
              </button>
              <button className="swap-button" onClick={openSideMenuPopup}>
                <img
                  className="home-icon-interlocution"
                  alt=""
                  src="../asserts/home--icon--interlocution9.svg"
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
