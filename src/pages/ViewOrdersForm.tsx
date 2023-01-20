import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OrderCard from "../components/OrderCard";
import "./ViewOrdersForm.css";
import { MARKET_GET_OWN_ORDERS } from "../app/actionTypes";
import { getAuthSelector, getMarketSelector } from "../app/selectors";
import { getTickerIcon } from "../app/market/marketReducer";

interface customWindow extends Window {
  rrComponent?: any;
  rrProxy?: any;
}
declare const window: customWindow;

const ViewOrdersForm: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(getAuthSelector);
  const market = useSelector(getMarketSelector);

  useEffect(() => {
    dispatch({
      type: MARKET_GET_OWN_ORDERS,
      payload: { accountId: auth.accountId }
    });
    // window.rrProxy.ReactRazor.Pages.Home.Interop.GetOrdersAsync(
    //   window.rrComponent
    // ).then(function (resp: any) {
    //   var ret = JSON.parse(resp);
    //   if (ret.ret == "Success") {
    //     setOrders(ret.result);
    //   } else {
    //     window.rrProxy.ReactRazor.Pages.Home.Interop.AlertAsync(
    //       window.rrComponent,
    //       "Warning",
    //       ret.msg
    //     );
    //   }
    // });
  }, []);

  function truncate(str: any, n: any) {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  }

  const onPrepareSellOrderButtonClick = useCallback(() => {
    navigate("/starttocreateorder");
  }, [navigate]);

  return (
    <div className="viewordersform">
      <div className="view-orders-parent">
        <div className="view-orders">View Orders</div>
        <button
          className="prepare-sell-order-button13"
          onClick={onPrepareSellOrderButtonClick}
        >
          <div className="utility-button5">New</div>
        </button>
      </div>
      {market.ownOrders.map((order) => (
        <OrderCard
          key={order.orderid!}
          offering={order.offering}
          biding={order.biding}
          orderStatus={order.status}
          offeringImg={getTickerIcon(order.offering)}
          bidingImg={getTickerIcon(order.biding)}
          time={order.time}
          price={order.price.toString()}
          amount={order.amount.toString()}
          limitMin={order.limitmin.toString()}
          limitMax={order.limitmax.toString()}
          sold={order.sold.toString()}
          shelf={order.shelf.toString()}
          orderStatusBackgroundColor={
            order.status == "Open" ? "#2196F3" : "gray"
          }
        />
      ))}
    </div>
  );
};

export default ViewOrdersForm;
