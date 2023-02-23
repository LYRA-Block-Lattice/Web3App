import { FunctionComponent, useCallback } from "react";
import OpenContainer from "../components/OpenContainer";
import styles from "./TradeContainer.module.css";

const TradeContainer: FunctionComponent = () => {
  const onBannerImageClick = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  return (
    <div className={styles.ordercard}>
      <div className={styles.orderBriefSection}>
        <OpenContainer
          tokenImageUrl="../icbaselinegeneratingtokens2.svg"
          propBackgroundColor="#7ed321"
          onBannerImageClick={onBannerImageClick}
        />
        <a className={styles.titleSection}>
          <div className={styles.tradeParent}>
            <b className={styles.trade}>Trade</b>
            <b className={styles.trade}>BTC</b>
            <img className={styles.frameChild} alt="" src="../arrow-2.svg" />
            <b className={styles.tetherusdt}>tether/USDT</b>
          </div>
          <div className={styles.titleSectionChild} />
          <div className={styles.amWrapper}>
            <div className={styles.trade}>12/29/2022 10:25:37 AM</div>
          </div>
          <div className={styles.detailsSection}>
            <div className={styles.block1}>
              <div className={styles.trade}>Price</div>
            </div>
            <div className={styles.block2}>
              <div className={styles.trade}>10,323</div>
            </div>
            <div className={styles.detailsSectionChild} />
            <div className={styles.block3}>
              <div className={styles.trade}>Amount</div>
            </div>
            <div className={styles.block2}>
              <div className={styles.trade}>1113.2</div>
            </div>
          </div>
        </a>
      </div>
      <div className={styles.tradesSection}>
        <div className={styles.widthController} />
      </div>
      <div className={styles.itemactions}>
        <button className={styles.delistButton}>
          <div className={styles.miniButton}>Cancel</div>
        </button>
        <button className={styles.delistButton}>
          <div className={styles.miniButton}>Close</div>
        </button>
        <button className={styles.delistButton}>
          <div className={styles.miniButton}>Complain</div>
        </button>
        <button className={styles.delistButton}>
          <div className={styles.miniButton}>Comment</div>
        </button>
      </div>
    </div>
  );
};

export default TradeContainer;
