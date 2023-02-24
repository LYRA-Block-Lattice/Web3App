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
      <button className="token-wrapper" onClick={onFrameButtonClick}>
        <b className="token">Token</b>
      </button>
      <button className="nft-wrapper" onClick={onFrameButton1Click}>
        <b className="token">NFT</b>
      </button>
      <button className="nft-wrapper" onClick={onFrameButton2Click}>
        <b className="token">Fiat</b>
      </button>
      <button className="nft-wrapper" onClick={onFrameButton3Click}>
        <b className="token">Goods</b>
      </button>
      <button className="nft-wrapper" onClick={onFrameButton4Click}>
        <b className="token">Service</b>
      </button>
    </div>
  );
};

export default CatalogTab;
