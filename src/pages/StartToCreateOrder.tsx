import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CatalogSelection from "../components/CatalogSelection";
import "./StartToCreateOrder.css";

const StartToCreateOrder: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrepareSellOrderButtonClick = useCallback(() => {
    navigate("/selecttokenfororder");
  }, [navigate]);

  return (
    <div className="starttocreateorder">
      <div className="chose-the-catalog-of-token">
        Chose the catalog of token
      </div>
      <div className="catalog-section">
        <CatalogSelection iWantTo="Sell" />
        <div className="line-div" />
        <CatalogSelection iWantTo="Buy" />
      </div>
      <button
        className="prepare-sell-order-button15"
        onClick={onPrepareSellOrderButtonClick}
      >
        <div className="primary-button3">Next</div>
      </button>
    </div>
  );
};

export default StartToCreateOrder;
