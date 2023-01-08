import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
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
        <div className="material-symbolssearch-rounde-wrapper">
          <div className="material-symbolssearch-rounde">
            <img className="vector-icon" alt="" src="../asserts/vector.svg" />
          </div>
        </div>
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
          <div className="ordercard">
            <div className="order-brief-section">
              <button className="banner-image">
                <div className="order-banner">
                  <div className="order-image">
                    <img
                      className="icbaseline-generating-tokens-icon"
                      alt=""
                      src="../asserts/icbaselinegeneratingtokens.svg"
                    />
                    <img
                      className="order-image-child"
                      alt=""
                      src="../asserts/arrow-1.svg"
                    />
                    <img
                      className="icbaseline-generating-tokens-icon"
                      alt=""
                      src="../asserts/carbonuserservicedesk.svg"
                    />
                  </div>
                  <div className="order-status">
                    <b className="open">Open</b>
                  </div>
                </div>
              </button>
              <Link className="title-section" to="/assertdetailview">
                <div className="sell-parent">
                  <b className="sell">Sell</b>
                  <b className="sell">BTC</b>
                  <img
                    className="frame-item"
                    alt=""
                    src="../asserts/arrow-2.svg"
                  />
                  <b className="tetherusdt">tether/USDT</b>
                </div>
                <div className="details-section">
                  <div className="block3">
                    <div className="sell">Amount</div>
                    <div className="sell">Limit Min</div>
                    <div className="sell">Limit Max</div>
                  </div>
                  <div className="block4">
                    <div className="sell">1113.2</div>
                    <div className="sell">1.2</div>
                    <div className="sell">3.2</div>
                  </div>
                  <div className="block1">
                    <div className="price">Price</div>
                  </div>
                  <div className="block2">
                    <b className="sell">10,323</b>
                  </div>
                  <div className="details-section-child" />
                </div>
              </Link>
            </div>
            <div className="trades-section">
              <div className="width-controller" />
            </div>
            <div className="userprofilesection">
              <img
                className="userprofilesection-child"
                alt=""
                src="../asserts/ellipse-1@2x.png"
              />
              <div className="a-big-seller-parent">
                <b className="sell">A big seller</b>
                <div className="the-first-dao">The First DAO</div>
              </div>
              <div className="parent">
                <b className="sell">98%</b>
                <div className="the-first-dao">1024 Trades</div>
              </div>
            </div>
          </div>
          <div className="fiat-wrapper">
            <b className="fiat">Fiat</b>
          </div>
          <div className="fiat-wrapper">
            <b className="fiat">Goods</b>
          </div>
          <div className="fiat-wrapper">
            <b className="fiat">Service</b>
          </div>
        </div>
        <DisplaySellItems />
      </div>
    </div>
  );
};

export default Market;
