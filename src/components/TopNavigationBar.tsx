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
      <button
        className="mini-programs-buttons"
        onClick={onMiniProgramsButtonsClick}
      >
        <img className="iconleft" alt="" src="../asserts/iconleft.svg" />
      </button>
      <button className="title5" onClick={onTitleClick}>
        {title}
      </button>
      <div className="mini-programs-buttons1">
        <div className="stroke" />
        <button className="home" onClick={onHomeClick}>
          <img className="ellipse-icon" alt="" src="../asserts/ellipse.svg" />
          <img className="ellipse-icon1" alt="" src="../asserts/ellipse1.svg" />
        </button>
        <img
          className="separator-icon"
          alt=""
          src="../asserts/separator1.svg"
        />
        <button className="contextplus" onClick={onContextPlusClick}>
          <img
            className="contextplus-child"
            alt=""
            src="../asserts/rectangle-11.svg"
          />
          <img
            className="contextplus-item"
            alt=""
            src="../asserts/vector-7.svg"
          />
          <img
            className="contextplus-inner"
            alt=""
            src="../asserts/vector-8.svg"
          />
        </button>
      </div>
    </nav>
  );
};

export default TopNavigationBar;
