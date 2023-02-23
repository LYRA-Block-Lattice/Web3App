import { FunctionComponent } from "react";
import "./CatalogTab.css";

type CatalogTabType = {
  /** Action props */
  onFrameButtonClick?: () => void;
  onFrameButton1Click?: () => void;
  onFrameButton2Click?: () => void;
  onFrameButton3Click?: () => void;
  onFrameButton4Click?: () => void;
};

const CatalogTab: FunctionComponent<CatalogTabType> = ({
  onFrameButtonClick,
  onFrameButton1Click,
  onFrameButton2Click,
  onFrameButton3Click,
  onFrameButton4Click,
}) => {
  return (
    <div className="catalogtab">
      <button className="token-container" onClick={onFrameButtonClick}>
        <b className="nft">Token</b>
      </button>
      <button className="nft-wrapper" onClick={onFrameButton1Click}>
        <b className="nft">NFT</b>
      </button>
      <button className="nft-wrapper" onClick={onFrameButton2Click}>
        <b className="nft">Fiat</b>
      </button>
      <button className="nft-wrapper" onClick={onFrameButton3Click}>
        <b className="nft">Goods</b>
      </button>
      <button className="nft-wrapper" onClick={onFrameButton4Click}>
        <b className="nft">Service</b>
      </button>
    </div>
  );
};

export default CatalogTab;
