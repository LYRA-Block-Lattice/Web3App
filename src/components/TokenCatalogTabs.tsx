import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./TokenCatalogTabs.css";

type TokenCatalogTabsType = {
  /** Style props */
  tradableOrdersSectionAlignSelf?: Property.AlignSelf;
  tradableOrdersSectionWidth?: Property.Width;
  tradableOrdersSectionBoxSizing?: Property.BoxSizing;
};

const TokenCatalogTabs: FunctionComponent<TokenCatalogTabsType> = ({
  tradableOrdersSectionAlignSelf,
  tradableOrdersSectionWidth,
  tradableOrdersSectionBoxSizing,
}) => {
  const tradableOrdersSectionStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: tradableOrdersSectionAlignSelf,
      width: tradableOrdersSectionWidth,
      boxSizing: tradableOrdersSectionBoxSizing,
    };
  }, [
    tradableOrdersSectionAlignSelf,
    tradableOrdersSectionWidth,
    tradableOrdersSectionBoxSizing,
  ]);

  return (
    <div className="tradableorderssection1" style={tradableOrdersSectionStyle}>
      <div className="catalogtab">
        <button className="nft-tab">
          <b className="nft">NFT</b>
        </button>
        <button className="nft-tab">
          <b className="nft">Fiat</b>
        </button>
        <button className="nft-tab">
          <b className="nft">Goods</b>
        </button>
        <button className="nft-tab">
          <b className="nft">Service</b>
        </button>
        <button className="tokentab">
          <b className="nft">Token</b>
        </button>
      </div>
    </div>
  );
};

export default TokenCatalogTabs;
