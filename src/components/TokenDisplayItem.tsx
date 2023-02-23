import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./TokenDisplayItem.css";

type TokenDisplayItemType = {
  coinIcon?: string;
  coinName?: string;
  amountText?: string;
  amountWorth?: string;

  /** Style props */
  lyraLogoBlackIconObjectFit?: Property.ObjectFit;
};

const TokenDisplayItem: FunctionComponent<TokenDisplayItemType> = ({
  coinIcon,
  coinName,
  amountText,
  amountWorth,
  lyraLogoBlackIconObjectFit,
}) => {
  const lyraLogoBlackIconStyle: CSS.Properties = useMemo(() => {
    return {
      objectFit: lyraLogoBlackIconObjectFit,
    };
  }, [lyraLogoBlackIconObjectFit]);

  return (
    <div className="tokendisplayitem1">
      <img
        className="lyralogoblackicon"
        alt=""
        src={coinIcon}
        style={lyraLogoBlackIconStyle}
      />
      <div className="frame-parent3">
        <div className="lyra-coin-parent">
          <b className="lyra-coin">{coinName}</b>
          <div className="lyr-parent">
            <b className="lyr">{amountText}</b>
            <b className="b1">{amountWorth}</b>
          </div>
        </div>
        <div className="frame-child4" />
      </div>
    </div>
  );
};

export default TokenDisplayItem;
