import { FunctionComponent, useCallback, useEffect } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PrimaryAccountContainer from "../components/PrimaryAccountContainer";
import WalletCardContainer from "../components/WalletCardContainer";
import MarketToolBarContainer from "../components/MarketToolBarContainer";
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

  const onBannerImageClick = useCallback(() => {
    navigate("/orderdetails");
  }, []);

  return (
    <div className="viewtradesform main-content">
      <TopNavigationBar title="View Trades" />
      <div className="wallet-card-container">
        <WalletCardContainer />
        <MarketToolBarContainer
          homeIconInterlocution="../asserts/home--icon--interlocution10.svg"
          homeIconInterlocution1="../asserts/home--icon--interlocution11.svg"
          homeIconInterlocution2="../asserts/home--icon--interlocution12.svg"
          homeIconInterlocution3="../asserts/home--icon--interlocution13.svg"
          homeIconInterlocution4="../asserts/home--icon--interlocution14.svg"
        />
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
      <BottomNavigationBar />
    </div>
  );
};

export default ViewTradesForm;
