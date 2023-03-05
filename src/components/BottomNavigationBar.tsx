import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./BottomNavigationBar.css";

type BottomNavigationBarType = {
  /** Style props */
  textColor?: Property.Color;
};

const BottomNavigationBar: FunctionComponent<BottomNavigationBarType> = ({
  textColor,
}) => {
  const textStyle: CSS.Properties = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div className="bottomtabbar">
      <div className="home-indicator2">
        <div className="home-indicator3" />
      </div>
      <div className="tabbar">
        <button className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/box-alt-light.svg"
          />
          <div className="text13">Market</div>
        </button>
        <button className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/molecule-light.svg"
          />
          <div className="text13">DAO</div>
        </button>
        <button className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/wallet-light.svg"
          />
          <div className="text15" style={textStyle}>
            Wallet
          </div>
        </button>
        <button className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/user-alt-light.svg"
          />
          <div className="text13">Me</div>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigationBar;
