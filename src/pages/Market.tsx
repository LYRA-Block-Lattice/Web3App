import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MarketOrder from "../components/MarketOrder";
import DisplaySellItems from "../components/DisplaySellItems";

import "./Market.css";

interface customWindow extends Window {
  rrComponent?: any;
  rrProxy?: any;
}
declare const window: customWindow;

const Market: FunctionComponent = () => {
  const navigate = useNavigate();

  const [lyrbns, setLyrbns] = useState(0);
  const [usdt, setUsdt] = useState(0);

  const [nftcnt, setNftcnt] = useState(0);
  const [totcnt, setTotcnt] = useState(0);
  const [sellcnt, setSellcnt] = useState(0);
  const [bidcnt, setBidcnt] = useState(0);

  // function to get json from rest api
  const getJson = async (url: string) => {
    const response = await fetch(url);
    return response.json();
  };

  // function to get web content from rest api
  const getWebContent = async (url: string) => {
    const response = await fetch(url);
    return response.text();
  };

  useEffect(() => {
    const netid = process.env.REACT_APP_NETWORK_ID;
    const url = `https://${netid}.lyra.live/api/Node/GetLastBlock?AccountId=LUTPLGNAP4vTzXh5tWVCmxUBh8zjGTR8PKsfA8E67QohNsd1U6nXPk4Q9jpFKsKfULaaT3hs6YK7WKm57QL5oarx8mZdbM`;
    getWebContent(url)
      .then((json) => JSON.parse(json))
      .then((j) => JSON.parse(j.blockData))
      .then((ret) => {
        //console.log(ret.Balances);
        setNftcnt(
          Object.keys(ret.Balances).filter((a) => a.startsWith("nft/")).length
        );
        setTotcnt(
          Object.keys(ret.Balances).filter(
            (a) => a.startsWith("tot/") || a.startsWith("svc/")
          ).length
        );
        setLyrbns(
          Object.keys(ret.Balances).find((a) => a == "LYR") === undefined
            ? 0
            : ret.Balances["LYR"] / 100000000
        );
        setUsdt(
          Object.keys(ret.Balances).find((a) => a == "tether/USDT") ===
            undefined
            ? 0
            : ret.Balances["tether/USDT"] / 100000000
        );
      });
  }, []);

  const onNFTCountTextClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onGoNFTButtonClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onTOTCountTextClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onGoTOTButtonClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onSellingCountTextClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onGoSellingButtonClick = useCallback(() => {
    navigate("/viewordersform");
  }, [navigate]);

  const onBuyingCountTextClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onGoBuyingButtonClick = useCallback(() => {
    navigate("/viewtradesform");
  }, [navigate]);

  const onWalletNameLabelClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onQRCodeButtonRoundClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onQRCodeButtonClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onDaoButtonClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onSwapButtonClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onInvestButtonClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onSwapButton1Click = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  return (
    <div className="market">
      <div className="wallet-card1">
        <div className="wallet-card-child">
          <div className="rectangle-container">
            <div className="rectangle1" />
          </div>
        </div>
        <div className="frame-div">
          <div className="balance-display-zone-group">
            <button
              className="balance-display-zone1"
              onClick={onBalanceDisplayZoneClick}
            >
              <button className="wallet-name-label1">My Primary Account</button>
              <div className="balance-display-zone-inner" />
              <b className="usdtbalance2">1,025,000</b>
              <b className="lyrlabel1">LYR</b>
              <div className="rectangle-div" />
            </button>
            <div className="qrcode-button-container">
              <button className="qrcode-button1">
                <div className="qrcode-button-round1" />
                <img
                  className="qrcode-icon1"
                  alt=""
                  src="../asserts/qrcode-icon.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="searchsection">
        <input
          className="searchsection-child"
          type="text"
          placeholder="Search products/token/NFT/TOT etc."
        />
      </div>
      <div className="orderandcatalog">
        <div className="tradableorderssection1">
          <div className="catalogtab1">
            <div className="token-group">
              <b className="token1">Token</b>
              <div className="ellipse-container">
                <img
                  className="group-inner"
                  alt=""
                  src="../asserts/ellipse-43.svg"
                />
                <div className="div2">18</div>
              </div>
            </div>
            <div className="nft-group">
              <b className="token1">NFT</b>
              <div className="ellipse-container">
                <img
                  className="group-inner"
                  alt=""
                  src="../asserts/ellipse-43.svg"
                />
                <div className="div2">18</div>
              </div>
            </div>
            <div className="fiat-container">
              <b className="fiat1">Fiat</b>
            </div>
            <div className="fiat-container">
              <b className="fiat1">Goods</b>
            </div>
            <div className="fiat-container">
              <b className="fiat1">Service</b>
            </div>
          </div>
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
        <DisplaySellItems />
      </div>
    </div>
  );
};

export default Market;
