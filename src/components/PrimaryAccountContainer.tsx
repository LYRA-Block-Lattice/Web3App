import { FunctionComponent } from "react";
import styles from "./PrimaryAccountContainer.module.css";

const PrimaryAccountContainer: FunctionComponent = () => {
  return (
    <div className={styles.walletCard}>
      <div className={styles.walletCardInner}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.rectangle} />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.balanceDisplayZoneParent}>
          <a className={styles.balanceDisplayZone}>
            <button className={styles.walletNameLabel}>
              My Primary Account
            </button>
            <div className={styles.balanceDisplayZoneChild} />
            <b className={styles.usdtbalance}>1,025,000</b>
            <b className={styles.lyrlabel}>LYR</b>
            <div className={styles.balanceDisplayZoneItem} />
            <b className={styles.usdtbalance}>5,000</b>
            <b className={styles.lyrlabel}>USDT</b>
          </a>
          <div className={styles.qrcodeButtonWrapper}>
            <button className={styles.qrcodeButton}>
              <div className={styles.qrcodeButtonRound} />
              <img
                className={styles.qrcodeIcon}
                alt=""
                src="../qrcode-icon.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.tokenLists}>
          <button className={styles.goNftButton}>
            <div className={styles.nftCount}>12</div>
            <b className={styles.nftLabel}>NFT</b>
          </button>
          <button className={styles.goNftButton}>
            <div className={styles.nftCount}>3</div>
            <b className={styles.nftLabel}>TOT</b>
          </button>
          <button className={styles.goNftButton}>
            <div className={styles.nftCount}>0</div>
            <b className={styles.nftLabel}>Selling</b>
          </button>
          <button className={styles.goNftButton}>
            <div className={styles.nftCount}>0</div>
            <b className={styles.nftLabel}>Buying</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrimaryAccountContainer;
