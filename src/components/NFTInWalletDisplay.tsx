import { FunctionComponent, useState, useCallback } from "react";
import GeneralPopup from "../components/GeneralPopup";
import PortalPopup from "../components/PortalPopup";
import "./NFTInWalletDisplay.css";

const NFTInWalletDisplay: FunctionComponent = () => {
  const [isGeneralPopupOpen, setGeneralPopupOpen] = useState(false);

  const openGeneralPopup = useCallback(() => {
    setGeneralPopupOpen(true);
  }, []);

  const closeGeneralPopup = useCallback(() => {
    setGeneralPopupOpen(false);
  }, []);

  return (
    <>
      <button className="nft-showing-item3" onClick={openGeneralPopup}>
        <div className="lyralogoblueicon-wrapper1">
          <img
            className="lyralogoblueicon4"
            alt=""
            src="../asserts/lyralogoblueicon@2x.png"
          />
        </div>
        <div className="content3">
          <div className="name-bm3">
            <div className="put-your-product3">
              put your product name here or go!
            </div>
          </div>
        </div>
      </button>
      {isGeneralPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGeneralPopup}
        >
          <GeneralPopup onClose={closeGeneralPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default NFTInWalletDisplay;
