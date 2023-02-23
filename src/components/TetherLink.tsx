import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./TetherLink.module.css";

const TetherLink: FunctionComponent = () => {
  return (
    <Link className={styles.titleSection} to="/assertdetailview">
      <div className={styles.sellParent}>
        <b className={styles.sell}>Sell</b>
        <b className={styles.sell}>BTC</b>
        <img className={styles.frameChild} alt="" src="../arrow-2.svg" />
        <b className={styles.tetherusdt}>tether/USDT</b>
      </div>
      <div className={styles.detailsSection}>
        <div className={styles.block3}>
          <div className={styles.sell}>Amount</div>
          <div className={styles.sell}>Limit Min</div>
          <div className={styles.sell}>Limit Max</div>
        </div>
        <div className={styles.block4}>
          <div className={styles.sell}>1113.2</div>
          <div className={styles.sell}>1.2</div>
          <div className={styles.sell}>3.2</div>
        </div>
        <div className={styles.block1}>
          <div className={styles.price}>Price</div>
        </div>
        <div className={styles.block2}>
          <b className={styles.sell}>10,323</b>
        </div>
        <div className={styles.detailsSectionChild} />
      </div>
    </Link>
  );
};

export default TetherLink;
