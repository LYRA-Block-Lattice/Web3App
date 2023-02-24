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
        <div className="ordercard1">
          <div className="order-brief-section1">
            <button className="banner-image1" onClick={onBannerImageClick}>
              <div className="order-banner1">
                <div className="order-image1">
                  <img
                    className="icbaseline-generating-tokens-icon1"
                    alt=""
                    src="../asserts/icbaselinegeneratingtokens8.svg"
                  />
                  <img
                    className="order-image-item"
                    alt=""
                    src="../asserts/arrow-1.svg"
                  />
                  <img
                    className="icbaseline-generating-tokens-icon1"
                    alt=""
                    src="../asserts/carbonuserservicedesk7.svg"
                  />
                </div>
                <div className="order-status1">
                  <b className="open1">Open</b>
                </div>
              </div>
            </button>
            <a className="title-section1">
              <div className="trade-parent">
                <b className="trade">Trade</b>
                <b className="trade">BTC</b>
                <img
                  className="arrow-icon"
                  alt=""
                  src="../asserts/arrow-2.svg"
                />
                <b className="tetherusdt3">tether/USDT</b>
              </div>
              <div className="title-section-child" />
              <div className="am-wrapper">
                <div className="trade">12/29/2022 10:25:37 AM</div>
              </div>
              <div className="details-section1">
                <div className="block11">
                  <div className="trade">Price</div>
                </div>
                <div className="block21">
                  <div className="trade">10,323</div>
                </div>
                <div className="details-section-item" />
                <div className="block31">
                  <div className="trade">Amount</div>
                </div>
                <div className="block21">
                  <div className="trade">1113.2</div>
                </div>
              </div>
            </a>
          </div>
          <div className="trades-section1">
            <div className="width-controller1" />
          </div>
          <div className="itemactions">
            <button className="delist-button">
              <div className="mini-button2">Cancel</div>
            </button>
            <button className="delist-button">
              <div className="mini-button2">Close</div>
            </button>
            <button className="delist-button">
              <div className="mini-button2">Complain</div>
            </button>
            <button className="delist-button">
              <div className="mini-button2">Comment</div>
            </button>
          </div>
        </div>
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
