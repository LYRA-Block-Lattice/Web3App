import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import CatalogSelection from "../components/CatalogSelection";
import { useNavigate } from "react-router-dom";
import BottomNavigationBar from "../components/BottomNavigationBar";
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
      <BottomNavigationBar />
    </div>
  );
};

export default StartToCreateOrder;
