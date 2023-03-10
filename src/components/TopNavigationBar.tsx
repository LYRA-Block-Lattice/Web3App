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

  const onNavBackButtonClick1 = useCallback(() => {
    navigate(-1);
    if (onNavBackButtonClick) onNavBackButtonClick();
  }, [navigate]);

  const onTitleClick1 = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (onTitleClick) onTitleClick();
  }, []);

  const onContextMenuButtonClick1 = useCallback(() => {
    if (onContextMenuButtonClick) onContextMenuButtonClick();
  }, []);

  return (
    <div className="topnavigationbar sticky-header">
      <button className="navbackbutton" onClick={onNavBackButtonClick1}>
        {!isRoot && (
          <img className="iconleft" alt="" src="../asserts/iconleft.svg" />
        )}
      </button>
      <button className="title5" onClick={onTitleClick1}>
        {title}
      </button>
      <button
        className="contextmenubutton"
        title="Context Menu"
        onClick={onContextMenuButtonClick1}
      >
        <img
          className="icround-plus-icon"
          alt=""
          src="../asserts/icroundplus5.svg"
        />
      </button>
    </div>
  );
};

export default TopNavigationBar;
