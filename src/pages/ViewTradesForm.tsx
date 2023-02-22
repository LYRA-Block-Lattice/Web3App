import { FunctionComponent, useEffect } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PrimaryAccountContainer from "../components/PrimaryAccountContainer";
import MarketToolBar from "../components/MarketToolBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { MARKET_GET_OWN_TRADES } from "../app/actionTypes";
import { getAuthSelector, getMarketSelector } from "../app/selectors";
import TradeCard from "../components/TradeCard";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./ViewTradesForm.css";
import { getTickerIcon } from "../app/market/marketReducer";
import PrimaryAccountCard from "../components/PrimaryAccountCard";

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
      <TopNavigationBar title="My Trades" />
      <div className="wallet-card-group">
        <PrimaryAccountContainer />
        <MarketToolBar
          homeIconInterlocution="../asserts/home--icon--interlocution10.svg"
          homeIconInterlocution1="../asserts/home--icon--interlocution11.svg"
          homeIconInterlocution2="../asserts/home--icon--interlocution12.svg"
          homeIconInterlocution3="../asserts/home--icon--interlocution13.svg"
          homeIconInterlocution4="../asserts/home--icon--interlocution14.svg"
        />
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
      <BottomNavigationBar
        boxAltLight="../asserts/box-alt-light.svg"
        moleculeLight="../asserts/molecule-light.svg"
        walletLight="../asserts/wallet-light.svg"
        userAltLight="../asserts/user-alt-light.svg"
      />
    </div>
  );
};

export default ViewTradesForm;
