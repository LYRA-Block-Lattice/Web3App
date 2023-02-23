import { FunctionComponent, useCallback } from "react";
import OpenContainer from "../components/OpenContainer";
import styles from "./OrderForm.module.css";

const OrderForm: FunctionComponent = () => {
  const onBannerImageClick = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  return (
    <div className={styles.ordercard}>
      <div className={styles.orderBriefSection}>
        <OpenContainer
          tokenImageUrl="../icbaselinegeneratingtokens3.svg"
          propBackgroundColor="#fa7268"
          onBannerImageClick={onBannerImageClick}
        />
        <a className={styles.titleSection}>
          <div className={styles.sellParent}>
            <b className={styles.sell}>Sell</b>
            <b className={styles.sell}>BTC</b>
            <img className={styles.frameChild} alt="" src="../arrow-2.svg" />
            <b className={styles.tetherusdt}>tether/USDT</b>
          </div>
          <div className={styles.titleSectionChild} />
          <div className={styles.amWrapper}>
            <div className={styles.sell}>12/29/2022 10:25:37 AM</div>
          </div>
          <div className={styles.detailsSection}>
            <div className={styles.block1}>
              <div className={styles.sell}>Price</div>
              <div className={styles.sell}>Limit Min</div>
              <div className={styles.sell}>Sold</div>
            </div>
            <div className={styles.block2}>
              <div className={styles.sell}>10,323</div>
              <div className={styles.sell}>3.2</div>
              <div className={styles.sell}>123</div>
            </div>
            <div className={styles.detailsSectionChild} />
            <div className={styles.block3}>
              <div className={styles.sell}>Amount</div>
              <div className={styles.sell}>Limit Max</div>
              <div className={styles.sell}>Shelf</div>
            </div>
            <div className={styles.block2}>
              <div className={styles.sell}>1113.2</div>
              <div className={styles.sell}>3.2</div>
              <div className={styles.sell}>123</div>
            </div>
          </div>
        </a>
      </div>
      <div className={styles.tradesSection}>
        <div className={styles.widthController} />
      </div>
      <div className={styles.itemactions}>
        <button className={styles.delistButton}>
          <div className={styles.miniButton}>Delist</div>
        </button>
        <button className={styles.delistButton}>
          <div className={styles.miniButton}>Close</div>
        </button>
      </div>
    </div>
  );
};

export default OrderForm;
