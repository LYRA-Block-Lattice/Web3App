import { FunctionComponent } from "react";
import styles from "./ItemContainer.module.css";

const ItemContainer: FunctionComponent = () => {
  return (
    <div className={styles.nftShowingItem}>
      <div className={styles.lyralogoblueiconWrapper}>
        <img
          className={styles.lyralogoblueicon}
          alt=""
          src="../lyralogoblueicon@2x.png"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.nameBm}>
          <div className={styles.putYourProduct}>
            put your product name here or go!
          </div>
          <img
            className={styles.pressAreaIcon}
            alt=""
            src="../press-area.svg"
          />
        </div>
        <div className={styles.price}>
          <div className={styles.div}>60$</div>
        </div>
      </div>
    </div>
  );
};

export default ItemContainer;
