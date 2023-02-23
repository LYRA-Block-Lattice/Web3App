import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./Footer.css";

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
    <div className="bottomtabbar">
      <div className="home-indicator">
        <div className="home-indicator1" />
      </div>
      <div className="tabbar">
        <div className="tabbar-item">
          <img className="box-alt-light-icon" alt="" src={iconImageUrl} />
          <div className="text11" style={textStyle}>
            Market
          </div>
        </div>
        <div className="tabbar-item">
          <img className="box-alt-light-icon" alt="" src={moleculeImageUrl} />
          <div className="text11">DAO</div>
        </div>
        <div className="tabbar-item2">
          <img className="box-alt-light-icon" alt="" src={walletImageUrl} />
          <div className="text13" style={text1Style}>
            Wallet
          </div>
        </div>
        <div className="tabbar-item">
          <img className="box-alt-light-icon" alt="" src={userImageUrl} />
          <div className="text11" style={text2Style}>
            Me
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
