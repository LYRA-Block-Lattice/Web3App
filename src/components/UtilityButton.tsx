import { FunctionComponent } from "react";
import "./UtilityButton.css";

type UtilityButtonType = {
  utilityButton?: string;

  /** Action props */
  openGeneralPopup?: () => void;
};

const UtilityButton: FunctionComponent<UtilityButtonType> = ({
  openGeneralPopup,
  utilityButton,
}) => {
  return (
    <button className="buttons11" onClick={openGeneralPopup}>
      <div className="utility-button2">{utilityButton}</div>
    </button>
  );
};

export default UtilityButton;
