import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PrimaryButton from "../components/PrimaryButton";
import BottomNavigationBar from "../components/BottomNavigationBar";
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
        <img className="image-1-icon" alt="" src="../asserts/qrimg@2x.png" />
        <div className="scan-to-pay">My address is:</div>
        <button className="lv3nd5bii1ahj7x5axdq2oradop1cd">
          LV3nD5Bii1aHj7x5AXDq2oraDoP1cd9UF5p7uuqHYFnC1tfUX4mtWXa98uYYxZ3pf7aCTdvvqiNpop1WsakaooQzFjCMhc
        </button>
        <PrimaryButton primaryButton="Scan to pay" />
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default ScanToPay;
