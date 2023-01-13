import { FunctionComponent, useCallback } from "react";
import { useSelector } from "react-redux";
import { getAuthSelector } from "../app/selectors";
import "./ScanToPay.css";
import { ToastContainer, toast } from "react-toastify";
import QRCode from "react-qr-code";

const ScanToPay: FunctionComponent = () => {
  const auth = useSelector(getAuthSelector);

  const onScan = useCallback(() => {
    // Please sync "SelectTokenForOrder" to the project
  }, []);

  const onCopyAddress = useCallback(() => {
    // copy auth.accountId to clipboard
    navigator.clipboard.writeText(auth.accountId!);
    toast.success("Address copied to clipboard");
  }, [auth]);

  return (
    <div className="scantopay">
      <div className="scan-to-pay">Scan to pay me</div>
      {/* <img className="image-1-icon" alt="" src="../asserts/qrimg@2x.png" /> */}
      <QRCode value={auth.accountId!} />
      <div className="scan-to-pay">My address is:</div>
      <button
        className="lv3nd5bii1ahj7x5axdq2oradop1cd"
        onClick={onCopyAddress}
      >
        {auth.accountId}
      </button>
      <button className="prepare-sell-order-button" onClick={onScan}>
        <div className="primary-button">Scan to pay</div>
      </button>
    </div>
  );
};

export default ScanToPay;
