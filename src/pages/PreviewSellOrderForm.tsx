import { FunctionComponent, useCallback } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./PreviewSellOrderForm.css";

const PreviewSellOrderForm: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrepareSellOrderButtonClick = useCallback(() => {
    navigate("/createordersuccessform");
  }, [navigate]);

  return (
    <div className="previewsellorderform">
      <div className="preview-sell-order">Preview Sell Order</div>
      <div className="im-selling">I’m selling:</div>
      <div className="nft-name">
        <div className="token-name1">Token Name</div>
      </div>
      <div className="im-selling">Buyer will pay me by:</div>
      <div className="nft-name">
        <div className="token-name1">Token Name</div>
      </div>
      <div className="im-selling">Price, amount, and I’ll get:</div>
      <div className="nft-name-parent">
        <div className="nft-name2">
          <div className="amount">Price</div>
        </div>
        <div className="x">X</div>
        <div className="nft-name2">
          <div className="amount">Amount</div>
        </div>
        <div className="x">=</div>
        <div className="nft-name2">
          <div className="amount">Total</div>
        </div>
      </div>
      <div className="im-selling">
        I’ll share the trade secret of bellow with buyer:
      </div>
      <div className="tot-description1">
        <div className="please-pay-to-container">
          <p className="please-pay-to">Please pay to my bank account number:</p>
          <p className="please-pay-to">&nbsp;</p>
          <p className="please-pay-to">Bank of America</p>
          <p className="p">1234 1234 1234 1234</p>
        </div>
      </div>
      <div className="im-selling">The trade will be protected by:</div>
      <div className="nft-name">
        <div className="lyr-worth-10000">1,000,000 LYR, worth $10,000</div>
      </div>
      <FormControlLabel
        className="confirm-before-create-order"
        label="I agree to the term of service of Lyra Web3 eCommerce platform."
        labelPlacement="end"
        control={
          <Checkbox color="primary" defaultChecked required size="medium" />
        }
      />
      <button
        className="prepare-sell-order-button13"
        onClick={onPrepareSellOrderButtonClick}
      >
        <div className="primary-button2">Place Order</div>
      </button>
    </div>
  );
};

export default PreviewSellOrderForm;
