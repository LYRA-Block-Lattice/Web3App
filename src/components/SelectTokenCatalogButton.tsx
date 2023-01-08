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
    <button className="select-token-catalog-button">
      <img
        className="icbaseline-generating-tokens-icon5"
        alt=""
        src={icbaselineGeneratingToken}
      />
      <div className="token-wrapper">
        <b className="token3">{token}</b>
      </div>
    </button>
  );
};

export default SelectTokenCatalogButton;
