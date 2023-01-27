import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppSelector, getMarketSelector } from "../app/selectors";
import MarketOrder from "../components/MarketOrder";
import * as actionTypes from "../app/actionTypes";
import { getTickerIcon } from "../app/market/marketReducer";

// a function to display the sell items with error handling
export default function DisplaySellItems(props: any) {
  const dispatch = useDispatch();
  const market = useSelector(getMarketSelector);

  useEffect(() => {
    dispatch({
      type: actionTypes.MARKET_GET_ORDERS,
      payload: {
        cat: props.cat
      }
    });
  }, [props]);

  return (
    <>
      {market.orders?.Orders?.map((blk: any) => (
        <MarketOrder
          key={blk.AccountID}
          orderId={blk.AccountID}
          sellerName={
            market.orders.OwnerStats.find(
              (a: any) => a._id.Owner == blk.OwnerAccountId
            )._id.Name
          }
          offering={blk.OfferingName ?? blk.Order.offering}
          biding={blk.BidingName ?? blk.Order.biding}
          sellerRatings={
            Math.round(
              ((market.orders.OwnerStats.find(
                (a: any) =>
                  a._id.Owner == blk.OwnerAccountId && a._id.State == 30
              )?.Count ?? "0") /
                (market.orders.OwnerStats.filter(
                  (a: any) => a._id.Owner == blk.OwnerAccountId
                )
                  .map((a: any) => a.Count)
                  .reduce((part: number, a: number) => part + a, 0) ?? "0")) *
                100
            ) + "%"
          }
          lastUpdated={blk.TimeStamp}
          orderStatus={blk.UOStatus}
          price={blk.Order.price}
          amount={blk.Order.amount}
          limitMin={blk.Order.limitMin}
          limitMax={blk.Order.limitMax}
          daoName={
            market.orders.Daos.find(
              (d: any) => d.Info[0].AccountID == blk.Order.daoId
            ).Info[0].Name
          }
          sellerTrades={
            (market.orders.OwnerStats.find(
              (a: any) => a._id.Owner == blk.OwnerAccountId && a._id.State == 30
            )?.Count ?? "No") + " Trades"
          }
          offeringIcon={getTickerIcon(blk.Order.offering)}
          bidingIcon={getTickerIcon(blk.Order.biding)}
          time={blk.TimeStamp}
        />
      ))}
    </>
  );
}
