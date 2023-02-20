import { FunctionComponent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./PreviewSellOrderForm.css";
import { WALLET_CREATE_ORDER } from "../app/actionTypes";
import { getAppSelector, getAuthSelector } from "../app/selectors";
import PrimaryAccountCard from "../components/PrimaryAccountCard";

const PreviewSellOrderForm: FunctionComponent = () => {
  const dispatch = useDispatch();
  const app = useSelector(getAppSelector);
  const auth = useSelector(getAuthSelector);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});

  const data = decodeURIComponent(searchParams.get("data")!);
  const obj = JSON.parse(data);
  console.log("order is", obj);

  const onPrepareSellOrderButtonClick = useCallback(() => {
    if (!auth.hasKey) navigate("/openwallet?ret=/starttocreateorder");
    else
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
              I'll send trade secret to buyer privately as bellow:
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
      <PrimaryAccountCard />
      <div className="preview-sell-order">Preview Sell Order</div>
      <div className="im-selling">I’m selling:</div>
      <div className="nft-name">
        <div className="token-name">{obj.selltoken}</div>
      </div>
      <div className="im-selling">Buyer will pay me by:</div>
      <div className="nft-name">
        <div className="token-name">{obj.gettoken}</div>
      </div>
      <div className="im-selling">Price, amount, and I’ll get:</div>
      <div className="nft-name-parent">
        <div className="nft-name2">
          <div className="amount">{obj.price}</div>
        </div>
        <div className="x">X</div>
        <div className="nft-name2">
          <div className="amount">{obj.count}</div>
        </div>
        <div className="x">=</div>
        <div className="nft-name2">
          <div className="amount">{obj.price * obj.count}</div>
        </div>
      </div>
      <div className="tradesecretsection">
        <div className="ill-share-the">
          I’ll share the trade secret of bellow with buyer:
        </div>
        <div className="tot-description1">
          <div className="please-pay-to-container">
            <p className="please-pay-to">
              Please pay to my bank account number:
            </p>
            <p className="please-pay-to">&nbsp;</p>
            <p className="please-pay-to">Bank of America</p>
            <p className="p">1234 1234 1234 1234</p>
          </div>
        </div>
      </div>
      <div className="im-selling">The trade will be created in DAO:</div>
      <div className="nft-name">
        <div className="token-name">A Great DAO</div>
      </div>
      <div className="im-selling">I need to send:</div>
      <div className="collateralcount">
        <div className="collateral-worth-label">
          <div className="price-10-tetherusdt">Token 123</div>
        </div>
        <div className="collateral-worth-label1">
          <div className="price-10-tetherusdt">Price: 10 tether/USDT</div>
        </div>
        <div className="price-10-tetherusdt">Equivalent price: 10 LYR $12</div>
        <div className="collateral-worth-label2">
          <div className="price-10-tetherusdt">
            Collateral 120%, in LYR: 100 LYR
          </div>
          <div className="price-10-tetherusdt">$ 103</div>
        </div>
        <div className="collateral-worth-label2">
          <div className="price-10-tetherusdt">DAO fee 1% in LYR: 100 LYR</div>
          <div className="price-10-tetherusdt">$ 103</div>
        </div>
        <div className="collateral-worth-label2">
          <div className="price-10-tetherusdt">
            Network fee 0.2% in LYR: 100 LYR
          </div>
          <div className="price-10-tetherusdt">$ 103</div>
        </div>
      </div>
      <div className="im-selling">
        Total tokens to be send to create an order:
      </div>
      <div className="nft-name-group">
        <div className="nft-name6">
          <div className="price-10-tetherusdt">
            1,000,000 LYR, worth $10,000
          </div>
        </div>
        <div className="nft-name6">
          <div className="price-10-tetherusdt">
            1,000,000 LYR, worth $10,000
          </div>
        </div>
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
        className="prepare-sell-order-button9"
        onClick={onPrepareSellOrderButtonClick}
      >
        <div className="primary-button2">Place Order</div>
      </button>
    </div>
  );
};

export default PreviewSellOrderForm;
