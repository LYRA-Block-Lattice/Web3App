import { FunctionComponent, useState, useCallback } from "react";
import GeneralPopup from "../components/GeneralPopup";
import PortalPopup from "../components/PortalPopup";
import ItemContainer from "../components/ItemContainer";
import ProductContainer from "../components/ProductContainer";
import styles from "./MiscComponents.module.css";

const MiscComponents: FunctionComponent = () => {
  const [isGeneralPopupOpen, setGeneralPopupOpen] = useState(false);
  const [isGeneralPopup1Open, setGeneralPopup1Open] = useState(false);

  const openGeneralPopup = useCallback(() => {
    setGeneralPopupOpen(true);
  }, []);

  const closeGeneralPopup = useCallback(() => {
    setGeneralPopupOpen(false);
  }, []);

  const openGeneralPopup1 = useCallback(() => {
    setGeneralPopup1Open(true);
  }, []);

  const closeGeneralPopup1 = useCallback(() => {
    setGeneralPopup1Open(false);
  }, []);

  return (
    <>
      <div className={styles.misccomponents}>
        <div className={styles.nftShowingItemParent}>
          <ItemContainer />
          <ItemContainer />
        </div>
        <div className={styles.nftShowingItemParent}>
          <ProductContainer openGeneralPopup={openGeneralPopup} />
          <ProductContainer openGeneralPopup={openGeneralPopup1} />
        </div>
      </div>
      {isGeneralPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGeneralPopup}
        >
          <GeneralPopup onClose={closeGeneralPopup} />
        </PortalPopup>
      )}
      {isGeneralPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGeneralPopup1}
        >
          <GeneralPopup onClose={closeGeneralPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default MiscComponents;
