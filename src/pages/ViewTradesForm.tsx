import { FunctionComponent, useCallback, useEffect } from "react";
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

  const onBannerImageClick = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  return (
    <div className="viewtradesform">
      <TopNavigationBar
        title="My Trades"
        onMiniProgramsButtonsClick={onMiniProgramsButtonsClick}
        onTitleClick={onTitleClick}
      />
      <div className="wallet-card-group">
        <div className="wallet-card">
          <div className="wallet-card-inner">
            <div className="rectangle-wrapper">
              <div className="rectangle2" />
            </div>
          </div>
          <div className="wallet-card-child">
            <div className="balance-display-zone-parent">
              <a className="balance-display-zone">
                <button className="wallet-name-label">
                  My Primary Account
                </button>
                <div className="balance-display-zone-child" />
                <b className="usdtbalance">1,025,000</b>
                <b className="lyrlabel">LYR</b>
                <div className="balance-display-zone-item" />
              </a>
              <div className="qrcode-button-wrapper">
                <button className="qrcode-button">
                  <div className="qrcode-button-round" />
                  <img
                    className="qrcode-icon"
                    alt=""
                    src="../asserts/qrcode-icon.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
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
