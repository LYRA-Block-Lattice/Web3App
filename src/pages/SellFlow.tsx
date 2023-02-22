import { FunctionComponent } from "react";
import "./SellFlow.css";

const SellFlow: FunctionComponent = () => {
  return (
    <div className="sellflow">
      <div className="group">
        <div className="rectangle" />
        <div className="text3">My Wallet</div>
      </div>
      <div className="group1">
        <img className="vector-icon1" alt="" src="../asserts/vector.svg" />
        <div className="text4">DAO</div>
      </div>
      <div className="group2">
        <img className="vector-icon2" alt="" src="../asserts/vector1.svg" />
        <div className="text5">Sell Order</div>
      </div>
      <div className="group3">
        <img className="vector-icon3" alt="" src="../asserts/vector2.svg" />
        <div className="text6">Buyer</div>
      </div>
      <div className="group4">
        <img className="vector-icon3" alt="" src="../asserts/vector2.svg" />
        <div className="text6">Buyer</div>
      </div>
      <div className="group5">
        <img className="vector-icon3" alt="" src="../asserts/vector2.svg" />
        <div className="text6">...</div>
      </div>
      <img
        className="rectangle-vector"
        alt=""
        src="../asserts/rectangle--vector.svg"
      />
      <img
        className="vector-vector"
        alt=""
        src="../asserts/vector--vector.svg"
      />
      <div className="group6">
        <div className="rectangle1" />
        <div className="text9">My Wallet</div>
      </div>
      <div className="offeringlabel">10 test/BTC</div>
      <div className="sellforlabel">
        <div className="bidinglabel">1000 tether/USDT</div>
      </div>
      <div className="ordercollateral">1024 LYR</div>
      <div className="returncollateral">1000 LYR</div>
      <div className="prepare-sell-order-button-parent">
        <button className="prepare-sell-order-button">
          <div className="primary-button">Back</div>
        </button>
        <button className="prepare-sell-order-button1">
          <div className="primary-button1">Place sell order</div>
        </button>
      </div>
      <div className="group7">
        <img className="vector-icon6" alt="" src="../asserts/vector5.svg" />
        <div className="text10">Trade</div>
      </div>
      <div className="group8">
        <img className="vector-icon6" alt="" src="../asserts/vector5.svg" />
        <div className="text10">...</div>
      </div>
      <div className="group9">
        <img className="vector-icon6" alt="" src="../asserts/vector5.svg" />
        <div className="text10">Trade</div>
      </div>
      <img
        className="vector-vector1"
        alt=""
        src="../asserts/vector--vector1.svg"
      />
      <img
        className="vector-vector2"
        alt=""
        src="../asserts/vector--vector2.svg"
      />
      <img
        className="vector-vector3"
        alt=""
        src="../asserts/vector--vector3.svg"
      />
      <img
        className="vector-vector4"
        alt=""
        src="../asserts/vector--vector4.svg"
      />
      <img
        className="vector-vector5"
        alt=""
        src="../asserts/vector--vector4.svg"
      />
      <img
        className="vector-vector6"
        alt=""
        src="../asserts/vector--vector4.svg"
      />
      <img
        className="vector-rectangle"
        alt=""
        src="../asserts/vector--rectangle.svg"
      />
      <img
        className="vector-rectangle1"
        alt=""
        src="../asserts/vector--rectangle1.svg"
      />
      <img
        className="vector-rectangle2"
        alt=""
        src="../asserts/vector--rectangle2.svg"
      />
    </div>
  );
};

export default SellFlow;
