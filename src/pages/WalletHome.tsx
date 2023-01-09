import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAppSelector } from "../app/selectors";
import TokenDisplayItem from "../components/TokenDisplayItem";
import "./WalletHome.css";

const WalletHome: FunctionComponent = () => {
  const navigate = useNavigate();
  const app = useSelector(getAppSelector);

  const [lyrbns, setLyrbns] = useState(0);
  const [usdt, setUsdt] = useState(0);

  const [nftcnt, setNftcnt] = useState(0);
  const [totcnt, setTotcnt] = useState(0);
  const [sellcnt, setSellcnt] = useState(0);
  const [bidcnt, setBidcnt] = useState(0);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

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
    const netid = app.network ?? process.env.REACT_APP_NETWORK_ID;
    if (app.wallet?.accountId === undefined) return;

    const url = `https://${netid}.lyra.live/api/Node/GetLastBlock?AccountId=${app.wallet.accountId}`;
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

  const onSwapButtonClick = useCallback(() => {
    navigate("/market");
  }, [navigate]);

  return (
    <div className="wallethome">
      <div className="wallet-card">
        <div className="wallet-card-inner">
          <div className="rectangle-wrapper">
            <div className="rectangle" />
          </div>
        </div>
        <div className="frame-parent">
          <div className="balance-display-zone-parent">
            <Link className="balance-display-zone" to="/openwallet">
              <button className="wallet-name-label">{app.name}</button>
              <div className="balance-display-zone-child" />
              <b className="usdtbalance">{lyrbns}</b>
              <b className="lyrlabel">LYR</b>
              <div className="balance-display-zone-item" />
              <b className="usdtbalance">{usdt}</b>
              <b className="lyrlabel">USDT</b>
            </Link>
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
          <div className="token-lists">
            <button className="go-nft-button">
              <div className="nft-count">{nftcnt}</div>
              <b className="nft-label">NFT</b>
            </button>
            <button className="go-nft-button">
              <div className="tot-count">{totcnt}</div>
              <b className="nft-label">TOT</b>
            </button>
            <button className="go-nft-button">
              <div className="tot-count">{sellcnt}</div>
              <b className="nft-label">Selling</b>
            </button>
            <button className="go-nft-button">
              <div className="tot-count">{bidcnt}</div>
              <b className="nft-label">Buying</b>
            </button>
          </div>
        </div>
      </div>
      <div className="iconssection-wrapper">
        <div className="iconssection">
          <div className="swap-button-parent">
            <button className="swap-button" onClick={onSwapButtonClick}>
              <img
                className="home-icon-interlocution"
                alt=""
                src="../asserts/home--icon--interlocution.svg"
              />
              <div className="ranking">Market</div>
            </button>
            <button className="swap-button">
              <img
                className="home-icon-interlocution"
                alt=""
                src="../asserts/home--icon--interlocution1.svg"
              />
              <div className="ranking">Swap</div>
            </button>
            <button className="swap-button">
              <img
                className="home-icon-interlocution"
                alt=""
                src="../asserts/home--icon--interlocution2.svg"
              />
              <div className="ranking">DEX</div>
            </button>
            <button className="swap-button">
              <img
                className="home-icon-interlocution"
                alt=""
                src="../asserts/home--icon--interlocution3.svg"
              />
              <div className="ranking">DAO</div>
            </button>
            <button className="swap-button">
              <img
                className="home-icon-interlocution"
                alt=""
                src="../asserts/home--icon--interlocution4.svg"
              />
              <div className="ranking">Staking</div>
            </button>
            <button className="swap-button">
              <img
                className="home-icon-interlocution"
                alt=""
                src="../asserts/home--icon--interlocution5.svg"
              />
              <div className="ranking">Mint</div>
            </button>
          </div>
        </div>
      </div>
      <div className="tradableorderssection">
        <div className="catalogtab">
          <div className="token-parent">
            <b className="token">Token</b>
            <div className="ellipse-parent">
              <img
                className="group-child"
                alt=""
                src="../asserts/ellipse-43.svg"
              />
              <div className="div">18</div>
            </div>
          </div>
          <div className="nft-parent">
            <b className="token">NFT</b>
            <div className="ellipse-parent">
              <img
                className="group-child"
                alt=""
                src="../asserts/ellipse-43.svg"
              />
              <div className="div">18</div>
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
      </div>
      <div className="coinlisting">
        <TokenDisplayItem
          coinIcon="../asserts/lyralogoblackicon@2x.png"
          coinName="Lyra Coin"
          amountText="1,234,525 LYR"
          amountWorth="$2,183"
        />
        <div className="tokendisplayitem">
          <div className="frame-group">
            <div className="lyralogoblueicon-parent">
              <img
                className="lyralogoblueicon"
                alt=""
                src="../asserts/lyralogoblueicon@2x.png"
              />
              <b className="custom-coin">Custom Coin</b>
              <div className="cus-parent">
                <b className="cus">1,234,525 CUS</b>
                <b className="b">$2,183</b>
              </div>
            </div>
            <div className="frame-child" />
          </div>
        </div>
        <TokenDisplayItem
          coinIcon="../asserts/logosbitcoin.svg"
          coinName="BitCoin"
          amountText="1.2345 BTC"
          amountWorth="$20,183"
          lyraLogoBlackIconObjectFit="unset"
        />
        <TokenDisplayItem
          coinIcon="../asserts/mask-group@2x.png"
          coinName="T-Shirt Blue"
          amountText="3 Items"
          amountWorth="$20,183"
        />
      </div>
    </div>
  );
};

export default WalletHome;
