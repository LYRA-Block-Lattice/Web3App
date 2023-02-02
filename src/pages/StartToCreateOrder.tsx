import { FunctionComponent, useCallback } from "react";
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
      <div className="choose-the-catalog">Choose the catalog</div>
      <div className="catalog-section">
        <CatalogSelection iWantTo="I want to sell:" />
        <div className="catalog-section-child" />
        <CatalogSelection iWantTo="I want to get:" />
      </div>
      <button
        className="prepare-sell-order-button12"
        onClick={onPrepareSellOrderButtonClick}
      >
        <div className="primary-button3">Specify Token</div>
      </button>
    </div>
  );
};

export default StartToCreateOrder;
