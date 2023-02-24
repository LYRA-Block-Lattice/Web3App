import { FunctionComponent } from "react";
import { useNavigate } from "react-router";
import "./BottomNavigationBar.css";

const BottomNavigationBar: FunctionComponent = () => {
  const navigation = useNavigate();
  const gotoMarket = () => {
    navigation("/");
  };
  const gotoWallet = () => {
    navigation("/wallethome");
  };
  return (
    <div className="bottomtabbar">
      <div className="home-indicator">
        <div className="home-indicator1" />
      </div>
      <div className="tabbar">
        <button className="tabbar-item" onClick={gotoMarket}>
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/box-alt-light.svg"
          />
          <div className="text11">Market</div>
        </button>
        <button className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/molecule-light.svg"
          />
          <div className="text11">DAO</div>
        </button>
        <button className="tabbar-item" onClick={gotoWallet}>
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/wallet-light.svg"
          />
          <div className="text13">Wallet</div>
        </button>
        <button className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/user-alt-light.svg"
          />
          <div className="text11">Me</div>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigationBar;
