import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideMenuPopup from "../components/SideMenuPopup";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./WalletToolBar.module.css";

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
      <div className={styles.iconssectionWrapper}>
        <div className={styles.iconssection}>
          <div className={styles.swapButtonParent}>
            <button className={styles.swapButton} onClick={onSwapButtonClick}>
              <img
                className={styles.homeIconInterlocution}
                alt=""
                src="../home--icon--interlocution.svg"
              />
              <div className={styles.ranking}>Market</div>
            </button>
            <button className={styles.swapButton}>
              <img
                className={styles.homeIconInterlocution}
                alt=""
                src="../home--icon--interlocution1.svg"
              />
              <div className={styles.ranking}>Swap</div>
            </button>
            <button className={styles.swapButton} onClick={onSendButtonClick}>
              <img
                className={styles.homeIconInterlocution}
                alt=""
                src="../home--icon--interlocution2.svg"
              />
              <div className={styles.ranking}>Send</div>
            </button>
            <button className={styles.swapButton}>
              <img
                className={styles.homeIconInterlocution}
                alt=""
                src="../home--icon--interlocution3.svg"
              />
              <div className={styles.ranking}>Receive</div>
            </button>
            <button className={styles.swapButton} onClick={openSideMenuPopup}>
              <img
                className={styles.homeIconInterlocution}
                alt=""
                src="../home--icon--interlocution4.svg"
              />
              <div className={styles.ranking}>More...</div>
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
