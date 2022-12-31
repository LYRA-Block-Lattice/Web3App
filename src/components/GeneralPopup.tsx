import { FunctionComponent } from "react";
import "./GeneralPopup.css";

type GeneralPopupType = {
  onClose?: () => void;
};

const GeneralPopup: FunctionComponent<GeneralPopupType> = ({ onClose }) => {
  return (
    <div className="generalpopup">
      <div className="hello-popup">Hello popup!</div>
    </div>
  );
};

export default GeneralPopup;
