import { FunctionComponent, useCallback, useMemo, useState } from "react";
import CSS, { Property } from "csstype";
import "./CatalogTab.css";

const cats = ["Token", "NFT", "Fiat", "Goods", "Service"];

type TabHeaderType = {
  cat: string;
  selected: boolean;
  onSelect: (cat: string) => void;
};

const TabHeader: FunctionComponent<TabHeaderType> = ({
  cat,
  selected,
  onSelect
}) => {
  const selectTokenButtonStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: selected ? "#0EBD8D" : "#EEEEEE"
    };
  }, [cat, selected]);

  const selectTokenTextStyle: CSS.Properties = useMemo(() => {
    return {
      color: selected ? "#FFFFFF" : "#000000"
    };
  }, [cat, selected]);

  return (
    <button
      className="token-wrapper"
      style={selectTokenButtonStyle}
      onClick={() => onSelect(cat)}
    >
      <b className="token" style={selectTokenTextStyle}>
        {cat}
      </b>
    </button>
  );
};

type CatalogTabType = {
  /** Action props */
  selcat?: string;
  onSelect: (cat: string) => void;
};

const CatalogTab: FunctionComponent<CatalogTabType> = ({
  selcat,
  onSelect
}) => {
  const onSelectCat = useCallback(
    (cat: string) => {
      onSelect(cat);
    },
    [selcat]
  );

  return (
    <div className="catalogtab">
      {cats.map((cat) => (
        <TabHeader
          key={cat}
          cat={cat}
          selected={selcat === cat}
          onSelect={onSelectCat}
        />
      ))}
    </div>
  );
};

export default CatalogTab;
