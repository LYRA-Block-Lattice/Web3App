import { FunctionComponent } from "react";
import SelectTokenCatalogButton from "../components/SelectTokenCatalogButton";
import "./CatalogSelection.css";

type CatalogSelectionType = {
  iWantTo?: string;
};

const CatalogSelection: FunctionComponent<CatalogSelectionType> = ({
  iWantTo,
}) => {
  return (
    <div className="catalogselection">
      <div className="i-want-to-sell">{iWantTo}</div>
      <div className="tradecatalog1">
        <SelectTokenCatalogButton
          icbaselineGeneratingToken="../asserts/icbaselinegeneratingtokens.svg"
          token="Token"
        />
        <SelectTokenCatalogButton
          icbaselineGeneratingToken="../asserts/mapartgallery.svg"
          token="NFT"
        />
        <SelectTokenCatalogButton
          icbaselineGeneratingToken="../asserts/fluentemojihighcontrastdollarbanknote.svg"
          token="Fiat"
        />
        <SelectTokenCatalogButton
          icbaselineGeneratingToken="../asserts/mditruckdelivery.svg"
          token="Goods"
        />
        <SelectTokenCatalogButton
          icbaselineGeneratingToken="../asserts/carbonuserservicedesk.svg"
          token="Service"
        />
      </div>
    </div>
  );
};

export default CatalogSelection;
