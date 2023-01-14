import { FunctionComponent, useCallback } from "react";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./PreviewSellOrderForm.css";

interface customWindow extends Window {
  rrComponent?: any;
  rrProxy?: any;
}
declare const window: customWindow;

const PreviewSellOrderForm: FunctionComponent = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});
  const data = decodeURIComponent(searchParams.get("data")!);
  const obj = JSON.parse(data);
  console.log("order is", obj);

  const onPrepareSellOrderButtonClick = useCallback(() => {
    window.rrProxy.ReactRazor.Pages.Home.Interop.CreateOrderAsync(
      window.rrComponent,
      data
    ).then(function (response: any) {
      var ret = JSON.parse(response);
      if (ret.ret == "Success") {
        navigate("/createordersuccessform?tx=" + ret.txhash);
      } else {
        window.rrProxy.ReactRazor.Pages.Home.Interop.AlertAsync(
          window.rrComponent,
          "Warning",
          ret.msg
        );
      }
    });
  }, [navigate]);

  function ShowTS(props: any) {
    if (obj.secret != undefined)
      return (
        <>
          <div>
            <p className="ill-send-trade">
              I’ll send trade secret to buyer privately as bellow:
            </p>
          </div>
          <textarea
            className="tot-description7"
            placeholder={`Please pay to my bank account number:

  Bank of America
  1234 1234 1234 1234`}
          />
        </>
      );
    else return <></>;
  }

  return (
    <div className="previewsellorderform">
      <div className="preview-sell-order">Preview Sell Order</div>
      <div className="im-selling">I’m selling:</div>
      <TextField
        className="nft-name"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Token Name"
        size="medium"
        margin="none"
        disabled
      />
      <div className="im-selling">Buyer will pay me by:</div>
      <TextField
        className="nft-name"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Token Name"
        size="medium"
        margin="none"
        disabled
      />
      <div className="im-selling">Price, amount, and I’ll get:</div>
      <div className="nft-name-parent">
        <TextField
          className="nft-name"
          color="primary"
          variant="outlined"
          type="number"
          label="Price"
          size="medium"
          margin="none"
          disabled
        />
        <div className="x">X</div>
        <TextField
          className="nft-name"
          color="primary"
          variant="outlined"
          type="number"
          label="Amount"
          size="medium"
          margin="none"
          disabled
        />
        <div className="x">=</div>
        <TextField
          className="nft-name"
          color="primary"
          variant="outlined"
          type="number"
          label="Total"
          size="medium"
          margin="none"
          disabled
        />
      </div>
      <div className="im-selling">
        I’ll share the trade secret of bellow with buyer:
      </div>
      <TextField
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        multiline
        label={`Please pay to my bank account number:

Bank of America
1234 1234 1234 1234`}
        margin="none"
        disabled
      />
      <div className="im-selling">The trade will be protected by:</div>
      <div className="nft-name5">
        <div className="x">1,000,000 LYR, worth $10,000</div>
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
        className="prepare-sell-order-button16"
        onClick={onPrepareSellOrderButtonClick}
      >
        <div className="primary-button2">Place Order</div>
      </button>
    </div>
  );
};

export default PreviewSellOrderForm;
