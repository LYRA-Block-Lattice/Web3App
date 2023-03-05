import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import MarketToolBarContainer from "../components/MarketToolBarContainer";
import CatalogTab from "../components/CatalogTab";
import MarketOrder from "../components/MarketOrder";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./Market.css";

const Market: FunctionComponent = () => {
  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onContextMenuButtonClick = useCallback(() => {
    //TODO: context menu
  }, []);

  const onFrameButtonClick = useCallback(() => {
    //TODO: sel token
  }, []);

  const onFrameButton1Click = useCallback(() => {
    //TODO: sel nft
  }, []);

  const onFrameButton2Click = useCallback(() => {
    //TODO: sel fiat
  }, []);

  const onFrameButton3Click = useCallback(() => {
    //TODO: sel goods
  }, []);

  const onFrameButton4Click = useCallback(() => {
    //TODO: sel services
  }, []);

  const onBannerImageClick = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  const onBannerImage1Click = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  return (
    <div className="market">
      <TopNavigationBar
        title="Lyra Web3 Market"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
        iconleft="../asserts/iconleft.svg"
        icroundPlus="../asserts/icroundplus.svg"
      />
      <div className="orderandcatalog">
        <MarketToolBarContainer
          homeIconInterlocution="../asserts/home--icon--interlocution5.svg"
          homeIconInterlocution1="../asserts/home--icon--interlocution6.svg"
          homeIconInterlocution2="../asserts/home--icon--interlocution7.svg"
          homeIconInterlocution3="../asserts/home--icon--interlocution8.svg"
          homeIconInterlocution4="../asserts/home--icon--interlocution9.svg"
        />
        <div className="searchsection">
          <input
            className="searchsection-child"
            type="search"
            placeholder="Search products/token/NFT/TOT etc."
          />
        </div>
        <div className="tradableorderssection">
          <CatalogTab
            onFrameButtonClick={onFrameButtonClick}
            onFrameButton1Click={onFrameButton1Click}
            onFrameButton2Click={onFrameButton2Click}
            onFrameButton3Click={onFrameButton3Click}
            onFrameButton4Click={onFrameButton4Click}
          />
          <MarketOrder onBannerImage4Click={onBannerImageClick} />
          <MarketOrder onBannerImage4Click={onBannerImage1Click} />
        </div>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default Market;
