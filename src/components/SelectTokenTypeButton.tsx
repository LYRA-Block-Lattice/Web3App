import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./SelectTokenTypeButton.css";

type SelectTokenTypeButtonType = {
  tokenTypeName?: string;
  materialSymbolsgenerating?: string;

  /** Style props */
  selectTokenButtonBackgroundColor?: Property.BackgroundColor;
  selectTokenButtonPadding?: Property.Padding;
  selectTokenButtonBoxShadow?: Property.BoxShadow;
  tokenColor?: Property.Color;
  selectTokenButtonFlexDirection?: Property.FlexDirection;
  frame38Width?: Property.Width;
  frame38Height?: Property.Height;
  frame38FlexShrink?: Property.FlexShrink;
  tokenClicked: (tokenName: string | undefined) => void;
};

const SelectTokenTypeButton: FunctionComponent<SelectTokenTypeButtonType> = ({
  tokenTypeName,
  selectTokenButtonBackgroundColor,
  selectTokenButtonPadding,
  selectTokenButtonBoxShadow,
  materialSymbolsgenerating,
  tokenColor,
  selectTokenButtonFlexDirection,
  frame38Width,
  frame38Height,
  frame38FlexShrink,
  tokenClicked,
}) => {
  const selectTokenButtonStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: selectTokenButtonBackgroundColor,
      padding: selectTokenButtonPadding,
      boxShadow: selectTokenButtonBoxShadow,
      flexDirection: selectTokenButtonFlexDirection,
    };
  }, [
    selectTokenButtonBackgroundColor,
    selectTokenButtonPadding,
    selectTokenButtonBoxShadow,
    selectTokenButtonFlexDirection,
  ]);

  const tokenStyle: CSS.Properties = useMemo(() => {
    return {
      color: tokenColor,
    };
  }, [tokenColor]);

  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      width: frame38Width,
      height: frame38Height,
      flexShrink: frame38FlexShrink,
    };
  }, [frame38Width, frame38Height, frame38FlexShrink]);

  return (
    <button className="select-token-button2" style={selectTokenButtonStyle} 
      onClick={e => tokenClicked(tokenTypeName)}
      >
      <div className="frame-div8" style={frameDivStyle}>
        <img
          className="material-symbolsgenerating-to-icon"
          alt=""
          src={materialSymbolsgenerating}
        />
        <b className="token" style={tokenStyle}>
          {tokenTypeName}
        </b>
      </div>
    </button>
  );
};

export default SelectTokenTypeButton;
