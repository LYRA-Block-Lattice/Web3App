import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./TopNavigationBar.css";

type TopNavigationBarType = {
  title?: string;

  /** Style props */
  titleLetterSpacing?: Property.LetterSpacing;
  titleFontWeight?: Property.FontWeight;
  titleFontFamily?: Property.FontFamily;
  titleLineHeight?: Property.LineHeight;
};

const TopNavigationBar: FunctionComponent<TopNavigationBarType> = ({
  title,
  titleLetterSpacing,
  titleFontWeight,
  titleFontFamily,
  titleLineHeight,
}) => {
  const titleStyle: CSS.Properties = useMemo(() => {
    return {
      letterSpacing: titleLetterSpacing,
      fontWeight: titleFontWeight,
      fontFamily: titleFontFamily,
      lineHeight: titleLineHeight,
    };
  }, [titleLetterSpacing, titleFontWeight, titleFontFamily, titleLineHeight]);

  return (
    <div className="navigation">
      <button className="mini-programs-buttons">
        <img className="iconleft" alt="" src="../asserts/iconleft.svg" />
      </button>
      <button className="title" style={titleStyle}>
        {title}
      </button>
      <div className="mini-programs-buttons1">
        <div className="stroke" />
        <button className="home">
          <img className="ellipse-icon" alt="" src="../asserts/ellipse.svg" />
          <img className="ellipse-icon1" alt="" src="../asserts/ellipse1.svg" />
        </button>
        <button className="share">
          <img className="ellipse-icon2" alt="" src="../asserts/ellipse2.svg" />
          <img className="ellipse-icon3" alt="" src="../asserts/ellipse3.svg" />
          <img className="ellipse-icon4" alt="" src="../asserts/ellipse3.svg" />
        </button>
        <img className="separator-icon" alt="" src="../asserts/separator.svg" />
      </div>
    </div>
  );
};

export default TopNavigationBar;
