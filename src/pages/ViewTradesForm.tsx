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
      <nav className="navigation26">
        <button
          className="mini-programs-buttons12"
          onClick={onMiniProgramsButtonsClick}
        >
          <img className="iconleft6" alt="" src="../asserts/iconleft.svg" />
        </button>
        <button className="title11" onClick={onTitleClick}>
          My Trades
        </button>
        <div className="mini-programs-buttons13">
          <div className="stroke6" />
          <button className="home6" onClick={onHomeClick}>
            <img
              className="ellipse-icon12"
              alt=""
              src="../asserts/ellipse.svg"
            />
            <img
              className="ellipse-icon13"
              alt=""
              src="../asserts/ellipse1.svg"
            />
          </button>
          <img
            className="separator-icon6"
            alt=""
            src="../asserts/separator1.svg"
          />
          <button
            className="navigationprepare-sell-order6"
            onClick={onNavigationPrepareSellOrderClick}
          >
            <img
              className="navigationprepare-sell-order-child14"
              alt=""
              src="../asserts/rectangle-11.svg"
            />
            <img
              className="navigationprepare-sell-order-child15"
              alt=""
              src="../asserts/vector-7.svg"
            />
            <img
              className="navigationprepare-sell-order-child16"
              alt=""
              src="../asserts/vector-8.svg"
            />
          </button>
        </div>
      </nav>
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
        boxAltLight1="../asserts/box-alt-light.svg"
        moleculeLight1="../asserts/molecule-light.svg"
        walletLight1="../asserts/wallet-light.svg"
        userAltLight1="../asserts/user-alt-light.svg"
        textColor="#434343"
        textColor2="#0ebd8d"
      />
    </div>
  );
};

export default ViewTradesForm;
