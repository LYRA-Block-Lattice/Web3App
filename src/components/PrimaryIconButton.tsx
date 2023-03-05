import { FunctionComponent } from "react";
import "./PrimaryIconButton.css";

type PrimaryIconButtonType = {
  icon?: string;
};

const PrimaryIconButton: FunctionComponent<PrimaryIconButtonType> = ({
  icon,
}) => {
  return (
    <button className="buttons23">
      <img className="evapricetags-outline-icon1" alt="" src={icon} />
      <div className="primary-button10">Primary Button</div>
    </button>
  );
};

export default PrimaryIconButton;
