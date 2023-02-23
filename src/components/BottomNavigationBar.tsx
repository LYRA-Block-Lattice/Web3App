import { FunctionComponent } from "react";
import "./BottomNavigationBar.css";

const BottomNavigationBar: FunctionComponent = () => {
  return (
    <div className="bottomtabbar">
      <div className="home-indicator">
        <div className="home-indicator1" />
      </div>
      <div className="tabbar">
        <div className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/box-alt-light.svg"
          />
          <div className="text11">Market</div>
        </div>
        <div className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/molecule-light.svg"
          />
          <div className="text11">DAO</div>
        </div>
        <div className="tabbar-item2">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/wallet-light.svg"
          />
          <div className="text13">Wallet</div>
        </div>
        <div className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/user-alt-light.svg"
          />
          <div className="text11">Me</div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigationBar;
