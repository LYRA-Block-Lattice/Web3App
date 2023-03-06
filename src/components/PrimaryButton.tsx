import { FunctionComponent } from "react";
import "./PrimaryButton.css";

type PrimaryButtonType = {
  /** Action props */
  onButtonsClick?: () => void;
};

const PrimaryButton: FunctionComponent<PrimaryButtonType> = ({
  onButtonsClick,
}) => {
  return (
    <button className="buttons2" onClick={onButtonsClick}>
      <div className="primary-button2">Primary Button</div>
    </button>
  );
};

export default PrimaryButton;
