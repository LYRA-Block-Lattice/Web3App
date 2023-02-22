import { FunctionComponent } from "react";
import "./BottomNavigationBar.css";

type BottomNavigationBarType = {
  iconImageUrl?: string;
  moleculeImageUrl?: string;
  walletImageUrl?: string;
  userImageUrl?: string;
};

const BottomNavigationBar: FunctionComponent<BottomNavigationBarType> = ({
  iconImageUrl,
  moleculeImageUrl,
  walletImageUrl,
  userImageUrl,
}) => {
  return (
    <div className="bottomtabbar">
      <div className="home-indicator">
        <div className="home-indicator1" />
      </div>
      <div className="tabbar">
        <button className="tabbar-item">
          <img className="box-alt-light-icon" alt="" src={iconImageUrl} />
          <div className="text10">Market</div>
        </button>
        <button className="tabbar-item">
          <img className="box-alt-light-icon" alt="" src={moleculeImageUrl} />
          <div className="text10">DAO</div>
        </button>
        <button className="tabbar-item">
          <img className="box-alt-light-icon" alt="" src={walletImageUrl} />
          <div className="text12">Wallet</div>
        </button>
        <button className="tabbar-item">
          <img className="box-alt-light-icon" alt="" src={userImageUrl} />
          <div className="text13">Me</div>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigationBar;
