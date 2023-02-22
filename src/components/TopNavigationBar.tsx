import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router";
import "./TopNavigationBar.css";

type TopNavigationBarType = {
  title?: string;
};

const TopNavigationBar: FunctionComponent<TopNavigationBarType> = ({
  title = "Lyra"
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
    <div className="navigation sticky-header">
      <div className="mini-programs-buttons">
        <button className="iconleft" onClick={onIconleftClick}>
          <img
            className="vector-stroke-icon"
            alt=""
            src="../asserts/vector-stroke.svg"
          />
        </button>
      </div>
      <button className="title" onClick={onTitleClick}>
        {title}
      </button>
      <div className="mini-programs-buttons1">
        <div className="stroke" />
        <button className="home" onClick={onHomeClick}>
          <img className="ellipse-icon" alt="" src="../asserts/ellipse.svg" />
          <img className="ellipse-icon1" alt="" src="../asserts/ellipse1.svg" />
        </button>
        <button className="share" onClick={onShareClick}>
          <img className="ellipse-icon2" alt="" src="../asserts/ellipse2.svg" />
          <img className="ellipse-icon3" alt="" src="../asserts/ellipse3.svg" />
          <img className="ellipse-icon4" alt="" src="../asserts/ellipse3.svg" />
        </button>
        <img
          className="separator-icon"
          alt=""
          src="../asserts/separator9.svg"
        />
      </div>
    </div>
  );
};

export default TopNavigationBar;
