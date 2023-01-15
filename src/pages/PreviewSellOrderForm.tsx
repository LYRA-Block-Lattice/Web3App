import { FunctionComponent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./PreviewSellOrderForm.css";
import { WALLET_CREATE_ORDER } from "../app/actionTypes";
import { getAppSelector } from "../app/selectors";

const PreviewSellOrderForm: FunctionComponent = () => {
  const dispatch = useDispatch();
  const app = useSelector(getAppSelector);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});

  const data = decodeURIComponent(searchParams.get("data")!);
  const obj = JSON.parse(data);
  console.log("order is", obj);

  const onPrepareSellOrderButtonClick = useCallback(() => {
    dispatch({
      type: WALLET_CREATE_ORDER,
      payload: {
        accountId: app.wallet.accountId,
        order: obj
      }
    });
    // window.rrProxy.ReactRazor.Pages.Home.Interop.CreateOrderAsync(
    //   window.rrComponent,
    //   data
    // ).then(function (response: any) {
    //   var ret = JSON.parse(response);
    //   if (ret.ret == "Success") {
    //     navigate("/createordersuccessform?tx=" + ret.txhash);
    //   } else {
    //     window.rrProxy.ReactRazor.Pages.Home.Interop.AlertAsync(
    //       window.rrComponent,
    //       "Warning",
    //       ret.msg
    //     );
    //   }
    // });
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
      <div className="nft-name">
        <div className="token-name">Token Name</div>
      </div>
      <div className="im-selling">Buyer will pay me by:</div>
      <div className="nft-name">
        <div className="token-name">Token Name</div>
      </div>
      <div className="im-selling">Price, amount, and I’ll get:</div>
      <div className="nft-name-parent">
        <div className="nft-name2">
          <div className="price">Price</div>
        </div>
        <div className="x">X</div>
        <div className="nft-name2">
          <div className="price">Amount</div>
        </div>
        <div className="x">=</div>
        <div className="nft-name2">
          <div className="price">Total</div>
        </div>
      </div>
      <div className="im-selling">
        I’ll share the trade secret of bellow with buyer:
      </div>
      <div className="tot-description">
        <div className="please-pay-to-container">
          <p className="please-pay-to">Please pay to my bank account number:</p>
          <p className="please-pay-to">&nbsp;</p>
          <p className="please-pay-to">Bank of America</p>
          <p className="p">1234 1234 1234 1234</p>
        </div>
      </div>
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
        className="prepare-sell-order-button"
        onClick={onPrepareSellOrderButtonClick}
      >
        <div className="primary-button">Place Order</div>
      </button>
    </div>
  );
};

export default PreviewSellOrderForm;
