import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import Footer from "../components/Footer";
import "./ScanToPay.css";

const ScanToPay: FunctionComponent = () => {
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
    <div className="scantopay">
      <TopNavigationBar
        title="My Wallet Address"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className="scan-to-pay-me-parent">
        <div className="scan-to-pay">Scan to pay me</div>
        <img className="image-1-icon" alt="" src="../qrimg@2x.png" />
        <div className="scan-to-pay">My address is:</div>
        <button className="lv3nd5bii1ahj7x5axdq2oradop1cd">
          LV3nD5Bii1aHj7x5AXDq2oraDoP1cd9UF5p7uuqHYFnC1tfUX4mtWXa98uYYxZ3pf7aCTdvvqiNpop1WsakaooQzFjCMhc
        </button>
        <button className="prepare-sell-order-button">
          <div className="primary-button">Scan to pay</div>
        </button>
      </div>
      <Footer
        iconImageUrl="../box-alt-light.svg"
        moleculeImageUrl="../molecule-light.svg"
        walletImageUrl="../wallet-light.svg"
        userImageUrl="../user-alt-light.svg"
        propColor="#434343"
        propColor1="#0ebd8d"
        propColor2="#434343"
      />
    </div>
  );
};

export default ScanToPay;
