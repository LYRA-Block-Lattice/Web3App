import { FunctionComponent } from "react";
import CatalogContainer from "../components/CatalogContainer";
import styles from "./TokenContainer.module.css";

const TokenContainer: FunctionComponent = () => {
  return (
    <div className={styles.catalogSection}>
      <CatalogContainer
        iWantToSell="I want to sell:"
        icbaselineGeneratingToken="../icbaselinegeneratingtokens4.svg"
        mditruckDelivery="../mditruckdelivery.svg"
      />
      <div className={styles.catalogSectionChild} />
      <CatalogContainer
        iWantToSell="I want to get:"
        icbaselineGeneratingToken="../icbaselinegeneratingtokens5.svg"
        mditruckDelivery="../mditruckdelivery1.svg"
      />
    </div>
  );
};

export default TokenContainer;
