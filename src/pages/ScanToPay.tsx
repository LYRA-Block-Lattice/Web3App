import { FunctionComponent, useCallback } from "react";
import { useSelector } from "react-redux";
import { getAuthSelector } from "../app/selectors";
import TopNavigationBar from "../components/TopNavigationBar";
import BottomNavigationBar from "../components/BottomNavigationBar";
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
      <TopNavigationBar title="My Wallet Address" />
      <div className="scan-to-pay-me-parent">
        <div className="scan-to-pay">Scan to pay me</div>
        <QRCode value={auth.accountId!} />
        <div className="scan-to-pay">My address is:</div>
        <button
          className="lv3nd5bii1ahj7x5axdq2oradop1cd"
          onClick={onCopyAddress}
        >
          {auth.accountId}
        </button>
        <button className="buttons" onClick={onScan}>
          <div className="primary-button">Scan to pay</div>
        </button>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default ScanToPay;
