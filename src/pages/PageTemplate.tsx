import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./PageTemplate.css";
import React from "react";

interface TemplateArgs {
  title?: string;
  onNavBackButtonClick?: () => void;
  onTitleClick?: () => void;
  onContextMenuButtonClick?: () => void;
  children?: React.ReactNode | React.ReactNode[];
}

const PageTemplate: FunctionComponent<TemplateArgs> = ({
  title,
  onNavBackButtonClick,
  onTitleClick,
  onContextMenuButtonClick,
  children
}) => {
  return (
    <div className="pagetemplate main-content">
      <TopNavigationBar
        title={title ?? "Page Template"}
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className="pagecontent">{children}</div>
      <BottomNavigationBar textColor="#434343" />
    </div>
  );
};

export default React.memo(PageTemplate);
