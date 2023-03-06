import { FunctionComponent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { WALLET_CREATE_ORDER } from "../app/actionTypes";
import { UniOrder } from "../app/blockchain/blocks/block";
import { getHoldType } from "../app/blockchain/blocks/meta";
import { getAppSelector, getAuthSelector } from "../app/selectors";
import { LongRunTask, NeedRunTask } from "../app/utils";
import { getWallet } from "../app/wallet/walletSaga";
import PrimaryButton from "../components/PrimaryButton";
import "./SellFlow.css";

const SellFlow: FunctionComponent<NeedRunTask> = (props) => {
  const dispatch = useDispatch();
  const app = useSelector(getAppSelector);
  const auth = useSelector(getAuthSelector);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});

  const data = decodeURIComponent(searchParams.get("data")!);
  const obj = JSON.parse(data);
  console.log("order is", obj);
  const fees = JSON.parse(decodeURIComponent(searchParams.get("fees")!));

  const onPrepareSellOrderButtonClick = useCallback(() => {
    if (!auth.hasKey) navigate("/openwallet?ret=/starttocreateorder");
    else {
      console.log("printing fiat...");
      const promises: LongRunTask[] = [
        {
          promise: (input) =>
            new Promise(async (resolve, reject) => {
              const wallet = getWallet();
              const obj = input.order;

              var order = new UniOrder();
              order.daoId = obj.daoid;
              order.dealerId = obj.dealerid;
              order.offerby = getHoldType(obj.selltoken);
              order.offering = obj.selltoken;
              order.bidby = getHoldType(obj.gettoken);
              order.biding = obj.gettoken;
              order.amount = obj.count;
              order.price = obj.price;
              order.eqprice = obj.eqprice;
              order.limitMax = obj.limitmax;
              order.limitMin = obj.limitmin;
              order.payBy = obj.payby;
              order.cltamt = obj.collateral;

              try {
                const balanceResp = await wallet.createOrder(order);
                console.log("createOrder", balanceResp);
                if (balanceResp.resultCode == 0) {
                  resolve({ ...input, balanceResp: balanceResp });
                } else {
                  reject(balanceResp.resultMessage);
                }
              } catch (e) {
                reject(e);
              }
            }),
          callback: null,
          name: "Create Sell Order",
          description: "Send block to Lyra consensus network."
        }
      ];
      if (props.onStart) {
        const ret = props.onStart(
          "Create Sell Order",
          {
            order: obj
          },
          promises
        );
        console.log(ret);
      }
      // dispatch({
      //   type: WALLET_CREATE_ORDER,
      //   payload: {
      //     accountId: app.wallet.accountId,
      //     order: obj
      //   }
      // });
    }
  }, [navigate, dispatch, auth.hasKey, app.wallet.accountId, obj, props]);
  return (
    <div className="sellflow">
      <div className="group">
        <div className="rectangle" />
        <div className="text3">My Wallet</div>
      </div>
      <div className="group1">
        <img className="vector-icon" alt="" src="../asserts/vector.svg" />
        <div className="text4">DAO</div>
      </div>
      <div className="group2">
        <img className="vector-icon1" alt="" src="../asserts/vector1.svg" />
        <div className="text5">Sell Order</div>
      </div>
      <div className="group3">
        <img className="vector-icon2" alt="" src="../asserts/vector2.svg" />
        <div className="text6">Buyer</div>
      </div>
      <div className="group4">
        <img className="vector-icon2" alt="" src="../asserts/vector2.svg" />
        <div className="text6">Buyer</div>
      </div>
      <div className="group5">
        <img className="vector-icon2" alt="" src="../asserts/vector2.svg" />
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
      <div className="offeringlabel">
        {obj.count} {obj.selltoken}
      </div>
      <div className="sellforlabel">
        <div className="bidinglabel">
          {obj.price * obj.count} {obj.gettoken}
        </div>
      </div>
      <div className="ordercollateral">{obj.collateral} LYR</div>
      <div className="returncollateral">{obj.collateral - fees.total} LYR</div>
      <div className="buttons-parent">
        <button className="buttons" onClick={() => navigate(-1)}>
          <div className="primary-button">Back</div>
        </button>
        <PrimaryButton onClick={onPrepareSellOrderButtonClick}>
          Place sell order
        </PrimaryButton>
      </div>
      <div className="group7">
        <img className="vector-icon5" alt="" src="../asserts/vector5.svg" />
        <div className="text10">Trade</div>
      </div>
      <div className="group8">
        <img className="vector-icon5" alt="" src="../asserts/vector5.svg" />
        <div className="text10">...</div>
      </div>
      <div className="group9">
        <img className="vector-icon5" alt="" src="../asserts/vector5.svg" />
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
