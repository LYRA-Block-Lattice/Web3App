import { FunctionComponent } from "react";
import "./TopNavigationBar.css";

type TopNavigationBarType = {
  title?: string;
};

const TopNavigationBar: FunctionComponent<TopNavigationBarType> = ({
  title = "Lyra",
}) => {
  return (
    <div className="navigation">
      <img
        className="mini-programs-buttons"
        alt=""
        src="../asserts/mini-programs-buttons.svg"
      />
      <div className="title">{title}</div>
      <img
        className="mini-programs-buttons1"
        alt=""
        src="../asserts/mini-programs-buttons19.svg"
      />
    </div>
  );
};

export default TopNavigationBar;
