import { FunctionComponent } from "react";
import "./SelectTokenCatalogButton.css";

type SelectTokenCatalogButtonType = {
  imgurl?: string;
  cat?: string;
};

const SelectTokenCatalogButton: FunctionComponent<
  SelectTokenCatalogButtonType
> = ({ imgurl, cat }) => {
  return (
    <button className="select-token-catalog-button">
      <img className="icbaseline-generating-tokens-icon3" alt="" src={imgurl} />
      <div className="token-container">
        <b className="token1">{cat}</b>
      </div>
    </button>
  );
};

export default SelectTokenCatalogButton;
