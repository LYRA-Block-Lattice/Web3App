import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./StartToCreateOrder.css";

const StartToCreateOrder: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrepareSellOrderButtonClick = useCallback(() => {
    navigate("/selecttokenfororder");
  }, [navigate]);

  return (
    <div className="starttocreateorder">
      <div className="frame-div3">
        <div className="frame-div4">
          <div className="i-want-to-sell">I want to sell:</div>
          <div className="tradecatalog">
            <button className="select-token-button2">
              <div className="frame-div5">
                <img
                  className="material-symbolsgenerating-to-icon"
                  alt=""
                  src="../asserts/materialsymbolsgeneratingtokensrounded.svg"
                />
                <b className="token">Token</b>
              </div>
            </button>
            <button className="select-nft-button">
              <div className="frame-div5">
                <img
                  className="material-symbolsgenerating-to-icon"
                  alt=""
                  src="../asserts/materialsymbolstokenrounded.svg"
                />
                <b className="nft">NFT</b>
              </div>
            </button>
            <button className="frame-button1">
              <div className="frame-div7">
                <img
                  className="material-symbolsgenerating-to-icon"
                  alt=""
                  src="../asserts/phmoneylight.svg"
                />
                <b className="token">Fiat</b>
              </div>
            </button>
            <button className="frame-button2">
              <div className="frame-div5">
                <img
                  className="material-symbolsgenerating-to-icon"
                  alt=""
                  src="../asserts/lucidepackageopen.svg"
                />
                <b className="nft">Goods</b>
              </div>
            </button>
            <button className="frame-button3">
              <div className="frame-div5">
                <img
                  className="material-symbolsgenerating-to-icon"
                  alt=""
                  src="../asserts/mdiworkeroutline.svg"
                />
                <b className="token">Service</b>
              </div>
            </button>
          </div>
        </div>
        <div className="frame-div4">
          <div className="i-want-to-sell">I want to get:</div>
          <div className="tradecatalog1">
            <button className="select-token-button2">
              <div className="frame-div5">
                <img
                  className="material-symbolsgenerating-to-icon"
                  alt=""
                  src="../asserts/materialsymbolsgeneratingtokensrounded.svg"
                />
                <b className="token">Token</b>
              </div>
            </button>
            <button className="select-nft-button">
              <div className="frame-div5">
                <img
                  className="material-symbolsgenerating-to-icon"
                  alt=""
                  src="../asserts/materialsymbolstokenrounded.svg"
                />
                <b className="nft">NFT</b>
              </div>
            </button>
            <button className="frame-button1">
              <div className="frame-div7">
                <img
                  className="material-symbolsgenerating-to-icon"
                  alt=""
                  src="../asserts/phmoneylight.svg"
                />
                <b className="token">Fiat</b>
              </div>
            </button>
            <button className="frame-button2">
              <div className="frame-div5">
                <img
                  className="material-symbolsgenerating-to-icon"
                  alt=""
                  src="../asserts/lucidepackageopen.svg"
                />
                <b className="nft">Goods</b>
              </div>
            </button>
            <button className="frame-button3">
              <div className="frame-div5">
                <img
                  className="material-symbolsgenerating-to-icon"
                  alt=""
                  src="../asserts/mdiworkeroutline.svg"
                />
                <b className="token">Service</b>
              </div>
            </button>
          </div>
        </div>
      </div>
      <button
        className="prepare-sell-order-button2"
        onClick={onPrepareSellOrderButtonClick}
      >
        <b className="prepare-tokens">Prepare Token(s)</b>
      </button>
    </div>
  );
};

export default StartToCreateOrder;
