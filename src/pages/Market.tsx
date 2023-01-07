import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    const url =
      "https://devnet.lyra.live/api/Node/GetLastBlock?AccountId=LUTPLGNAP4vTzXh5tWVCmxUBh8zjGTR8PKsfA8E67QohNsd1U6nXPk4Q9jpFKsKfULaaT3hs6YK7WKm57QL5oarx8mZdbM";
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
      <div className="bannersection">
        <div className="walletcard">
          <div className="mask-group">
            <div className="maps-parent">
              <img className="maps-icon" alt="" src="../asserts/maps.svg" />
              <a className="balance-display-zone">
                <b className="usdtbalance">{lyrbns}</b>
                <b className="lyrlabel">LYR</b>
                <div className="balance-display-zone-child" />
                <b className="usdtbalance">{usdt}</b>
                <b className="lyrlabel">USDT</b>
              </a>
              <div className="token-lists">
                <button className="go-nft-button" onClick={onGoNFTButtonClick}>
                  <div className="nft-count">{nftcnt}</div>
                  <b className="nft-label">NFT</b>
                </button>
                <button className="go-nft-button" onClick={onGoTOTButtonClick}>
                  <div className="tot-count">{totcnt}</div>
                  <b className="nft-label">TOT</b>
                </button>
                <button
                  className="go-nft-button"
                  onClick={onGoSellingButtonClick}
                >
                  <div className="tot-count">{sellcnt}</div>
                  <b className="nft-label">Selling</b>
                </button>
                <button
                  className="go-nft-button"
                  onClick={onGoBuyingButtonClick}
                >
                  <div className="tot-count">{bidcnt}</div>
                  <b className="nft-label">Buying</b>
                </button>
              </div>
            </div>
            <button
              className="wallet-name-label"
              onClick={onWalletNameLabelClick}
            >
              My Primary Account
            </button>
            <button className="qrcode-button" onClick={onQRCodeButtonClick}>
              <div
                className="qrcode-button-round"
                onClick={onQRCodeButtonRoundClick}
              />
              <img
                className="qrcode-icon"
                alt=""
                src="../asserts/qrcode-icon.svg"
              />
            </button>
            <div className="wallet-decoration">LYRA WALLET</div>
            <div className="rectangle" />
            <div className="rectangle1" />
          </div>
        </div>
      </div>
      <div className="iconssection">
        <div className="dao-button-parent">
          <button className="dao-button" onClick={onDaoButtonClick}>
            <img
              className="home-icon-interlocution"
              alt=""
              src="../asserts/home--icon--interlocution.svg"
            />
            <div className="ranking">DAO</div>
          </button>
          <button className="dao-button" onClick={onSwapButtonClick}>
            <img
              className="home-icon-interlocution"
              alt=""
              src="../asserts/home--icon--interlocution1.svg"
            />
            <div className="ranking">OTC</div>
          </button>
          <button className="dao-button" onClick={onInvestButtonClick}>
            <img
              className="home-icon-interlocution"
              alt=""
              src="../asserts/home--icon--interlocution2.svg"
            />
            <div className="ranking">Invest</div>
          </button>
          <button className="dao-button" onClick={onSwapButton1Click}>
            <img
              className="home-icon-interlocution"
              alt=""
              src="../asserts/home--icon--interlocution3.svg"
            />
            <div className="ranking">Swap</div>
          </button>
        </div>
      </div>
      <div className="iconssection1">
        <div className="dex-button-parent">
          <button className="dao-button">
            <img
              className="home-icon-interlocution"
              alt=""
              src="../asserts/home--icon--interlocution4.svg"
            />
            <div className="ranking">DEX</div>
          </button>
          <button className="dao-button">
            <img
              className="home-icon-interlocution"
              alt=""
              src="../asserts/home--icon--interlocution5.svg"
            />
            <div className="ranking">NFT</div>
          </button>
          <button className="dao-button">
            <img
              className="home-icon-interlocution"
              alt=""
              src="../asserts/home--icon--interlocution6.svg"
            />
            <div className="ranking">Mint</div>
          </button>
          <button className="dao-button">
            <img
              className="home-icon-interlocution"
              alt=""
              src="../asserts/home--icon--interlocution7.svg"
            />
            <div className="ranking">Staking</div>
          </button>
        </div>
      </div>
      <div className="catalogtab-parent">
        <div className="catalogtab">
          <div className="token-parent">
            <b className="token">Token</b>
            <div className="ellipse-parent">
              <img
                className="group-child"
                alt=""
                src="../asserts/ellipse-43.svg"
              />
              <div className="div3">18</div>
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
              <div className="div3">18</div>
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
      <div>
        <DisplaySellItems />
      </div>
    </div>
  );
};

export default Market;
