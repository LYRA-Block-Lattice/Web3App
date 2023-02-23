import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import WalletCardContainer from "../components/WalletCardContainer";
import MarketToolBarContainer from "../components/MarketToolBarContainer";
import TradeContainer from "../components/TradeContainer";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./ViewTradesForm.css";

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
    <div className="viewtradesform">
      <TopNavigationBar
        title="View Trades"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className="wallet-card-group">
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
      <BottomNavigationBar />
    </div>
  );
};

export default ViewTradesForm;
