import { FunctionComponent } from "react";
import styles from "./WalletCardContainer.module.css";

const WalletCardContainer: FunctionComponent = () => {
  return (
    <div className={styles.walletCard}>
      <div className={styles.walletCardInner}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.rectangle} />
        </div>
      </div>
      <div className={styles.walletCardChild}>
        <div className={styles.balanceDisplayZoneParent}>
          <a className={styles.balanceDisplayZone}>
            <button className={styles.walletNameLabel}>
              My Primary Account
            </button>
            <div className={styles.balanceDisplayZoneChild} />
            <b className={styles.usdtbalance}>1,025,000</b>
            <b className={styles.lyrlabel}>LYR</b>
            <div className={styles.balanceDisplayZoneItem} />
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
      </div>
    </div>
  );
};

export default WalletCardContainer;
