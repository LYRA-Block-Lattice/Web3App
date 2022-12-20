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
        className="icbaseline-generating-tokens-icon"
        alt=""
        src={icbaselineGeneratingToken}
      />
      <div className="frame-div7">
        <b className="token">{token}</b>
      </div>
    </button>
  );
};

export default SelectTokenCatalogButton;
