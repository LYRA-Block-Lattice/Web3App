import { FunctionComponent, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import SellItem from "../components/SellItem";
import "./Market1.css";

const Market1: FunctionComponent = () => {
  const navigate = useNavigate();

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
    <div className="market1">
      <div className="bannersection">
        <div className="walletcard">
          <div className="mask-group">
            <div className="maps-parent">
              <img className="maps-icon" alt="" src="../asserts/maps.svg" />
              <a className="balance-display-zone2">
                <b className="usdtbalance3">1,025,000</b>
                <b className="lyrlabel2">LYR</b>
                <div className="balance-display-zone-child1" />
                <b className="usdtbalance3">5,000</b>
                <b className="lyrlabel2">USDT</b>
              </a>
              <div className="token-lists1">
                <button className="go-nft-button1" onClick={onGoNFTButtonClick}>
                  <div className="nft-count1" onClick={onNFTCountTextClick}>
                    12
                  </div>
                  <b className="nft-label1">NFT</b>
                </button>
                <button className="go-nft-button1" onClick={onGoTOTButtonClick}>
                  <div className="tot-count1" onClick={onTOTCountTextClick}>
                    3
                  </div>
                  <b className="nft-label1">TOT</b>
                </button>
                <button
                  className="go-nft-button1"
                  onClick={onGoSellingButtonClick}
                >
                  <div className="tot-count1" onClick={onSellingCountTextClick}>
                    0
                  </div>
                  <b className="nft-label1">Selling</b>
                </button>
                <button
                  className="go-nft-button1"
                  onClick={onGoBuyingButtonClick}
                >
                  <div className="tot-count1" onClick={onBuyingCountTextClick}>
                    0
                  </div>
                  <b className="nft-label1">Buying</b>
                </button>
              </div>
            </div>
            <button
              className="wallet-name-label2"
              onClick={onWalletNameLabelClick}
            >
              My Primary Account
            </button>
            <button className="qrcode-button2" onClick={onQRCodeButtonClick}>
              <div
                className="qrcode-button-round2"
                onClick={onQRCodeButtonRoundClick}
              />
              <img
                className="qrcode-icon2"
                alt=""
                src="../asserts/qrcode-icon2.svg"
              />
            </button>
            <div className="wallet-decoration">LYRA WALLET</div>
            <div className="rectangle2" />
            <div className="rectangle3" />
          </div>
        </div>
      </div>
      <div className="iconssection1">
        <div className="dao-button-parent">
          <button className="invest-button" onClick={onDaoButtonClick}>
            <img
              className="home-icon-interlocution6"
              alt=""
              src="../asserts/home--icon--interlocution6.svg"
            />
            <div className="ranking6">DAO</div>
          </button>
          <button className="invest-button" onClick={onSwapButtonClick}>
            <img
              className="home-icon-interlocution6"
              alt=""
              src="../asserts/home--icon--interlocution7.svg"
            />
            <div className="ranking6">OTC</div>
          </button>
          <button className="invest-button" onClick={onInvestButtonClick}>
            <img
              className="home-icon-interlocution6"
              alt=""
              src="../asserts/home--icon--interlocution8.svg"
            />
            <div className="ranking6">Invest</div>
          </button>
          <button className="invest-button" onClick={onSwapButton1Click}>
            <img
              className="home-icon-interlocution6"
              alt=""
              src="../asserts/home--icon--interlocution9.svg"
            />
            <div className="ranking6">Swap</div>
          </button>
        </div>
      </div>
      <div className="iconssection2">
        <div className="dex-button-parent">
          <button className="invest-button">
            <img
              className="home-icon-interlocution6"
              alt=""
              src="../asserts/home--icon--interlocution10.svg"
            />
            <div className="ranking6">DEX</div>
          </button>
          <button className="invest-button">
            <img
              className="home-icon-interlocution6"
              alt=""
              src="../asserts/home--icon--interlocution11.svg"
            />
            <div className="ranking6">NFT</div>
          </button>
          <button className="invest-button">
            <img
              className="home-icon-interlocution6"
              alt=""
              src="../asserts/home--icon--interlocution12.svg"
            />
            <div className="ranking6">Mint</div>
          </button>
          <button className="invest-button">
            <img
              className="home-icon-interlocution6"
              alt=""
              src="../asserts/home--icon--interlocution13.svg"
            />
            <div className="ranking6">Staking</div>
          </button>
        </div>
      </div>
      <div className="tradableorderssection2">
        <div className="catalogtab2">
          <div className="token-container">
            <b className="token2">Token</b>
            <div className="ellipse-parent1">
              <img
                className="group-child1"
                alt=""
                src="../asserts/ellipse-43.svg"
              />
              <div className="div13">18</div>
            </div>
          </div>
          <div className="nft-container">
            <b className="token2">NFT</b>
            <div className="ellipse-parent1">
              <img
                className="group-child1"
                alt=""
                src="../asserts/ellipse-43.svg"
              />
              <div className="div13">18</div>
            </div>
          </div>
          <div className="fiat-frame">
            <b className="fiat2">Fiat</b>
          </div>
          <div className="fiat-frame">
            <b className="fiat2">Goods</b>
          </div>
          <div className="fiat-frame">
            <b className="fiat2">Service</b>
          </div>
        </div>
        <SellItem
          offering="BTC"
          biding="tether/USDT"
          orderStatus="Open"
          price="10,323"
          amount="1113.2"
          limitMin="3.2"
          limitMax="3.2"
          daoName="The First DAO"
          tradeCount="1024 Trades"
          iconSell="../asserts/icbaselinegeneratingtokens4.svg"
          iconToGet="carbonuserservicedesk4.svg"
        />
        <div className="ordercard2">
          <div className="order-brief-section2">
            <button className="banner-image2">
              <div className="order-banner2">
                <div className="order-image2">
                  <img
                    className="icbaseline-generating-tokens-icon2"
                    alt=""
                    src="../asserts/icbaselinegeneratingtokens7.svg"
                  />
                  <img
                    className="order-image-inner"
                    alt=""
                    src="../asserts/arrow-1.svg"
                  />
                  <img
                    className="icbaseline-generating-tokens-icon2"
                    alt=""
                    src="../asserts/carbonuserservicedesk7.svg"
                  />
                </div>
                <div className="order-status2">
                  <b className="open2">Open</b>
                </div>
              </div>
            </button>
            <Link className="title-section2" to="/assertdetailview">
              <div className="sell-container">
                <b className="sell3">Sell</b>
                <b className="sell3">BTC</b>
                <img
                  className="arrow-icon"
                  alt=""
                  src="../asserts/arrow-2.svg"
                />
                <b className="tetherusdt3">tether/USDT</b>
              </div>
              <div className="details-section2">
                <div className="block32">
                  <div className="sell3">Amount</div>
                  <div className="sell3">Limit Min</div>
                  <div className="sell3">Limit Max</div>
                </div>
                <div className="block42">
                  <div className="sell3">1113.2</div>
                  <div className="sell3">1.2</div>
                  <div className="sell3">3.2</div>
                </div>
                <div className="block12">
                  <div className="price2">Price</div>
                </div>
                <div className="block22">
                  <b className="sell3">10,323</b>
                </div>
                <div className="details-section-inner" />
              </div>
            </Link>
          </div>
          <div className="trades-section2">
            <div className="width-controller2" />
          </div>
          <div className="userprofilesection2">
            <img
              className="userprofilesection-inner"
              alt=""
              src="../asserts/ellipse-1@2x.png"
            />
            <div className="a-big-seller-container">
              <b className="sell3">A big seller</b>
              <div className="the-first-dao2">The First DAO</div>
            </div>
            <div className="container">
              <b className="sell3">98%</b>
              <div className="the-first-dao2">1024 Trades</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market1;
