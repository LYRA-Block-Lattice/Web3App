import { FunctionComponent } from "react";
import SelectTokenCatalogButton from "../components/SelectTokenCatalogButton";
import "./CatalogSelection.css";

type CatalogSelectionType = {
  sellText?: string;
  icbaselineGeneratingToken?: string;
  cat?: string;
};

const CatalogSelection: FunctionComponent<CatalogSelectionType> = ({
  sellText,
  icbaselineGeneratingToken,
  cat
}) => {
  return (
    <div className="catalogselection">
      <div className="i-want-to">{sellText}</div>
      <div className="tradecatalog">
        <SelectTokenCatalogButton
          imgurl={icbaselineGeneratingToken}
          cat={cat}
        />
        <SelectTokenCatalogButton
          imgurl={icbaselineGeneratingToken}
          cat={cat}
        />
        <SelectTokenCatalogButton
          imgurl={icbaselineGeneratingToken}
          cat={cat}
        />
        <SelectTokenCatalogButton
          imgurl={icbaselineGeneratingToken}
          cat={cat}
        />
        <SelectTokenCatalogButton
          imgurl={icbaselineGeneratingToken}
          cat={cat}
        />
      </div>
    </div>
  );
};

export default CatalogSelection;
