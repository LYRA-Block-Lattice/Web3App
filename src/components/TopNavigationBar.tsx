import { FunctionComponent } from "react";
import styles from "./TopNavigationBar.module.css";

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
  onContextMenuButtonClick,
}) => {
  return (
    <div className={styles.topnavigationbar}>
      <button className={styles.navbackbutton} onClick={onNavBackButtonClick}>
        <img className={styles.iconleft} alt="" src="../iconleft.svg" />
      </button>
      <button className={styles.title} onClick={onTitleClick}>
        {title}
      </button>
      <button
        className={styles.contextmenubutton}
        onClick={onContextMenuButtonClick}
      >
        <img
          className={styles.icroundPlusIcon}
          alt=""
          src="../icroundplus2.svg"
        />
      </button>
    </div>
  );
};

export default TopNavigationBar;
