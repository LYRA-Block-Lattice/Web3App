import { FunctionComponent } from "react";
import styles from "./MarketToolBarContainer.module.css";

type MarketToolBarContainerType = {
  homeIconInterlocution?: string;
  homeIconInterlocution1?: string;
  homeIconInterlocution2?: string;
  homeIconInterlocution3?: string;
  homeIconInterlocution4?: string;
};

const MarketToolBarContainer: FunctionComponent<MarketToolBarContainerType> = ({
  homeIconInterlocution,
  homeIconInterlocution1,
  homeIconInterlocution2,
  homeIconInterlocution3,
  homeIconInterlocution4,
}) => {
  return (
    <div className={styles.markettoolbar}>
      <div className={styles.swapButtonParent}>
        <button className={styles.swapButton}>
          <img
            className={styles.homeIconInterlocution}
            alt=""
            src={homeIconInterlocution}
          />
          <div className={styles.ranking}>Market</div>
        </button>
        <button className={styles.swapButton}>
          <img
            className={styles.homeIconInterlocution}
            alt=""
            src={homeIconInterlocution1}
          />
          <div className={styles.ranking}>New Sell</div>
        </button>
        <button className={styles.swapButton}>
          <img
            className={styles.homeIconInterlocution}
            alt=""
            src={homeIconInterlocution2}
          />
          <div className={styles.ranking}>Orders</div>
        </button>
        <button className={styles.swapButton}>
          <img
            className={styles.homeIconInterlocution}
            alt=""
            src={homeIconInterlocution3}
          />
          <div className={styles.ranking}>Trades</div>
        </button>
        <button className={styles.swapButton}>
          <img
            className={styles.homeIconInterlocution}
            alt=""
            src={homeIconInterlocution4}
          />
          <div className={styles.ranking4}>ODR</div>
        </button>
      </div>
    </div>
  );
};

export default MarketToolBarContainer;
