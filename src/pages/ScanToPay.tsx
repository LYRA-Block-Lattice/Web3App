import { FunctionComponent, useCallback } from "react";
import "./ScanToPay.css";

const ScanToPay: FunctionComponent = () => {
  const onPrepareSellOrderButtonClick = useCallback(() => {
    // Please sync "SelectTokenForOrder" to the project
  }, []);

  return (
    <div className="scantopay">
      <div className="scan-to-pay">Scan to pay me</div>
      <img className="image-1-icon" alt="" src="../asserts/qrimg@2x.png" />
      <div className="scan-to-pay">My address is:</div>
      <button className="lv3nd5bii1ahj7x5axdq2oradop1cd">
        LV3nD5Bii1aHj7x5AXDq2oraDoP1cd9UF5p7uuqHYFnC1tfUX4mtWXa98uYYxZ3pf7aCTdvvqiNpop1WsakaooQzFjCMhc
      </button>
      <button
        className="prepare-sell-order-button18"
        onClick={onPrepareSellOrderButtonClick}
      >
        <div className="primary-button7">Scan to pay</div>
      </button>
    </div>
  );
};

export default ScanToPay;
