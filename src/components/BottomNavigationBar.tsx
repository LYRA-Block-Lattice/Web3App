import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./BottomNavigationBar.css";

type BottomNavigationBarType = {
  boxAltLight1?: string;
  moleculeLight1?: string;
  walletLight1?: string;
  userAltLight1?: string;

  /** Style props */
  textColor?: Property.Color;
  textColor1?: Property.Color;
  textColor2?: Property.Color;
};

const BottomNavigationBar: FunctionComponent<BottomNavigationBarType> = ({
  boxAltLight1,
  moleculeLight1,
  walletLight1,
  userAltLight1,
  textColor,
  textColor1,
  textColor2,
}) => {
  const textStyle: CSS.Properties = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  const text1Style: CSS.Properties = useMemo(() => {
    return {
      color: textColor1,
    };
  }, [textColor1]);

  const text2Style: CSS.Properties = useMemo(() => {
    return {
      color: textColor2,
    };
  }, [textColor2]);

  return (
    <div className="bottomtabbar">
      <div className="home-indicator">
        <div className="home-indicator1" />
      </div>
      <div className="tabbar">
        <div className="tabbar-item">
          <img className="box-alt-light-icon" alt="" src={boxAltLight1} />
          <div className="text13" style={textStyle}>
            Market
          </div>
        </div>
        <div className="tabbar-item1">
          <img className="box-alt-light-icon" alt="" src={moleculeLight1} />
          <div className="text13">DAO</div>
        </div>
        <div className="tabbar-item1">
          <img className="box-alt-light-icon" alt="" src={walletLight1} />
          <div className="text15" style={text1Style}>
            Wallet
          </div>
        </div>
        <div className="tabbar-item1">
          <img className="box-alt-light-icon" alt="" src={userAltLight1} />
          <div className="text13" style={text2Style}>
            Me
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigationBar;
