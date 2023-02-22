import { FunctionComponent, useCallback } from "react";
import CatalogSelection from "../components/CatalogSelection";
import { useNavigate } from "react-router-dom";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./StartToCreateOrder.css";

const StartToCreateOrder: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMiniProgramsButtonsClick = useCallback(() => {
    //TODO: nav back
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onHomeClick = useCallback(() => {
    //TODO: back home
  }, []);

  const onNavigationPrepareSellOrderClick = useCallback(() => {
    //TODO: context menu
  }, []);

  const onPrepareSellOrderButtonClick = useCallback(() => {
    navigate("/selltokentotoken");
  }, [navigate]);

  return (
    <div className="starttocreateorder">
      <nav className="navigation29">
        <button
          className="mini-programs-buttons18"
          onClick={onMiniProgramsButtonsClick}
        >
          <img className="iconleft9" alt="" src="../asserts/iconleft4.svg" />
        </button>
        <button className="title14" onClick={onTitleClick}>
          Select Catalog
        </button>
        <div className="mini-programs-buttons19">
          <div className="stroke9" />
          <button className="home9" onClick={onHomeClick}>
            <img
              className="ellipse-icon18"
              alt=""
              src="../asserts/ellipse8.svg"
            />
            <img
              className="ellipse-icon19"
              alt=""
              src="../asserts/ellipse9.svg"
            />
          </button>
          <img
            className="separator-icon9"
            alt=""
            src="../asserts/separator4.svg"
          />
          <button
            className="navigationprepare-sell-order9"
            onClick={onNavigationPrepareSellOrderClick}
          >
            <img
              className="navigationprepare-sell-order-child23"
              alt=""
              src="../asserts/rectangle-19.svg"
            />
            <img
              className="navigationprepare-sell-order-child24"
              alt=""
              src="../asserts/vector-74.svg"
            />
            <img
              className="navigationprepare-sell-order-child25"
              alt=""
              src="../asserts/vector-84.svg"
            />
          </button>
        </div>
      </nav>
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
