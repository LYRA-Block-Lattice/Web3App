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
            src="../box-alt-light.svg"
          />
          <div className="text11">Market</div>
        </div>
        <div className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../molecule-light.svg"
          />
          <div className="text11">DAO</div>
        </div>
        <div className="tabbar-item2">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../wallet-light.svg"
          />
          <div className="text13">Wallet</div>
        </div>
        <div className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../user-alt-light.svg"
          />
          <div className="text11">Me</div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigationBar;
