import { FunctionComponent, useCallback } from "react";
import "./TopNavigationBar.css";

type TopNavigationBarType = {
  title?: string;

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
  onContextPlusClick,
}) => {
  const onMiniProgramsButtons1Click = useCallback(() => {
    //TODO: context menu
  }, []);

  return (
    <div className="topnavigationbar">
      <button
        className="mini-programs-buttons"
        onClick={onMiniProgramsButtonsClick}
      >
        <img className="iconleft" alt="" src="../asserts/iconleft.svg" />
      </button>
      <button className="title5" onClick={onTitleClick}>
        {title}
      </button>
      <button
        className="mini-programs-buttons1"
        onClick={onMiniProgramsButtons1Click}
      >
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
