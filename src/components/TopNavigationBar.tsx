import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router";
import "./TopNavigationBar.css";

type TopNavigationBarType = {
  title?: string;

  /** Action props */
  onNavBack?: () => void;
  onTitle?: () => void;
  onContextPlus?: () => void;
};

const TopNavigationBar: FunctionComponent<TopNavigationBarType> = ({
  title,
  onNavBack,
  onTitle,
  onContextPlus
}) => {
  const navigate = useNavigate();

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
        <img className="iconleft" alt="" src="../asserts/iconleft.svg" />
      </button>
      <button className="title5" onClick={onTitleClick}>
        {title}
      </button>
      <button className="contextmenubutton" onClick={onContextMenuButtonClick}>
        <img
          className="icround-plus-icon"
          alt=""
          src="../asserts/icroundplus.svg"
        />
      </button>
    </div>
  );
};

export default TopNavigationBar;
