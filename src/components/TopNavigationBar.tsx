import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router";
import "./TopNavigationBar.css";

type TopNavigationBarType = {
  title?: string;

  /** Action props */
  onMiniProgramsButtons?: () => void;
  onTitle?: () => void;
  onHome?: () => void;
  onContextPlus?: () => void;
};

const TopNavigationBar: FunctionComponent<TopNavigationBarType> = ({
  title,
  onMiniProgramsButtons,
  onTitle,
  onHome,
  onContextPlus
}) => {
  const navigate = useNavigate();

  const onContextMenuButtonClick = useCallback(() => {
    //TODO: context menu
  }, []);

  const onMiniProgramsButtonsClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onTitleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, []);

  const onContextPlusClick = useCallback(() => {
    //TODO: popup context menu, share, etc.
  }, []);

  return (
    <nav className="topnavigationbar sticky-header">
      <button className="navbackbutton" onClick={onMiniProgramsButtonsClick}>
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
