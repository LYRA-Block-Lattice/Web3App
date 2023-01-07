import { FunctionComponent, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import SellItem from "../components/SellItem";
import "./Market.css";

const Market: FunctionComponent = () => {
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
    <div className="market">
      <div className="bannersection">
        <div className="walletcard">
          <div className="mask-group">
            <div className="maps-parent">
              <img className="maps-icon" alt="" src="../asserts/maps.svg" />
              <a className="balance-display-zone">
                <b className="usdtbalance">1,025,000</b>
                <b className="lyrlabel">LYR</b>
                <div className="balance-display-zone-child" />
                <b className="usdtbalance">5,000</b>
                <b className="lyrlabel">USDT</b>
              </a>
              <div className="token-lists">
                <button className="go-nft-button" onClick={onGoNFTButtonClick}>
                  <div className="nft-count" onClick={onNFTCountTextClick}>
                    12
                  </div>
                  <b className="nft-label">NFT</b>
                </button>
                <button className="go-nft-button" onClick={onGoTOTButtonClick}>
                  <div className="tot-count" onClick={onTOTCountTextClick}>
                    3
                  </div>
                  <b className="nft-label">TOT</b>
                </button>
                <button
                  className="go-nft-button"
                  onClick={onGoSellingButtonClick}
                >
                  <div className="tot-count" onClick={onSellingCountTextClick}>
                    0
                  </div>
                  <b className="nft-label">Selling</b>
                </button>
                <button
                  className="go-nft-button"
                  onClick={onGoBuyingButtonClick}
                >
                  <div className="tot-count" onClick={onBuyingCountTextClick}>
                    0
                  </div>
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
          iconToGet="../asserts/carbonuserservicedesk4.svg"
        />
        <div className="ordercard">
          <div className="order-brief-section">
            <button className="banner-image">
              <div className="order-banner">
                <div className="order-image">
                  <img
                    className="icbaseline-generating-tokens-icon"
                    alt=""
                    src="../asserts/icbaselinegeneratingtokens5.svg"
                  />
                  <img
                    className="order-image-child"
                    alt=""
                    src="../asserts/arrow-12.svg"
                  />
                  <img
                    className="icbaseline-generating-tokens-icon"
                    alt=""
                    src="../asserts/carbonuserservicedesk5.svg"
                  />
                </div>
                <div className="order-status">
                  <b className="open">Open</b>
                </div>
              </div>
            </button>
            <Link className="title-section" to="/assertdetailview">
              <div className="sell-parent">
                <b className="btc">Sell</b>
                <b className="btc">BTC</b>
                <img
                  className="frame-child"
                  alt=""
                  src="../asserts/arrow-22.svg"
                />
                <b className="tetherusdt1">tether/USDT</b>
              </div>
              <div className="details-section">
                <div className="block3">
                  <div className="btc">Amount</div>
                  <div className="btc">Limit Min</div>
                  <div className="btc">Limit Max</div>
                </div>
                <div className="block4">
                  <div className="btc">1113.2</div>
                  <div className="btc">1.2</div>
                  <div className="btc">3.2</div>
                </div>
                <div className="block1">
                  <div className="price">Price</div>
                </div>
                <div className="block2">
                  <b className="btc">10,323</b>
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
              <b className="btc">A big seller</b>
              <div className="the-first-dao">The First DAO</div>
            </div>
            <div className="parent">
              <b className="btc">98%</b>
              <div className="the-first-dao">1024 Trades</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
