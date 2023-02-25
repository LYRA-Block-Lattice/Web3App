import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PrimaryAccountContainer from "../components/PrimaryAccountContainer";
import WalletToolBar from "../components/WalletToolBar";
import CatalogTab from "../components/CatalogTab";
import TokenDisplayItem from "../components/TokenDisplayItem";
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

  const onFrameButtonClick = useCallback(() => {
    //TODO: sel token
  }, []);

  const onFrameButton1Click = useCallback(() => {
    //TODO: sel nft
  }, []);

  const onFrameButton2Click = useCallback(() => {
    //TODO: sel fiat
  }, []);

  const onFrameButton3Click = useCallback(() => {
    //TODO: sel goods
  }, []);

  const onFrameButton4Click = useCallback(() => {
    //TODO: sel services
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
          <CatalogTab
            onFrameButtonClick={onFrameButtonClick}
            onFrameButton1Click={onFrameButton1Click}
            onFrameButton2Click={onFrameButton2Click}
            onFrameButton3Click={onFrameButton3Click}
            onFrameButton4Click={onFrameButton4Click}
          />
          <TokenDisplayItem
            tokenIcon="../asserts/lyralogoblackicon@2x.png"
            tokenName="Lyra Coin"
            tokenAmount="1,234,525 LYR"
            tokenDollar="$2,183"
          />
          <div className="tokendisplayitem">
            <div className="frame-container">
              <div className="lyralogoblueicon-parent">
                <img
                  className="lyralogoblueicon"
                  alt=""
                  src="../asserts/lyralogoblueicon4@2x.png"
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
            tokenIcon="../asserts/logosbitcoin.svg"
            tokenName="BitCoin"
            tokenAmount="1.2345 BTC"
            tokenDollar="$20,183"
            tokenDisplayItemBackgroundColor="unset"
            lyraLogoBlackIconObjectFit="unset"
          />
          <TokenDisplayItem
            tokenIcon="../asserts/mask-group@2x.png"
            tokenName="T-Shirt Blue"
            tokenAmount="3 Items"
            tokenDollar="$20,183"
            tokenDisplayItemBackgroundColor="unset"
          />
        </div>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default WalletHome;
