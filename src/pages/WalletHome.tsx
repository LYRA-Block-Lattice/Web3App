import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PrimaryAccountContainer from "../components/PrimaryAccountContainer";
import WalletToolBar from "../components/WalletToolBar";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./WalletHome.css";

const WalletHome: FunctionComponent = () => {
  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onContextMenuButtonClick = useCallback(() => {
    //TODO: context menu
  }, []);

  return (
    <div className="wallethome">
      <TopNavigationBar
        title="My Wallet"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className="wallet-card-parent">
        <PrimaryAccountContainer />
        <WalletToolBar />
        <div className="coinlisting">
          <div className="catalogtab1">
            <div className="token-container">
              <b className="token1">Token</b>
            </div>
            <div className="nft-container">
              <b className="token1">NFT</b>
            </div>
            <div className="nft-container">
              <b className="token1">Fiat</b>
            </div>
            <div className="nft-container">
              <b className="token1">Goods</b>
            </div>
            <div className="nft-container">
              <b className="token1">Service</b>
            </div>
          </div>
          <div className="tokendisplayitem">
            <img
              className="lyralogoblackicon"
              alt=""
              src="../asserts/lyralogoblackicon@2x.png"
            />
            <div className="frame-container">
              <div className="lyra-coin-parent">
                <b className="lyra-coin">Lyra Coin</b>
                <div className="lyr-parent">
                  <b className="lyr">1,234,525 LYR</b>
                  <b className="b2">$2,183</b>
                </div>
              </div>
              <div className="frame-child" />
            </div>
          </div>
          <div className="tokendisplayitem1">
            <div className="frame-container">
              <div className="lyra-coin-parent">
                <img
                  className="lyralogoblackicon"
                  alt=""
                  src="../asserts/lyralogoblueicon4@2x.png"
                />
                <b className="lyra-coin">Custom Coin</b>
                <div className="lyr-parent">
                  <b className="lyr">1,234,525 CUS</b>
                  <b className="b2">$2,183</b>
                </div>
              </div>
              <div className="frame-child" />
            </div>
          </div>
          <div className="tokendisplayitem2">
            <img
              className="logosbitcoin-icon"
              alt=""
              src="../asserts/logosbitcoin.svg"
            />
            <div className="frame-container">
              <div className="lyra-coin-parent">
                <b className="lyra-coin">BitCoin</b>
                <div className="lyr-parent">
                  <b className="lyr">1.2345 BTC</b>
                  <b className="b2">$20,183</b>
                </div>
              </div>
              <div className="frame-child" />
            </div>
          </div>
          <div className="tokendisplayitem2">
            <img
              className="lyralogoblackicon"
              alt=""
              src="../asserts/mask-group@2x.png"
            />
            <div className="frame-container">
              <div className="lyra-coin-parent">
                <b className="lyra-coin">T-Shirt Blue</b>
                <div className="lyr-parent">
                  <b className="lyr">3 Items</b>
                  <b className="b2">$20,183</b>
                </div>
              </div>
              <div className="frame-child" />
            </div>
          </div>
        </div>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default WalletHome;
