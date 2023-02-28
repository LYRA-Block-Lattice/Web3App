import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import TopNavigationBar from "../components/TopNavigationBar";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./SendTokenForm.css";
import SearchTokenInput, { IToken } from "../dup/SearchTokenInput";
import { useDispatch, useSelector } from "react-redux";
import { WALLET_SEND } from "../app/actionTypes";
import { getAppSelector, getAuthSelector } from "../app/selectors";
import PrimaryAccountCard from "../components/PrimaryAccountCard";
import { useNavigate } from "react-router";

const SendTokenForm: FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const app = useSelector(getAppSelector);
  const auth = useSelector(getAuthSelector);

  const [val, setVal] = useState<IToken>({
    token: "LYR",
    name: "LYR"
  } as IToken);
  const [sel, setSel] = useState("LYR");
  const [dst, setDst] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (!auth.hasKey) navigate("/openwallet");
  }, [auth.hasKey, navigate]);

  const onSelectChange = useCallback(
    (name: string | undefined, ticker: string | undefined) => {
      console.log("onSelectChange: " + ticker);
      if (ticker) {
        setSel(ticker);
      } else {
        setSel("");
      }
    },
    [sel]
  );

  const doSend = useCallback(() => {
    if (sel) {
      dispatch({
        type: WALLET_SEND,
        payload: {
          accountId: app.wallet.accountId,
          tokenname: sel,
          destaddr: dst,
          amount: amount
        }
      });
    } else {
      dispatch({
        type: "ERROR",
        payload: {
          error: "Token not selected"
        }
      });
    }
  }, [sel, dst, amount]);

  return (
    <div className="sendtokenform">
      <TopNavigationBar title="Send Token" />
      <div className="tokentosell-parent">
        <SearchTokenInput
          key="tosend"
          val={val}
          dir="Send"
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
          placeholder="Address started with 'L...'"
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
        <button className="prepare-sell-order-button3" onClick={doSend}>
          <div className="primary-button3">Send</div>
        </button>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default SendTokenForm;
