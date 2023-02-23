import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import WalletCardContainer from "../components/WalletCardContainer";
import MarketToolBarContainer from "../components/MarketToolBarContainer";
import OrderForm from "../components/OrderForm";
import Footer from "../components/Footer";
import styles from "./ViewOrdersForm.module.css";

const ViewOrdersForm: FunctionComponent = () => {
  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onContextMenuButtonClick = useCallback(() => {
    //TODO: context menu
  }, []);

  const onBannerImageClick = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  return (
    <div className={styles.viewordersform}>
      <TopNavigationBar
        title="View Orders"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className={styles.walletCardParent}>
        <WalletCardContainer />
        <MarketToolBarContainer
          homeIconInterlocution="../home--icon--interlocution15.svg"
          homeIconInterlocution1="../home--icon--interlocution16.svg"
          homeIconInterlocution2="../home--icon--interlocution17.svg"
          homeIconInterlocution3="../home--icon--interlocution18.svg"
          homeIconInterlocution4="../home--icon--interlocution19.svg"
        />
        <OrderForm />
      </div>
      <Footer
        iconImageUrl="../box-alt-light.svg"
        moleculeImageUrl="../molecule-light.svg"
        walletImageUrl="../wallet-light.svg"
        userImageUrl="../user-alt-light.svg"
        propColor1="#434343"
        propColor2="#0ebd8d"
      />
    </div>
  );
};

export default ViewOrdersForm;
