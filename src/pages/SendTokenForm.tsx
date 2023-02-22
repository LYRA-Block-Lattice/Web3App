import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./SendTokenForm.css";
import SearchTokenInput, { IToken } from "../dup/SearchTokenInput";
import { useDispatch, useSelector } from "react-redux";
import { WALLET_SEND } from "../app/actionTypes";
import { getAppSelector } from "../app/selectors";
import PrimaryAccountCard from "../components/PrimaryAccountCard";

const SendTokenForm: FunctionComponent = () => {
  const dispatch = useDispatch();
  const app = useSelector(getAppSelector);

  const [val, setVal] = useState<IToken>({
    token: "LYR",
    name: "LYR"
  } as IToken);
  const [sel, setSel] = useState("LYR");
  const [dst, setDst] = useState("");
  const [amount, setAmount] = useState(0);

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
      <nav className="navigation22">
        <button
          className="mini-programs-buttons4"
          onClick={onMiniProgramsButtonsClick}
        >
          <img className="iconleft2" alt="" src="../asserts/iconleft.svg" />
        </button>
        <button className="title7" onClick={onTitleClick}>
          Send Token
        </button>
        <div className="mini-programs-buttons5">
          <div className="stroke2" />
          <button className="home2" onClick={onHomeClick}>
            <img
              className="ellipse-icon4"
              alt=""
              src="../asserts/ellipse.svg"
            />
            <img
              className="ellipse-icon5"
              alt=""
              src="../asserts/ellipse1.svg"
            />
          </button>
          <img
            className="separator-icon2"
            alt=""
            src="../asserts/separator1.svg"
          />
          <button
            className="navigationprepare-sell-order2"
            onClick={onNavigationPrepareSellOrderClick}
          >
            <img
              className="navigationprepare-sell-order-child2"
              alt=""
              src="../asserts/rectangle-12.svg"
            />
            <img
              className="navigationprepare-sell-order-child3"
              alt=""
              src="../asserts/vector-7.svg"
            />
            <img
              className="navigationprepare-sell-order-child4"
              alt=""
              src="../asserts/vector-8.svg"
            />
          </button>
        </div>
      </nav>
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
        <button className="prepare-sell-order-button5" onClick={doSend}>
          <div className="primary-button2">Send</div>
        </button>
      </div>
      <BottomNavigationBar
        boxAltLight1="../asserts/box-alt-light.svg"
        moleculeLight1="../asserts/molecule-light.svg"
        walletLight1="../asserts/wallet-light.svg"
        userAltLight1="../asserts/user-alt-light.svg"
        textColor="#434343"
        textColor1="#0ebd8d"
      />
    </div>
  );
};

export default SendTokenForm;
