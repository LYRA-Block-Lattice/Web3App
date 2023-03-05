import { FunctionComponent } from "react";
import "./TopNavigationBar.css";

type TopNavigationBarType = {
  title?: string;
  iconleft?: string;
  icroundPlus?: string;

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
  iconleft,
  icroundPlus,
}) => {
  return (
    <div className="topnavigationbar">
      <button className="navbackbutton" onClick={onNavBackButtonClick}>
        <img className="iconleft" alt="" src={iconleft} />
      </button>
      <button className="title5" onClick={onTitleClick}>
        {title}
      </button>
      <button className="contextmenubutton" onClick={onContextMenuButtonClick}>
        <img className="icround-plus-icon" alt="" src={icroundPlus} />
      </button>
    </div>
  );
};

export default TopNavigationBar;
