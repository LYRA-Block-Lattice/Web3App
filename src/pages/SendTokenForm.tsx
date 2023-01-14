import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import "./SendTokenForm.css";
import SearchTokenInput, { IToken } from "../dup/SearchTokenInput";
import { useDispatch, useSelector } from "react-redux";
import { WALLET_SEND } from "../app/actionTypes";
import { getAppSelector } from "../app/selectors";

const SendTokenForm: FunctionComponent = () => {
  const dispatch = useDispatch();
  const app = useSelector(getAppSelector);

  const [val, setVal] = useState<IToken>({
    token: "LYR",
    name: "LYR"
  } as IToken);
  const [sel, setSel] = useState("");
  const [dst, setDst] = useState("");
  const [amount, setAmount] = useState(0);

  const onSelectChange = useCallback(
    (value: any) => {
      console.log("onSelectChange: " + value);
      if (value) {
        setSel(value);
      } else {
        setSel("");
      }
    },
    [sel]
  );

  const doSend = useCallback(() => {
    dispatch({ type: "ERROR_CLEAR" });
    dispatch({
      type: WALLET_SEND,
      payload: {
        accountId: app.wallet.accountId,
        tokenname: sel,
        destaddr: dst,
        amount: amount
      }
    });
  }, [sel, dst, amount]);

  return (
    <div className="sendtokenform">
      <div className="asserttitlesection">
        <div className="send-token">Send Token</div>
      </div>
      <SearchTokenInput
        key="tosend"
        val={val}
        dir="Sell"
        cat="Token"
        ownOnly={true}
        onTokenSelect={onSelectChange}
      />
      <TextField
        className="tokentosell"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Destination address"
        placeholder="Address starts with 'L...'"
        size="medium"
        margin="none"
        required
        onChange={(e) => setDst(e.target.value)}
      />
      <TextField
        className="tokentosell"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="number"
        label="Amount to send"
        size="medium"
        margin="none"
        required
        onChange={(e) => setAmount(+e.target.value)}
      />
      <button className="prepare-sell-order-button" onClick={doSend}>
        <div className="primary-button">Send</div>
      </button>
    </div>
  );
};

export default SendTokenForm;
