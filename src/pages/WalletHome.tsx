import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PrimaryAccountContainer from "../components/PrimaryAccountContainer";
import WalletToolBar from "../components/WalletToolBar";
import Footer from "../components/Footer";
import styles from "./WalletHome.module.css";

const WalletHome: FunctionComponent = () => {
  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onContextMenuButtonClick = useCallback(() => {
    //TODO: context menu
  }, []);

  return (
    <div className={styles.wallethome}>
      <TopNavigationBar
        title="My Wallet"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className={styles.walletCardParent}>
        <PrimaryAccountContainer />
        <WalletToolBar />
        <div className={styles.coinlisting}>
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
          <div className={styles.tokendisplayitem}>
            <img
              className={styles.lyralogoblackicon}
              alt=""
              src="../lyralogoblackicon@2x.png"
            />
            <div className={styles.frameParent}>
              <div className={styles.lyraCoinParent}>
                <b className={styles.lyraCoin}>Lyra Coin</b>
                <div className={styles.lyrParent}>
                  <b className={styles.lyr}>1,234,525 LYR</b>
                  <b className={styles.b}>$2,183</b>
                </div>
              </div>
              <div className={styles.frameChild} />
            </div>
          </div>
          <div className={styles.tokendisplayitem1}>
            <div className={styles.frameParent}>
              <div className={styles.lyraCoinParent}>
                <img
                  className={styles.lyralogoblackicon}
                  alt=""
                  src="../lyralogoblueicon4@2x.png"
                />
                <b className={styles.lyraCoin}>Custom Coin</b>
                <div className={styles.lyrParent}>
                  <b className={styles.lyr}>1,234,525 CUS</b>
                  <b className={styles.b}>$2,183</b>
                </div>
              </div>
              <div className={styles.frameChild} />
            </div>
          </div>
          <div className={styles.tokendisplayitem2}>
            <img
              className={styles.logosbitcoinIcon}
              alt=""
              src="../logosbitcoin.svg"
            />
            <div className={styles.frameParent}>
              <div className={styles.lyraCoinParent}>
                <b className={styles.lyraCoin}>BitCoin</b>
                <div className={styles.lyrParent}>
                  <b className={styles.lyr}>1.2345 BTC</b>
                  <b className={styles.b}>$20,183</b>
                </div>
              </div>
              <div className={styles.frameChild} />
            </div>
          </div>
          <div className={styles.tokendisplayitem2}>
            <img
              className={styles.lyralogoblackicon}
              alt=""
              src="../mask-group@2x.png"
            />
            <div className={styles.frameParent}>
              <div className={styles.lyraCoinParent}>
                <b className={styles.lyraCoin}>T-Shirt Blue</b>
                <div className={styles.lyrParent}>
                  <b className={styles.lyr}>3 Items</b>
                  <b className={styles.b}>$20,183</b>
                </div>
              </div>
              <div className={styles.frameChild} />
            </div>
          </div>
        </div>
      </div>
      <Footer
        iconImageUrl="../box-alt-light.svg"
        moleculeImageUrl="../molecule-light.svg"
        walletImageUrl="../wallet-light.svg"
        userImageUrl="../user-alt-light.svg"
      />
    </div>
  );
};

export default WalletHome;
