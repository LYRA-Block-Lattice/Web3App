import { FunctionComponent } from "react";
import CatalogContainer from "../components/CatalogContainer";
import "./TokenContainer.css";

const TokenContainer: FunctionComponent = () => {
  return (
    <div className="catalog-section">
      <CatalogContainer
        iWantToSell="I want to sell:"
        icbaselineGeneratingToken="../icbaselinegeneratingtokens4.svg"
        mditruckDelivery="../mditruckdelivery.svg"
      />
      <div className="catalog-section-child" />
      <CatalogContainer
        iWantToSell="I want to get:"
        icbaselineGeneratingToken="../icbaselinegeneratingtokens5.svg"
        mditruckDelivery="../mditruckdelivery1.svg"
      />
    </div>
  );
};

export default TokenContainer;
