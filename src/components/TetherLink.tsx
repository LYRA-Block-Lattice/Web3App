import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./TetherLink.css";

const TetherLink: FunctionComponent = () => {
  return (
    <Link className="title-section" to="/assertdetailview">
      <div className="sell-parent">
        <b className="sell">Sell</b>
        <b className="sell">BTC</b>
        <img className="arrow-icon" alt="" src="../asserts/arrow-2.svg" />
        <b className="tetherusdt2">tether/USDT</b>
      </div>
      <div className="details-section">
        <div className="block3">
          <div className="sell">Amount</div>
          <div className="sell">Limit Min</div>
          <div className="sell">Limit Max</div>
        </div>
        <div className="block4">
          <div className="sell">1113.2</div>
          <div className="sell">1.2</div>
          <div className="sell">3.2</div>
        </div>
        <div className="block1">
          <div className="price">Price</div>
        </div>
        <div className="block2">
          <b className="sell">10,323</b>
        </div>
        <div className="details-section-child" />
      </div>
    </Link>
  );
};

export default TetherLink;
