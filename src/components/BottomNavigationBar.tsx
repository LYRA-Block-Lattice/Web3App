import { FunctionComponent } from "react";
import "./BottomNavigationBar.css";

const BottomNavigationBar: FunctionComponent = () => {
  return (
    <div className="bottomtabbar">
      <div className="home-indicator">
        <div className="home-indicator1" />
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
          <div className="text15">Wallet</div>
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
