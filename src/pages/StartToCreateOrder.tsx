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
      <TopNavigationBar title="Select Catalog" />
      <div className="catalog-section-parent">
        <div className="catalog-section">
          <CatalogSelection iWantTo="I want to sell:" />
          <div className="catalog-section-child" />
          <CatalogSelection iWantTo="I want to get:" />
        </div>
        <button
          className="prepare-sell-order-button16"
          onClick={onPrepareSellOrderButtonClick}
        >
          <div className="primary-button5">Specify Token</div>
        </button>
      </div>
      <BottomNavigationBar
        boxAltLight="../asserts/box-alt-light.svg"
        moleculeLight="../asserts/molecule-light.svg"
        walletLight="../asserts/wallet-light.svg"
        userAltLight="../asserts/user-alt-light.svg"
      />
    </div>
  );
};

export default StartToCreateOrder;
