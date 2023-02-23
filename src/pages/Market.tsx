import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import MarketToolBarContainer from "../components/MarketToolBarContainer";
import TetherLink from "../components/TetherLink";
import Footer from "../components/Footer";
import styles from "./Market.module.css";

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
    <div className={styles.market}>
      <TopNavigationBar
        title="Lyra Web3 Market"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className={styles.orderandcatalog}>
        <MarketToolBarContainer
          homeIconInterlocution="../home--icon--interlocution5.svg"
          homeIconInterlocution1="../home--icon--interlocution6.svg"
          homeIconInterlocution2="../home--icon--interlocution7.svg"
          homeIconInterlocution3="../home--icon--interlocution8.svg"
          homeIconInterlocution4="../home--icon--interlocution9.svg"
        />
        <div className={styles.searchsection}>
          <input
            className={styles.searchsectionChild}
            type="search"
            placeholder="Search products/token/NFT/TOT etc."
          />
        </div>
        <div className={styles.tradableorderssection}>
          <div className={styles.catalogtab}>
            <div className={styles.nftWrapper}>
              <b className={styles.nft}>NFT</b>
            </div>
            <div className={styles.nftWrapper}>
              <b className={styles.nft}>Fiat</b>
            </div>
            <div className={styles.nftWrapper}>
              <b className={styles.nft}>Goods</b>
            </div>
            <div className={styles.nftWrapper}>
              <b className={styles.nft}>Service</b>
            </div>
            <div className={styles.tokenWrapper}>
              <b className={styles.nft}>Token</b>
            </div>
          </div>
          <div className={styles.ordercard}>
            <div className={styles.orderBriefSection}>
              <button
                className={styles.bannerImage}
                onClick={onBannerImageClick}
              >
                <div className={styles.orderBanner}>
                  <div className={styles.orderImage}>
                    <img
                      className={styles.icbaselineGeneratingTokensIcon}
                      alt=""
                      src="../icbaselinegeneratingtokens.svg"
                    />
                    <img
                      className={styles.orderImageChild}
                      alt=""
                      src="../arrow-1.svg"
                    />
                    <img
                      className={styles.icbaselineGeneratingTokensIcon}
                      alt=""
                      src="../carbonuserservicedesk.svg"
                    />
                  </div>
                  <div className={styles.orderStatus}>
                    <b className={styles.open}>Open</b>
                  </div>
                </div>
              </button>
              <TetherLink />
            </div>
            <div className={styles.tradesSection}>
              <div className={styles.widthController} />
            </div>
            <div className={styles.userprofilesection}>
              <img
                className={styles.userprofilesectionChild}
                alt=""
                src="../ellipse-1@2x.png"
              />
              <div className={styles.aBigSellerParent}>
                <b className={styles.aBigSeller}>A big seller</b>
                <div className={styles.theFirstDao}>The First DAO</div>
              </div>
              <div className={styles.parent}>
                <b className={styles.aBigSeller}>98%</b>
                <div className={styles.theFirstDao}>1024 Trades</div>
              </div>
            </div>
          </div>
          <div className={styles.ordercard}>
            <div className={styles.orderBriefSection}>
              <button
                className={styles.bannerImage}
                onClick={onBannerImage1Click}
              >
                <div className={styles.orderBanner}>
                  <div className={styles.orderImage}>
                    <img
                      className={styles.icbaselineGeneratingTokensIcon}
                      alt=""
                      src="../icbaselinegeneratingtokens.svg"
                    />
                    <img
                      className={styles.orderImageChild}
                      alt=""
                      src="../arrow-1.svg"
                    />
                    <img
                      className={styles.icbaselineGeneratingTokensIcon}
                      alt=""
                      src="../carbonuserservicedesk1.svg"
                    />
                  </div>
                  <div className={styles.orderStatus}>
                    <b className={styles.open}>Open</b>
                  </div>
                </div>
              </button>
              <TetherLink />
            </div>
            <div className={styles.tradesSection}>
              <div className={styles.widthController} />
            </div>
            <div className={styles.userprofilesection}>
              <img
                className={styles.userprofilesectionChild}
                alt=""
                src="../ellipse-1@2x.png"
              />
              <div className={styles.aBigSellerParent}>
                <b className={styles.aBigSeller}>A big seller</b>
                <div className={styles.theFirstDao}>The First DAO</div>
              </div>
              <div className={styles.parent}>
                <b className={styles.aBigSeller}>98%</b>
                <div className={styles.theFirstDao}>1024 Trades</div>
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
