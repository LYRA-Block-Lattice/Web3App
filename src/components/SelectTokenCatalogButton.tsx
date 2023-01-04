import { FunctionComponent } from "react";
import "./SelectTokenCatalogButton.css";

type SelectTokenCatalogButtonType = {
  icbaselineGeneratingToken?: string;
  token?: string;
};

const SelectTokenCatalogButton: FunctionComponent<
  SelectTokenCatalogButtonType
> = ({ icbaselineGeneratingToken, token }) => {
  return (
    <button className="select-token-catalog-button5">
      <img
        className="icbaseline-generating-tokens-icon5"
        alt=""
        src={icbaselineGeneratingToken}
      />
      <div className="token-container">
        <b className="token1">{token}</b>
      </div>
    </button>
  );
};

export default SelectTokenCatalogButton;
