import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import WalletCardContainer from "../components/WalletCardContainer";
import MarketToolBarContainer from "../components/MarketToolBarContainer";
import TradeContainer from "../components/TradeContainer";
import Footer from "../components/Footer";
import styles from "./ViewTradesForm.module.css";

const ViewTradesForm: FunctionComponent = () => {
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
    <div className={styles.viewtradesform}>
      <TopNavigationBar
        title="View Trades"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className={styles.walletCardParent}>
        <WalletCardContainer />
        <MarketToolBarContainer
          homeIconInterlocution="../home--icon--interlocution10.svg"
          homeIconInterlocution1="../home--icon--interlocution11.svg"
          homeIconInterlocution2="../home--icon--interlocution12.svg"
          homeIconInterlocution3="../home--icon--interlocution13.svg"
          homeIconInterlocution4="../home--icon--interlocution14.svg"
        />
        <TradeContainer />
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

export default ViewTradesForm;
