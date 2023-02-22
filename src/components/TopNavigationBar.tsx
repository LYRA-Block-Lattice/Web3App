import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router";
import "./TopNavigationBar.css";

type TopNavigationBarType = {
  title?: string;
  separator?: string;
  rectangle1?: string;
  iconleft?: string;
  ellipse?: string;
  ellipse1?: string;
  vector7?: string;
  vector8?: string;

  /** Action props */
  onMiniProgramsButtonsClick?: () => void;
  onTitleClick?: () => void;
  onHomeClick?: () => void;
  onContextPlusClick?: () => void;
};

const TopNavigationBar: FunctionComponent<TopNavigationBarType> = ({
  title,
  onMiniProgramsButtonsClick,
  onTitleClick,
  onHomeClick,
  separator,
  onContextPlusClick,
  rectangle1,
  iconleft,
  ellipse,
  ellipse1,
  vector7,
  vector8
}) => {
  const navigate = useNavigate();

  const onIconleftClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onTitleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, []);

  const onShareClick = useCallback(() => {
    //TODO: popup context menu, share, etc.
  }, []);

  return (
    <nav className="topnavigationbar sticky-header">
      <button
        className="mini-programs-buttons"
        onClick={onMiniProgramsButtonsClick}
      >
        <img className="iconleft" alt="" src={iconleft} />
      </button>
      <button className="title5" onClick={onTitleClick}>
        {title}
      </button>
      <div className="mini-programs-buttons1">
        <div className="stroke" />
        <button className="home" onClick={onHomeClick}>
          <img className="ellipse-icon" alt="" src={ellipse} />
          <img className="ellipse-icon1" alt="" src={ellipse1} />
        </button>
        <img className="separator-icon" alt="" src={separator} />
        <button className="contextplus" onClick={onContextPlusClick}>
          <img className="contextplus-child" alt="" src={rectangle1} />
          <img className="contextplus-item" alt="" src={vector7} />
          <img className="contextplus-inner" alt="" src={vector8} />
        </button>
      </div>
    </nav>
  );
};

export default TopNavigationBar;
