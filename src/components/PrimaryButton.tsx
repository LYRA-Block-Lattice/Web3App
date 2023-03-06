import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./PrimaryButton.css";

type PrimaryButtonType = {
  primaryButton?: string;

  /** Style props */
  buttonsFlexShrink?: Property.FlexShrink;

  /** Action props */
  onButtonsClick?: () => void;
};

const PrimaryButton: FunctionComponent<PrimaryButtonType> = ({
  primaryButton,
  onButtonsClick,
  buttonsFlexShrink,
}) => {
  const buttonsStyle: CSS.Properties = useMemo(() => {
    return {
      flexShrink: buttonsFlexShrink,
    };
  }, [buttonsFlexShrink]);

  return (
    <button className="buttons2" onClick={onButtonsClick} style={buttonsStyle}>
      <div className="primary-button2">{primaryButton}</div>
    </button>
  );
};

export default PrimaryButton;
