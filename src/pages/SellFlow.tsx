import { FunctionComponent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { WALLET_CREATE_ORDER } from "../app/actionTypes";
import { getAppSelector, getAuthSelector } from "../app/selectors";
import "./SellFlow.css";

const SellFlow: FunctionComponent = () => {
  const dispatch = useDispatch();
  const app = useSelector(getAppSelector);
  const auth = useSelector(getAuthSelector);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});

  const data = decodeURIComponent(searchParams.get("data")!);
  const obj = JSON.parse(data);
  console.log("order is", obj);

  const onPrepareSellOrderButtonClick = useCallback(() => {
    if (!auth.hasKey) navigate("/openwallet?ret=/starttocreateorder");
    else {
      dispatch({
        type: WALLET_CREATE_ORDER,
        payload: {
          accountId: app.wallet.accountId,
          order: obj
        }
      });
    }
  }, [navigate]);
  return (
    <div className="sellflow">
      <div className="group">
        <div className="rectangle" />
        <div className="text">My Wallet</div>
      </div>
      <div className="group1">
        <img className="vector-icon" alt="" src="../asserts/vector.svg" />
        <div className="text1">DAO</div>
      </div>
      <div className="group2">
        <img className="vector-icon1" alt="" src="../asserts/vector1.svg" />
        <div className="text2">Sell Order</div>
      </div>
      <div className="group3">
        <img className="vector-icon2" alt="" src="../asserts/vector2.svg" />
        <div className="text3">Buyer</div>
      </div>
      <div className="group4">
        <img className="vector-icon2" alt="" src="../asserts/vector2.svg" />
        <div className="text3">Buyer</div>
      </div>
      <div className="group5">
        <img className="vector-icon2" alt="" src="../asserts/vector2.svg" />
        <div className="text3">...</div>
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
        <div className="text6">My Wallet</div>
      </div>
      <div className="offeringlabel">
        {obj.count} {obj.selltoken}
      </div>
      <div className="sellforlabel">
        <div className="bidinglabel">
          {obj.price * obj.count} {obj.gettoken}
        </div>
      </div>
      <div className="ordercollateral">{obj.collateral} LYR</div>
      <div className="returncollateral">
        {obj.collateral - obj.daofee - obj.netfee} LYR
      </div>
      <div className="ordercollateral">1024 LYR</div>
      <div className="returncollateral">1000 LYR</div>
      <div className="prepare-sell-order-button-parent">
        <button
          className="prepare-sell-order-button1"
          onClick={onPrepareSellOrderButtonClick}
        >
          <div className="primary-button1">Back</div>
        </button>
        <button className="prepare-sell-order-button2">
          <div className="primary-button2">Place sell order</div>
        </button>
      </div>
      <div className="group7">
        <img className="vector-icon5" alt="" src="../asserts/vector5.svg" />
        <div className="text7">Trade</div>
      </div>
      <div className="group8">
        <img className="vector-icon5" alt="" src="../asserts/vector5.svg" />
        <div className="text7">...</div>
      </div>
      <div className="group9">
        <img className="vector-icon5" alt="" src="../asserts/vector5.svg" />
        <div className="text7">Trade</div>
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
