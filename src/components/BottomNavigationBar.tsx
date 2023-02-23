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
        <button onClick={gotoMarket}>
          <div className="tabbar-item">
            <img
              className="box-alt-light-icon"
              alt=""
              src="../box-alt-light.svg"
            />
            <div className="text11">Market</div>
          </div>
        </button>
        <div className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../molecule-light.svg"
          />
          <div className="text11">DAO</div>
        </div>
        <button onClick={gotoWallet}>
          <div className="tabbar-item">
            <img
              className="box-alt-light-icon"
              alt=""
              src="../wallet-light.svg"
            />
            <div className="text13">Wallet</div>
          </div>
        </button>
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
