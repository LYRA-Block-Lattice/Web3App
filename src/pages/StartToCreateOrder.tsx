import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import CatalogSelection from "../components/CatalogSelection";
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
          <CatalogSelection
            sellText="I want to sell:"
            icbaselineGeneratingToken="carbonuserservicedesk.svg"
            cat="Service"
          />
          <div className="catalog-section-child" />
          <CatalogSelection
            sellText="I want to get:"
            icbaselineGeneratingToken="carbonuserservicedesk.svg"
            cat="Service"
          />
        </div>
        <button
          className="prepare-sell-order-button"
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
