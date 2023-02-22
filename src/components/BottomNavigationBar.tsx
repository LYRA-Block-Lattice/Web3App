import { FunctionComponent } from "react";
import "./BottomNavigationBar.css";

type BottomNavigationBarType = {
  boxAltLight?: string;
  moleculeLight?: string;
  walletLight?: string;
  userAltLight?: string;
};

const BottomNavigationBar: FunctionComponent<BottomNavigationBarType> = ({
  boxAltLight,
  moleculeLight,
  walletLight,
  userAltLight,
}) => {
  return (
    <div className="bottomtabbar">
      <div className="home-indicator">
        <div className="home-indicator1" />
      </div>
      <div className="tabbar">
        <div className="tabbar-item">
          <img className="box-alt-light-icon" alt="" src={boxAltLight} />
          <div className="text10">Market</div>
        </div>
        <div className="tabbar-item">
          <img className="box-alt-light-icon" alt="" src={moleculeLight} />
          <div className="text10">DAO</div>
        </div>
        <div className="tabbar-item">
          <img className="box-alt-light-icon" alt="" src={walletLight} />
          <div className="text12">Wallet</div>
        </div>
        <div className="tabbar-item3">
          <img className="box-alt-light-icon" alt="" src={userAltLight} />
          <div className="text10">Me</div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigationBar;
