import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { MARKET_GET_OWN_TRADES } from "../app/actionTypes";
import { getAuthSelector, getMarketSelector } from "../app/selectors";
import TradeCard from "../components/TradeCard";
import "./ViewTradesForm.css";
import { getTickerIcon } from "../app/market/marketReducer";
import PrimaryAccountCard from "../components/PrimaryAccountCard";
import MarketToolBar from "../components/MarketToolBar";

const ViewTradesForm: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(getAuthSelector);
  const market = useSelector(getMarketSelector);

  useEffect(() => {
    dispatch({
      type: MARKET_GET_OWN_TRADES,
      payload: { accountId: auth.accountId }
    });
  }, []);

  return (
    <div className="viewtradesform">
      <PrimaryAccountCard />
      <div className="iconssection-wrapper">
        <div className="iconssection">
          <MarketToolBar />
        </div>
      </div>
      <div className="view-trades-wrapper">
        <div className="view-trades">View Trades</div>
      </div>
      {market.ownTrades?.map((trade: any) => (
        <TradeCard
          key={trade.tradeId}
          dir={trade.dir}
          tradeStatus={trade.status}
          biding={trade.biding}
          offering={trade.offering}
          time={trade.time}
          price={trade.price}
          amount={trade.amount}
          bidingImg={getTickerIcon(trade.biding)}
          offeringImg={getTickerIcon(trade.offering)}
          tradeId={trade.tradeId}
        />
      ))}
    </div>
  );
};

export default ViewTradesForm;
