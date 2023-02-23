import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import TokenContainer from "../components/TokenContainer";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import styles from "./StartToCreateOrder.module.css";

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
    <div className={styles.starttocreateorder}>
      <TopNavigationBar
        title="Select Catalog"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className={styles.catalogSectionParent}>
        <TokenContainer />
        <button
          className={styles.prepareSellOrderButton}
          onClick={onPrepareSellOrderButtonClick}
        >
          <div className={styles.primaryButton}>Specify Token</div>
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
