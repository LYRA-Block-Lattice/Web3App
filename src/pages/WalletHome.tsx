import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PrimaryAccountContainer from "../components/PrimaryAccountContainer";
import WalletToolBar from "../components/WalletToolBar";
import Footer from "../components/Footer";
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
          <div className="catalogtab">
            <div className="nft-wrapper">
              <b className="nft">NFT</b>
            </div>
            <div className="nft-wrapper">
              <b className="nft">Fiat</b>
            </div>
            <div className="nft-wrapper">
              <b className="nft">Goods</b>
            </div>
            <div className="nft-wrapper">
              <b className="nft">Service</b>
            </div>
            <div className="token-wrapper">
              <b className="nft">Token</b>
            </div>
          </div>
          <div className="tokendisplayitem">
            <img
              className="lyralogoblackicon"
              alt=""
              src="../lyralogoblackicon@2x.png"
            />
            <div className="frame-container">
              <div className="lyra-coin-parent">
                <b className="lyra-coin">Lyra Coin</b>
                <div className="lyr-parent">
                  <b className="lyr">1,234,525 LYR</b>
                  <b className="b">$2,183</b>
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
                  src="../lyralogoblueicon4@2x.png"
                />
                <b className="lyra-coin">Custom Coin</b>
                <div className="lyr-parent">
                  <b className="lyr">1,234,525 CUS</b>
                  <b className="b">$2,183</b>
                </div>
              </div>
              <div className="frame-child" />
            </div>
          </div>
          <div className="tokendisplayitem2">
            <img
              className="logosbitcoin-icon"
              alt=""
              src="../logosbitcoin.svg"
            />
            <div className="frame-container">
              <div className="lyra-coin-parent">
                <b className="lyra-coin">BitCoin</b>
                <div className="lyr-parent">
                  <b className="lyr">1.2345 BTC</b>
                  <b className="b">$20,183</b>
                </div>
              </div>
              <div className="frame-child" />
            </div>
          </div>
          <div className="tokendisplayitem2">
            <img
              className="lyralogoblackicon"
              alt=""
              src="../mask-group@2x.png"
            />
            <div className="frame-container">
              <div className="lyra-coin-parent">
                <b className="lyra-coin">T-Shirt Blue</b>
                <div className="lyr-parent">
                  <b className="lyr">3 Items</b>
                  <b className="b">$20,183</b>
                </div>
              </div>
              <div className="frame-child" />
            </div>
          </div>
        </div>
      </div>
      <Footer
        iconImageUrl="../box-alt-light.svg"
        moleculeImageUrl="../molecule-light.svg"
        walletImageUrl="../wallet-light.svg"
        userImageUrl="../user-alt-light.svg"
      />
    </div>
  );
};

export default WalletHome;
