import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Footer.module.css";

type FooterType = {
  iconImageUrl?: string;
  moleculeImageUrl?: string;
  walletImageUrl?: string;
  userImageUrl?: string;

  /** Style props */
  propColor?: Property.Color;
  propColor1?: Property.Color;
  propColor2?: Property.Color;
};

const Footer: FunctionComponent<FooterType> = ({
  iconImageUrl,
  moleculeImageUrl,
  walletImageUrl,
  userImageUrl,
  propColor,
  propColor1,
  propColor2,
}) => {
  const textStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const text1Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const text2Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div className={styles.bottomtabbar}>
      <div className={styles.homeIndicator}>
        <div className={styles.homeIndicator1} />
      </div>
      <div className={styles.tabbar}>
        <div className={styles.tabbarItem}>
          <img className={styles.boxAltLightIcon} alt="" src={iconImageUrl} />
          <div className={styles.text} style={textStyle}>
            Market
          </div>
        </div>
        <div className={styles.tabbarItem}>
          <img
            className={styles.boxAltLightIcon}
            alt=""
            src={moleculeImageUrl}
          />
          <div className={styles.text}>DAO</div>
        </div>
        <div className={styles.tabbarItem2}>
          <img className={styles.boxAltLightIcon} alt="" src={walletImageUrl} />
          <div className={styles.text2} style={text1Style}>
            Wallet
          </div>
        </div>
        <div className={styles.tabbarItem}>
          <img className={styles.boxAltLightIcon} alt="" src={userImageUrl} />
          <div className={styles.text} style={text2Style}>
            Me
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
