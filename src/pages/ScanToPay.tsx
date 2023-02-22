import { FunctionComponent, useCallback } from "react";
import { useSelector } from "react-redux";
import { getAuthSelector } from "../app/selectors";
import "./ScanToPay.css";
import { ToastContainer, toast } from "react-toastify";
import QRCode from "react-qr-code";
import PrimaryAccountCard from "../components/PrimaryAccountCard";

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
      <PrimaryAccountCard />
      <div className="scan-to-pay">Scan to pay me</div>
      {/* <img className="image-1-icon" alt="" src="../asserts/qrimg@2x.png" /> */}
      <QRCode value={auth.accountId!} />
      <div className="scan-to-pay">My address is:</div>
      <button className="prepare-sell-order-button13" onClick={onCopyAddress}>
        {auth.accountId}
      </button>
      <button className="prepare-sell-order-button18" onClick={onScan}>
        <div className="primary-button7">Scan to pay</div>
      </button>
    </div>
  );
};

export default ScanToPay;
