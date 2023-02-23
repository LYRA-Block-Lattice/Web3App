import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import MarketToolBarContainer from "../components/MarketToolBarContainer";
import TetherLink from "../components/TetherLink";
import Footer from "../components/Footer";
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
      />
      <div className="orderandcatalog">
        <MarketToolBarContainer
          homeIconInterlocution="../home--icon--interlocution5.svg"
          homeIconInterlocution1="../home--icon--interlocution6.svg"
          homeIconInterlocution2="../home--icon--interlocution7.svg"
          homeIconInterlocution3="../home--icon--interlocution8.svg"
          homeIconInterlocution4="../home--icon--interlocution9.svg"
        />
        <div className="searchsection">
          <input
            className="searchsection-child"
            type="search"
            placeholder="Search products/token/NFT/TOT etc."
          />
        </div>
        <div className="tradableorderssection">
          <div className="catalogtab1">
            <div className="nft-container">
              <b className="nft1">NFT</b>
            </div>
            <div className="nft-container">
              <b className="nft1">Fiat</b>
            </div>
            <div className="nft-container">
              <b className="nft1">Goods</b>
            </div>
            <div className="nft-container">
              <b className="nft1">Service</b>
            </div>
            <div className="token-container">
              <b className="nft1">Token</b>
            </div>
          </div>
          <div className="ordercard">
            <div className="order-brief-section">
              <button className="banner-image" onClick={onBannerImageClick}>
                <div className="order-banner">
                  <div className="order-image">
                    <img
                      className="icbaseline-generating-tokens-icon"
                      alt=""
                      src="../icbaselinegeneratingtokens.svg"
                    />
                    <img
                      className="order-image-child"
                      alt=""
                      src="../arrow-1.svg"
                    />
                    <img
                      className="icbaseline-generating-tokens-icon"
                      alt=""
                      src="../carbonuserservicedesk.svg"
                    />
                  </div>
                  <div className="order-status">
                    <b className="open">Open</b>
                  </div>
                </div>
              </button>
              <TetherLink />
            </div>
            <div className="trades-section">
              <div className="width-controller" />
            </div>
            <div className="userprofilesection">
              <img
                className="userprofilesection-child"
                alt=""
                src="../ellipse-1@2x.png"
              />
              <div className="a-big-seller-parent">
                <b className="a-big-seller">A big seller</b>
                <div className="the-first-dao">The First DAO</div>
              </div>
              <div className="parent">
                <b className="a-big-seller">98%</b>
                <div className="the-first-dao">1024 Trades</div>
              </div>
            </div>
          </div>
          <div className="ordercard">
            <div className="order-brief-section">
              <button className="banner-image" onClick={onBannerImage1Click}>
                <div className="order-banner">
                  <div className="order-image">
                    <img
                      className="icbaseline-generating-tokens-icon"
                      alt=""
                      src="../icbaselinegeneratingtokens.svg"
                    />
                    <img
                      className="order-image-child"
                      alt=""
                      src="../arrow-1.svg"
                    />
                    <img
                      className="icbaseline-generating-tokens-icon"
                      alt=""
                      src="../carbonuserservicedesk1.svg"
                    />
                  </div>
                  <div className="order-status">
                    <b className="open">Open</b>
                  </div>
                </div>
              </button>
              <TetherLink />
            </div>
            <div className="trades-section">
              <div className="width-controller" />
            </div>
            <div className="userprofilesection">
              <img
                className="userprofilesection-child"
                alt=""
                src="../ellipse-1@2x.png"
              />
              <div className="a-big-seller-parent">
                <b className="a-big-seller">A big seller</b>
                <div className="the-first-dao">The First DAO</div>
              </div>
              <div className="parent">
                <b className="a-big-seller">98%</b>
                <div className="the-first-dao">1024 Trades</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        iconImageUrl="../box-alt-light.svg"
        moleculeImageUrl="../molecule-light.svg"
        walletImageUrl="../wallet-light.svg"
        userImageUrl="../user-alt-light.svg"
        propColor="#0ebd8d"
        propColor1="#434343"
      />
    </div>
  );
};

export default Market;
