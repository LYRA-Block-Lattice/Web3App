import { FunctionComponent, useMemo, LegacyRef } from "react";
import CSS, { Property } from "csstype";
import "./SelectTokenCatalogButton.css";

type SelectTokenCatalogButtonType = {
  imgurl?: string;
  cat?: string;
  tokenClicked: (tokenName: string | undefined) => void;
  disabled: boolean;
  act?: string;
  xref: LegacyRef<HTMLButtonElement> | undefined;
};

const SelectTokenCatalogButton: FunctionComponent<
  SelectTokenCatalogButtonType
> = ({ imgurl, cat, tokenClicked, disabled, act, xref }) => {
  const selectTokenButtonStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: disabled ? "lightgray" : "#1EC8A5"
    };
  }, [disabled]);

  return (
    <button
      className="select-token-catalog-button"
      onClick={(e) => tokenClicked(cat)}
      style={selectTokenButtonStyle}
      ref={xref}
      id={`${act}-${cat}`}
    >
      <img className="icbaseline-generating-tokens-icon2" alt="" src={imgurl} />
      <div className="token-container">
        <b className="token1">{cat}</b>
      </div>
    </button>
  );
};

export default SelectTokenCatalogButton;
