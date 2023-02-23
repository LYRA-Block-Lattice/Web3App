import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./OpenContainer.css";

type OpenContainerType = {
  tokenImageUrl?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;

  /** Action props */
  onBannerImageClick?: () => void;
};

const OpenContainer: FunctionComponent<OpenContainerType> = ({
  tokenImageUrl,
  propBackgroundColor,
  onBannerImageClick,
}) => {
  const orderImageStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <button className="banner-image2" onClick={onBannerImageClick}>
      <div className="order-banner2">
        <div className="order-image2" style={orderImageStyle}>
          <img
            className="icbaseline-generating-tokens-icon4"
            alt=""
            src={tokenImageUrl}
          />
          <img className="order-image-inner" alt="" src="../arrow-1.svg" />
          <img
            className="icbaseline-generating-tokens-icon4"
            alt=""
            src="../carbonuserservicedesk2.svg"
          />
        </div>
        <div className="order-status2">
          <b className="open2">Open</b>
        </div>
      </div>
    </button>
  );
};

export default OpenContainer;
