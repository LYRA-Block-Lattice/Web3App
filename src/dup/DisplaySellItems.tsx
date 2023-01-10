import { error } from "console";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppSelector, getMarketSelector } from "../app/selectors";
import MarketOrder from "../components/MarketOrder";
import * as actionTypes from "../app/actionTypes";

// a function to display the sell items with error handling
export default function DisplaySellItems() {
  const dispatch = useDispatch();
  const market = useSelector(getMarketSelector);

  useEffect(() => {
    dispatch({ type: actionTypes.MARKET_GET_ORDERS });
  }, []);

  return (
    <>
      {market.orders?.map((blk) => (
        <MarketOrder
          key={(blk as any).AccountID}
          orderId={(blk as any).AccountID}
          sellerName={(blk as any).UserName}
          offering={(blk as any).Order.offering}
          biding={(blk as any).Order.biding}
          sellerRatings={
            Math.round(((blk as any).Finished / (blk as any).Total) * 100) + "%"
          }
          lastUpdated={(blk as any).TimeStamp}
          orderStatus={(blk as any).UOStatus}
          price={(blk as any).Order.price}
          amount={(blk as any).Order.amount}
          limitMin={(blk as any).Order.limitMin}
          limitMax={(blk as any).Order.limitMax}
          daoName="The First DAO"
          sellerTrades={(blk as any).Total + " Trades"}
          offeringIcon="../asserts/icbaselinegeneratingtokens.svg"
          bidingIcon="../asserts/carbonuserservicedesk.svg"
        />
      ))}
    </>
  );
}
