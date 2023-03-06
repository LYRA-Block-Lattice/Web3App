import { FunctionComponent } from "react";
import "./SecondaryButton.css";

type SecondaryButtonType = {
  secondaryButton?: string;

  /** Action props */
  onButtonsClick?: () => void;
};

const SecondaryButton: FunctionComponent<SecondaryButtonType> = ({
  onButtonsClick,
  secondaryButton,
}) => {
  return (
    <button className="buttons3" onClick={onButtonsClick}>
      <div className="secondary-button">{secondaryButton}</div>
    </button>
  );
};

export default SecondaryButton;
