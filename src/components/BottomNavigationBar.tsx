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
            src="../asserts/box-alt-light1.svg"
          />
          <div className="text11">Market</div>
        </button>
        <button className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/molecule-light1.svg"
          />
          <div className="text11">DAO</div>
        </button>
        <button className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/wallet-light1.svg"
          />
          <div className="text13">Wallet</div>
        </button>
        <button className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/user-alt-light1.svg"
          />
          <div className="text11">Me</div>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigationBar;
