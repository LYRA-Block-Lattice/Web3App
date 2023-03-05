import { FunctionComponent } from "react";
import "./UtilityButton.css";

type UtilityButtonType = {
  text?: string;
};

const UtilityButton: FunctionComponent<UtilityButtonType> = ({ text }) => {
  return (
    <button className="buttons21">
      <div className="utility-button5">{text}</div>
    </button>
  );
};

export default UtilityButton;
