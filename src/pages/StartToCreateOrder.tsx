import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import { useNavigate } from "react-router-dom";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./StartToCreateOrder.css";

const StartToCreateOrder: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onContextMenuButtonClick = useCallback(() => {
    //TODO: context menu
  }, []);

  const onPrepareSellOrderButtonClick = useCallback(() => {
    navigate("/selltokentotoken");
  }, [navigate]);

  return (
    <div className="starttocreateorder">
      <TopNavigationBar
        title="Select Catalog"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className="catalog-section-parent">
        <div className="catalog-section">
          <div className="catalogselection">
            <div className="i-want-to">I want to sell:</div>
            <div className="tradecatalog">
              <button className="select-token-catalog-button">
                <img
                  className="mapart-gallery-icon"
                  alt=""
                  src="../asserts/icbaselinegeneratingtokens2.svg"
                />
                <div className="token-wrapper">
                  <b className="token">Token</b>
                </div>
              </button>
              <button className="select-token-catalog-button">
                <img
                  className="mapart-gallery-icon"
                  alt=""
                  src="../asserts/mapartgallery.svg"
                />
                <div className="token-wrapper">
                  <b className="token">NFT</b>
                </div>
              </button>
              <button className="select-token-catalog-button">
                <img
                  className="mapart-gallery-icon"
                  alt=""
                  src="../asserts/fluentemojihighcontrastdollarbanknote.svg"
                />
                <div className="token-wrapper">
                  <b className="fiat">Fiat</b>
                </div>
              </button>
              <button className="select-token-catalog-button">
                <img
                  className="mapart-gallery-icon"
                  alt=""
                  src="../asserts/mditruckdelivery.svg"
                />
                <div className="token-wrapper">
                  <b className="goods">Goods</b>
                </div>
              </button>
              <button className="select-token-catalog-button">
                <img
                  className="mapart-gallery-icon"
                  alt=""
                  src="../asserts/carbonuserservicedesk2.svg"
                />
                <div className="token-wrapper">
                  <b className="fiat">Service</b>
                </div>
              </button>
            </div>
          </div>
          <div className="catalog-section-child" />
          <div className="catalogselection">
            <div className="i-want-to">I want to get:</div>
            <div className="tradecatalog">
              <button className="select-token-catalog-button">
                <img
                  className="mapart-gallery-icon"
                  alt=""
                  src="../asserts/icbaselinegeneratingtokens3.svg"
                />
                <div className="token-wrapper">
                  <b className="token">Token</b>
                </div>
              </button>
              <button className="select-token-catalog-button">
                <img
                  className="mapart-gallery-icon"
                  alt=""
                  src="../asserts/mapartgallery.svg"
                />
                <div className="token-wrapper">
                  <b className="token">NFT</b>
                </div>
              </button>
              <button className="select-token-catalog-button">
                <img
                  className="mapart-gallery-icon"
                  alt=""
                  src="../asserts/fluentemojihighcontrastdollarbanknote.svg"
                />
                <div className="token-wrapper">
                  <b className="fiat">Fiat</b>
                </div>
              </button>
              <button className="select-token-catalog-button">
                <img
                  className="mapart-gallery-icon"
                  alt=""
                  src="../asserts/mditruckdelivery1.svg"
                />
                <div className="token-wrapper">
                  <b className="goods">Goods</b>
                </div>
              </button>
              <button className="select-token-catalog-button">
                <img
                  className="mapart-gallery-icon"
                  alt=""
                  src="../asserts/carbonuserservicedesk2.svg"
                />
                <div className="token-wrapper">
                  <b className="fiat">Service</b>
                </div>
              </button>
            </div>
          </div>
        </div>
        <button
          className="prepare-sell-order-button2"
          onClick={onPrepareSellOrderButtonClick}
        >
          <div className="primary-button">Specify Token</div>
        </button>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default StartToCreateOrder;
