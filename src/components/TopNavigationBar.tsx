import { FunctionComponent } from "react";
import "./TopNavigationBar.css";

type TopNavigationBarType = {
  title?: string;

  /** Action props */
  onNavBackButtonClick?: () => void;
  onTitleClick?: () => void;
  onContextMenuButtonClick?: () => void;
};

const TopNavigationBar: FunctionComponent<TopNavigationBarType> = ({
  title,
  onNavBackButtonClick,
  onTitleClick,
  onContextMenuButtonClick,
}) => {
  return (
    <div className="topnavigationbar">
      <button className="navbackbutton" onClick={onNavBackButtonClick}>
        <img className="iconleft" alt="" src="../iconleft.svg" />
      </button>
      <button className="title5" onClick={onTitleClick}>
        {title}
      </button>
      <button className="contextmenubutton" onClick={onContextMenuButtonClick}>
        <img className="icround-plus-icon" alt="" src="../icroundplus2.svg" />
      </button>
    </div>
  );
};

export default TopNavigationBar;
