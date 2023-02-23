import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import TokenContainer from "../components/TokenContainer";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
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
        <TokenContainer />
        <button
          className="prepare-sell-order-button13"
          onClick={onPrepareSellOrderButtonClick}
        >
          <div className="primary-button6">Specify Token</div>
        </button>
      </div>
      <Footer
        iconImageUrl="../box-alt-light6.svg"
        moleculeImageUrl="../molecule-light6.svg"
        walletImageUrl="../wallet-light6.svg"
        userImageUrl="../user-alt-light6.svg"
      />
    </div>
  );
};

export default StartToCreateOrder;
