import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import CatalogSelection from "../components/CatalogSelection";
import { useNavigate } from "react-router-dom";
import "./StartToCreateOrder.css";

const StartToCreateOrder: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrepareSellOrderButtonClick = useCallback(() => {
    navigate("/selltokentotoken");
  }, [navigate]);

  return (
    <div className="starttocreateorder">
      <TopNavigationBar
        title="Order Type"
        titleLetterSpacing="0.41px"
        titleFontWeight="500"
        titleFontFamily="'SF Pro Display'"
        titleLineHeight="18px"
      />
      <div className="catalog-section">
        <CatalogSelection iWantTo="I want to sell:" />
        <div className="catalog-section-child" />
        <CatalogSelection iWantTo="I want to get:" />
      </div>
      <button
        className="prepare-sell-order-button15"
        onClick={onPrepareSellOrderButtonClick}
      >
        <div className="primary-button4">Specify Token</div>
      </button>
      <div className="bottomtabbar3">
        <div className="home-indicator6">
          <div className="home-indicator7" />
        </div>
        <div className="tabbar3">
          <div className="tabbar-item12">
            <img
              className="box-alt-light-icon3"
              alt=""
              src="../asserts/box-alt-light.svg"
            />
            <div className="text22">Market</div>
          </div>
          <div className="tabbar-item12">
            <img
              className="box-alt-light-icon3"
              alt=""
              src="../asserts/molecule-light.svg"
            />
            <div className="text22">DAO</div>
          </div>
          <div className="tabbar-item12">
            <img
              className="box-alt-light-icon3"
              alt=""
              src="../asserts/wallet-light.svg"
            />
            <div className="text24">Wallet</div>
          </div>
          <div className="tabbar-item15">
            <img
              className="box-alt-light-icon3"
              alt=""
              src="../asserts/user-alt-light.svg"
            />
            <div className="text22">Me</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartToCreateOrder;
