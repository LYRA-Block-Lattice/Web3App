import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideMenuPopup from "../components/SideMenuPopup";
import PortalDrawer from "../components/PortalDrawer";
import "./WalletToolBar.css";

const WalletToolBar: FunctionComponent = () => {
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
      <div className="iconssection-wrapper">
        <div className="iconssection">
          <div className="swap-button-parent">
            <button className="swap-button" onClick={onSwapButtonClick}>
              <img
                className="home-icon-interlocution"
                alt=""
                src="../home--icon--interlocution.svg"
              />
              <div className="ranking">Market</div>
            </button>
            <button className="swap-button">
              <img
                className="home-icon-interlocution"
                alt=""
                src="../home--icon--interlocution1.svg"
              />
              <div className="ranking">Swap</div>
            </button>
            <button className="swap-button" onClick={onSendButtonClick}>
              <img
                className="home-icon-interlocution"
                alt=""
                src="../home--icon--interlocution2.svg"
              />
              <div className="ranking">Send</div>
            </button>
            <button className="swap-button">
              <img
                className="home-icon-interlocution"
                alt=""
                src="../home--icon--interlocution3.svg"
              />
              <div className="ranking">Receive</div>
            </button>
            <button className="swap-button" onClick={openSideMenuPopup}>
              <img
                className="home-icon-interlocution"
                alt=""
                src="../home--icon--interlocution4.svg"
              />
              <div className="ranking">More...</div>
            </button>
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

export default WalletToolBar;
