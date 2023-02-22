import { FunctionComponent, useCallback } from "react";
import "./TopNavigationBar.css";

type TopNavigationBarType = {
  title?: string;
};

const TopNavigationBar: FunctionComponent<TopNavigationBarType> = ({
  title = "Lyra"
}) => {
  const onTitleClick = useCallback(() => {
    //TODO: scroll main view to top
  }, []);

  const onHomeClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onShareClick = useCallback(() => {
    //TODO: popup context menu, share, etc.
  }, []);

  return (
    <div className="navigation">
      <img
        className="mini-programs-buttons"
        alt=""
        src="../asserts/mini-programs-buttons.svg"
      />
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
