import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./OpenContainer.module.css";

type OpenContainerType = {
  tokenImageUrl?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;

  /** Action props */
  onBannerImageClick?: () => void;
};

const OpenContainer: FunctionComponent<OpenContainerType> = ({
  tokenImageUrl,
  propBackgroundColor,
  onBannerImageClick,
}) => {
  const orderImageStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <button className={styles.bannerImage} onClick={onBannerImageClick}>
      <div className={styles.orderBanner}>
        <div className={styles.orderImage} style={orderImageStyle}>
          <img
            className={styles.icbaselineGeneratingTokensIcon}
            alt=""
            src={tokenImageUrl}
          />
          <img className={styles.orderImageChild} alt="" src="../arrow-1.svg" />
          <img
            className={styles.icbaselineGeneratingTokensIcon}
            alt=""
            src="../carbonuserservicedesk2.svg"
          />
        </div>
        <div className={styles.orderStatus}>
          <b className={styles.open}>Open</b>
        </div>
      </div>
    </button>
  );
};

export default OpenContainer;
