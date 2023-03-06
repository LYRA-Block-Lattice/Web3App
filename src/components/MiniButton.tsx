import { FunctionComponent } from "react";
import "./MiniButton.css";

type MiniButtonType = {
  miniButton?: string;
};

const MiniButton: FunctionComponent<MiniButtonType> = ({ miniButton }) => {
  return (
    <button className="buttons12">
      <div className="mini-button6">{miniButton}</div>
    </button>
  );
};

export default MiniButton;
