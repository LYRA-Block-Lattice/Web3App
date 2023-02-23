import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import CatalogSelection from "../components/CatalogSelection";
import { useNavigate } from "react-router-dom";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./StartToCreateOrder.css";

const StartToCreateOrder: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMiniProgramsButtonsClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onPrepareSellOrderButtonClick = useCallback(() => {
    navigate("/selltokentotoken");
  }, [navigate]);

  return (
    <div className="starttocreateorder">
      <TopNavigationBar
        title="Select Catalog"
        onMiniProgramsButtonsClick={onMiniProgramsButtonsClick}
        onTitleClick={onTitleClick}
      />
      <div className="catalog-section-parent">
        <div className="catalog-section">
          <CatalogSelection iWantTo="I want to sell:" />
          <div className="catalog-section-child" />
          <CatalogSelection iWantTo="I want to get:" />
        </div>
        <button
          className="prepare-sell-order-button15"
          onClick={onPrepareSellOrderButtonClick}
        >
          <div className="primary-button5">Specify Token</div>
        </button>
      </div>
      <BottomNavigationBar
        boxAltLight1="../asserts/box-alt-light4.svg"
        moleculeLight1="../asserts/molecule-light4.svg"
        walletLight1="../asserts/wallet-light4.svg"
        userAltLight1="../asserts/user-alt-light4.svg"
        textColor="#434343"
        textColor1="#0ebd8d"
      />
    </div>
  );
};

export default StartToCreateOrder;
