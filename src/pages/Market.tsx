import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import WalletCard from "../components/WalletCard";
import EntryButton from "../components/EntryButton";
import TxInfoBar from "../components/TxInfoBar";
import "./Market.css";

const Market: FunctionComponent = () => {
  const navigate = useNavigate();

  const onWalletNameLabelClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onNFTCountClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onTOTCountClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onOrdersCountClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/viewordersform");
  }, [navigate]);

  const onTradesCountClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onQRCodeButtonRoundClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onQRCodeButtonContainerClick = useCallback(() => {
    navigate("/redir");
  }, [navigate]);

  const onMoreClick = useCallback(() => {
    navigate("/transactionhistory");
  }, [navigate]);

  return (
    <div className="market">
      <div className="bannersection">
        <div className="walletcard">
          <div className="mask-group">
            <WalletCard />
            <button
              className="wallet-name-label"
              onClick={onWalletNameLabelClick}
            >
              My Primary Account
            </button>
            <div className="basebalance">
              <span>
                <b>120,000</b>
                <span className="span">
                  <span className="span1">{` `}</span>
                </span>
              </span>
              <span className="span">
                <span>LYR</span>
              </span>
            </div>
            <div className="aux-balance">
              <span>
                <span className="span2">500</span>
                <span>{`          `}</span>
              </span>
              <span className="span">USDT</span>
            </div>
            <div className="token-lists">
              <div className="group-div9">
                <b className="nft-label">NFT</b>
                <button className="nft-count" onClick={onNFTCountClick}>
                  12
                </button>
              </div>
              <div className="group-div10">
                <b className="nft-label">TOT</b>
                <button className="tot-count" onClick={onTOTCountClick}>
                  3
                </button>
              </div>
              <button className="group-button" onClick={onGroupButtonClick}>
                <b className="orders-label">Selling</b>
                <button className="orders-count" onClick={onOrdersCountClick}>
                  0
                </button>
              </button>
              <div className="group-div11">
                <b className="nft-label">Buying</b>
                <button className="trades-count" onClick={onTradesCountClick}>
                  0
                </button>
              </div>
            </div>
            <div
              className="qrcode-button"
              onClick={onQRCodeButtonContainerClick}
            >
              <div
                className="qrcode-button-round"
                onClick={onQRCodeButtonRoundClick}
              />
              <img
                className="qrcode-icon"
                alt=""
                src="../asserts/qrcode-icon.svg"
              />
            </div>
            <div className="wallet-decoration">LYRA WALLET</div>
            <div className="rectangle5" />
            <div className="rectangle6" />
          </div>
        </div>
      </div>
      <div className="iconssection">
        <div className="frame-div5">
          <EntryButton
            homeIconInterlocution="../asserts/home--icon--interlocution.svg"
            ranking="DAO"
          />
          <EntryButton
            homeIconInterlocution="../asserts/home--icon--interlocution1.svg"
            ranking="OTC"
          />
          <EntryButton
            homeIconInterlocution="../asserts/home--icon--interlocution2.svg"
            ranking="Invest"
          />
          <EntryButton
            homeIconInterlocution="../asserts/home--icon--interlocution3.svg"
            ranking="Swap"
          />
          <EntryButton
            homeIconInterlocution="../asserts/home--icon--interlocution4.svg"
            ranking="DEX"
          />
          <EntryButton
            homeIconInterlocution="../asserts/home--icon--interlocution5.svg"
            ranking="NFT"
          />
          <EntryButton
            homeIconInterlocution="../asserts/home--icon--interlocution6.svg"
            ranking="Mint"
          />
          <EntryButton
            homeIconInterlocution="../asserts/home--icon--interlocution7.svg"
            ranking="Staking"
          />
        </div>
      </div>
      <div className="lasttransactions">
        <div className="recent-transaction">Recent transaction</div>
        <div className="frame-div6">
          <TxInfoBar
            buyTVAtSonyStore="Receive"
            component="From Harry James"
            component1="+ 1000 LYR"
            path="../asserts/path3.svg"
          />
          <TxInfoBar
            componentZIndex="1"
            buyTVAtSonyStore="Send"
            component="From USD wallet"
            component1="- 100 LYR"
            componentColor="#d15252"
            componentFontWeight="600"
            path="../asserts/path4.svg"
          />
          <div className="div11">10 Min ago</div>
          <div className="div12">10 Min ago</div>
        </div>
        <button className="more" onClick={onMoreClick}>
          More
        </button>
      </div>
      <div className="dealsection">
        <div className="rectangle7" />
        <b className="yellow-sofa">Yellow sofa</b>
        <div className="div13">{`$600 `}</div>
        <div className="group-div12">
          <div className="div14">$1.200</div>
          <img
            className="iconglyphstar-copy-23"
            alt=""
            src="../asserts/iconglyphstar-copy-23.svg"
          />
        </div>
        <div className="div15">4.8</div>
        <div className="div16">(849)</div>
        <img
          className="iconglyphstar3"
          alt=""
          src="../asserts/iconglyphstar3.svg"
        />
        <div className="end-in-12001">End in 1:20:01</div>
        <img
          className="iconglyphstar-copy3"
          alt=""
          src="../asserts/iconglyphstar-copy3.svg"
        />
        <div className="group-div13">
          <img className="path-5-icon" alt="" src="../asserts/path-5.svg" />
          <div className="rectangle8" />
          <div className="div17">New</div>
        </div>
        <div className="rectangle9" />
        <b className="blue-sofa">Blue sofa</b>
        <div className="div18">{`$750 `}</div>
        <div className="group-div14">
          <div className="div19">$1.500</div>
          <img
            className="iconglyphstar-copy-23"
            alt=""
            src="../asserts/iconglyphstar-copy-24.svg"
          />
        </div>
        <div className="div20">4.8</div>
        <div className="div21">(849)</div>
        <img
          className="iconglyphstar4"
          alt=""
          src="../asserts/iconglyphstar4.svg"
        />
        <div className="end-in-120011">End in 1:20:01</div>
        <img
          className="iconglyphstar-copy4"
          alt=""
          src="../asserts/iconglyphstar-copy4.svg"
        />
        <div className="group-div15">
          <img className="path-5-icon" alt="" src="../asserts/path-51.svg" />
          <div className="rectangle8" />
          <div className="div17">New</div>
        </div>
        <b className="deal-of-the-day">Deal of the day</b>
        <b className="see-all">See all</b>
        <img className="frame-icon" alt="" src="../asserts/frame.svg" />
        <img className="frame-icon1" alt="" src="../asserts/frame1.svg" />
      </div>
    </div>
  );
};

export default Market;
