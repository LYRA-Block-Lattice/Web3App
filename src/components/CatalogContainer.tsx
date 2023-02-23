import { FunctionComponent } from "react";
import styles from "./CatalogContainer.module.css";

type CatalogContainerType = {
  iWantToSell?: string;
  icbaselineGeneratingToken?: string;
  mditruckDelivery?: string;
};

const CatalogContainer: FunctionComponent<CatalogContainerType> = ({
  iWantToSell,
  icbaselineGeneratingToken,
  mditruckDelivery,
}) => {
  return (
    <div className={styles.catalogselection}>
      <div className={styles.iWantTo}>{iWantToSell}</div>
      <div className={styles.tradecatalog}>
        <button className={styles.selectTokenCatalogButton}>
          <img
            className={styles.icbaselineGeneratingTokensIcon}
            alt=""
            src={icbaselineGeneratingToken}
          />
          <div className={styles.tokenWrapper}>
            <b className={styles.token}>Token</b>
          </div>
        </button>
        <button className={styles.selectTokenCatalogButton}>
          <img
            className={styles.icbaselineGeneratingTokensIcon}
            alt=""
            src="../mapartgallery.svg"
          />
          <div className={styles.tokenWrapper}>
            <b className={styles.token}>NFT</b>
          </div>
        </button>
        <button className={styles.selectTokenCatalogButton}>
          <img
            className={styles.icbaselineGeneratingTokensIcon}
            alt=""
            src="../fluentemojihighcontrastdollarbanknote.svg"
          />
          <div className={styles.tokenWrapper}>
            <b className={styles.fiat}>Fiat</b>
          </div>
        </button>
        <button className={styles.selectTokenCatalogButton}>
          <img
            className={styles.icbaselineGeneratingTokensIcon}
            alt=""
            src={mditruckDelivery}
          />
          <div className={styles.tokenWrapper}>
            <b className={styles.goods}>Goods</b>
          </div>
        </button>
        <button className={styles.selectTokenCatalogButton}>
          <img
            className={styles.icbaselineGeneratingTokensIcon}
            alt=""
            src="../carbonuserservicedesk4.svg"
          />
          <div className={styles.tokenWrapper}>
            <b className={styles.fiat}>Service</b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CatalogContainer;
