import { FunctionComponent, useState, useCallback } from "react";
import GeneralPopup from "../components/GeneralPopup";
import PortalPopup from "../components/PortalPopup";
import "./MiscComponents.css";

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
      <div className="misccomponents">
        <div className="nft-showing-item-parent">
          <div className="nft-showing-item">
            <div className="lyralogoblueicon-wrapper">
              <img
                className="lyralogoblueicon"
                alt=""
                src="../asserts/lyralogoblueicon@2x.png"
              />
            </div>
            <div className="content">
              <div className="name-bm">
                <div className="put-your-product">
                  put your product name here or go!
                </div>
                <img
                  className="press-area-icon"
                  alt=""
                  src="../asserts/press-area.svg"
                />
              </div>
              <div className="price">
                <div className="div2">60$</div>
              </div>
            </div>
          </div>
          <div className="nft-showing-item">
            <div className="lyralogoblueicon-wrapper">
              <img
                className="lyralogoblueicon"
                alt=""
                src="../asserts/lyralogoblueicon@2x.png"
              />
            </div>
            <div className="content">
              <div className="name-bm">
                <div className="put-your-product">
                  put your product name here or go!
                </div>
                <img
                  className="press-area-icon"
                  alt=""
                  src="../asserts/press-area.svg"
                />
              </div>
              <div className="price">
                <div className="div2">60$</div>
              </div>
            </div>
          </div>
        </div>
        <div className="nft-showing-item-parent">
          <button className="nft-showing-item2" onClick={openGeneralPopup}>
            <div className="lyralogoblueicon-wrapper">
              <img
                className="lyralogoblueicon"
                alt=""
                src="../asserts/lyralogoblueicon@2x.png"
              />
            </div>
            <div className="content2">
              <div className="name-bm">
                <div className="put-your-product2">
                  put your product name here or go!
                </div>
              </div>
            </div>
          </button>
          <button className="nft-showing-item2" onClick={openGeneralPopup1}>
            <div className="lyralogoblueicon-wrapper">
              <img
                className="lyralogoblueicon"
                alt=""
                src="../asserts/lyralogoblueicon@2x.png"
              />
            </div>
            <div className="content2">
              <div className="name-bm">
                <div className="put-your-product2">
                  put your product name here or go!
                </div>
              </div>
            </div>
          </button>
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
