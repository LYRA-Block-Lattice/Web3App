import { FunctionComponent } from "react";
import "./SecondaryButton.css";

type SecondaryButtonType = {
  /** Action props */
  onButtonsClick?: () => void;
};

const SecondaryButton: FunctionComponent<SecondaryButtonType> = ({
  onButtonsClick,
}) => {
  return (
    <button className="buttons3" onClick={onButtonsClick}>
      <div className="secondary-button">Secondary Button</div>
    </button>
  );
};

export default SecondaryButton;
