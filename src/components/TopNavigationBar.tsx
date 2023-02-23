import { FunctionComponent, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
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
  onContextMenuButtonClick
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isRoot = location.pathname === "/";

  const onNavBackButtonClick = useCallback(() => {
    navigate(-1);
    if (onNavBack) onNavBack();
  }, [navigate]);

  const onTitleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (onTitle) onTitle();
  }, []);

  const onContextMenuButtonClick = useCallback(() => {
    if (onContextPlus) onContextPlus();
  }, []);

  return (
    <div className="topnavigationbar sticky-header">
      <button className="navbackbutton" onClick={onNavBackButtonClick}>
        {!isRoot && (
          <img className="iconleft" alt="" src="../asserts/iconleft.svg" />
        )}
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
