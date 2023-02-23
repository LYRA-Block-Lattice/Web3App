import { FunctionComponent } from "react";
import styles from "./GeneralPopup.module.css";

type GeneralPopupType = {
  onClose?: () => void;
};

const GeneralPopup: FunctionComponent<GeneralPopupType> = ({ onClose }) => {
  return <div className={styles.generalpopup} />;
};

export default GeneralPopup;
