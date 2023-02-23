import { FunctionComponent } from "react";
import styles from "./ProductContainer.module.css";

type ProductContainerType = {
  /** Action props */
  openGeneralPopup?: () => void;
};

const ProductContainer: FunctionComponent<ProductContainerType> = ({
  openGeneralPopup,
}) => {
  return (
    <button className={styles.nftShowingItem} onClick={openGeneralPopup}>
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
        </div>
      </div>
    </button>
  );
};

export default ProductContainer;
