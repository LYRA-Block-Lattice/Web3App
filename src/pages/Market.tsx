import { FunctionComponent } from "react";
import PrimaryAccountCard from "../components/PrimaryAccountCard";
import MarketToolBar from "../components/MarketToolBar";
import TokenCatalogTabs from "../components/TokenCatalogTabs";
import MarketOrder from "../components/MarketOrder";
import "./Market.css";

const Market: FunctionComponent = () => {
  return (
    <div className="market">
      <PrimaryAccountCard />
      <MarketToolBar
        homeIconInterlocution="../asserts/home--icon--interlocution.svg"
        homeIconInterlocution1="../asserts/home--icon--interlocution1.svg"
        homeIconInterlocution2="../asserts/home--icon--interlocution2.svg"
        homeIconInterlocution3="../asserts/home--icon--interlocution3.svg"
        homeIconInterlocution4="../asserts/home--icon--interlocution4.svg"
      />
      <div className="searchsection">
        <input
          className="searchsection-child"
          type="search"
          placeholder="Search products/token/NFT/TOT etc."
        />
      </div>
      <div className="orderandcatalog">
        <TokenCatalogTabs />
        <div className="tradableorderssection">
          <MarketOrder
            offeringIcon="../asserts/icbaselinegeneratingtokens.svg"
            bidingIcon="../asserts/carbonuserservicedesk.svg"
            orderStatus="Open"
            offering="BTC"
            biding="tether/USDT"
            amount="1113.2"
            limitMin="1.2"
            limitMax="3.2"
            price="10,323"
            sellerName="A big seller"
            daoName="The First DAO"
            sellerRatings="98%"
            sellerTrades="1024 Trades"
          />
          <MarketOrder
            offeringIcon="../asserts/icbaselinegeneratingtokens1.svg"
            bidingIcon="../asserts/carbonuserservicedesk1.svg"
            orderStatus="Open"
            offering="BTC"
            biding="tether/USDT"
            amount="1113.2"
            limitMin="1.2"
            limitMax="3.2"
            price="10,323"
            sellerName="A big seller"
            daoName="The First DAO"
            sellerRatings="98%"
            sellerTrades="1024 Trades"
          />
        </div>
      </div>
    </div>
  );
};

export default Market;
