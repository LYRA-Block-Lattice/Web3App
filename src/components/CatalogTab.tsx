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
      <button className="token-frame" onClick={onFrameButtonClick}>
        <b className="token2">Token</b>
      </button>
      <button className="nft-frame" onClick={onFrameButton1Click}>
        <b className="token2">NFT</b>
      </button>
      <button className="nft-frame" onClick={onFrameButton2Click}>
        <b className="token2">Fiat</b>
      </button>
      <button className="nft-frame" onClick={onFrameButton3Click}>
        <b className="token2">Goods</b>
      </button>
      <button className="nft-frame" onClick={onFrameButton4Click}>
        <b className="token2">Service</b>
      </button>
    </div>
  );
};

export default CatalogTab;
