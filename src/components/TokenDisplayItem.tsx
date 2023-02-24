import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./TokenDisplayItem.css";

type TokenDisplayItemType = {
  tokenIcon?: string;
  tokenName?: string;
  tokenAmount?: string;
  tokenDollar?: string;

  /** Style props */
  tokenDisplayItemBackgroundColor?: Property.BackgroundColor;
  lyraLogoBlackIconObjectFit?: Property.ObjectFit;
};

const TokenDisplayItem: FunctionComponent<TokenDisplayItemType> = ({
  tokenIcon,
  tokenName,
  tokenAmount,
  tokenDollar,
  tokenDisplayItemBackgroundColor,
  lyraLogoBlackIconObjectFit,
}) => {
  const tokenDisplayItemStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: tokenDisplayItemBackgroundColor,
    };
  }, [tokenDisplayItemBackgroundColor]);

  const lyraLogoBlackIconStyle: CSS.Properties = useMemo(() => {
    return {
      objectFit: lyraLogoBlackIconObjectFit,
    };
  }, [lyraLogoBlackIconObjectFit]);

  return (
    <div className="tokendisplayitem1" style={tokenDisplayItemStyle}>
      <img
        className="lyralogoblackicon"
        alt=""
        src={tokenIcon}
        style={lyraLogoBlackIconStyle}
      />
      <div className="frame-parent3">
        <div className="lyra-coin-parent">
          <b className="lyra-coin">{tokenName}</b>
          <div className="lyr-parent">
            <b className="lyr">{tokenAmount}</b>
            <b className="b3">{tokenDollar}</b>
          </div>
        </div>
        <div className="frame-child5" />
      </div>
    </div>
  );
};

export default TokenDisplayItem;
