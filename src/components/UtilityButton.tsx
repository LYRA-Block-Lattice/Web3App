import { FunctionComponent } from "react";
import "./UtilityButton.css";

type UtilityButtonType = {
  /** Action props */
  openGeneralPopup?: () => void;
};

const UtilityButton: FunctionComponent<UtilityButtonType> = ({
  openGeneralPopup,
}) => {
  return (
    <button className="buttons4" onClick={openGeneralPopup}>
      <div className="utility-button">Utility Button</div>
    </button>
  );
};

export default UtilityButton;
