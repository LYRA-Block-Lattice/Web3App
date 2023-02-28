import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import "./MintFiatDialog.css";
import { LongRunTask, NeedRunTask } from "../app/utils";
import { useDispatch, useSelector } from "react-redux";
import { getAppSelector } from "../app/selectors";
import PrimaryButton from "./PrimaryButton";
import { IBalance } from "../app/wallet/walletReducer";
import { getWallet } from "../app/wallet/walletSaga";

const MintFiatDialog: FunctionComponent<NeedRunTask> = (props) => {
  const app = useSelector(getAppSelector);
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [supply, setSupply] = useState<number>(0);
  const [options, setOptions] = useState<IBalance[]>([]);

  function getTokens() {
    setOptions(app.wallet.balances.filter((a) => a.Domain == "fiat"));
  }

  useEffect(() => {
    getTokens();
  }, []);

  const onMintClick = useCallback(() => {
    console.log("printing fiat...");
    const promises: LongRunTask[] = [
      {
        promise: (input) =>
          new Promise(async (resolve, reject) => {
            const wallet = getWallet();

            const balanceResp = await wallet.printFiat(
              input.ticker,
              input.amount
            );
            if (balanceResp.resultCode == 0) {
              resolve({ ...input, balanceResp: balanceResp });
            } else {
              reject(balanceResp.resultMessage);
            }
          }),
        callback: null,
        name: "Print Fiat",
        description: "Send block to Lyra consensus network."
      }
    ];
    if (props.onStart) {
      const ret = props.onStart(
        {
          ticker: name,
          amount: supply
        },
        promises
      );
      console.log(ret);
    }
    // dispatch({
    //   type: WALLET_PRINT_FIAT,
    //   payload: {
    //     accountId: app.wallet.accountId,
    //     ticker: name,
    //     amount: supply
    //   }
    // });
  }, [name, supply]);

  const onGetTokenInputChange = useCallback(
    (event: any, value: any, reason: any) => {
      if (value) {
        setName(value);
      } else {
        setName("");
      }
    },
    [options]
  );
  return (
    <div className="mintfiatdialog">
      <div className="print-fiat-for1">Print Fiat for free</div>
      <Autocomplete
        sx={{ width: 301 }}
        disablePortal
        options={options}
        onInputChange={onGetTokenInputChange}
        getOptionLabel={(option) => option.Ticker}
        renderInput={(params: any) => (
          <TextField
            {...params}
            color="primary"
            label="Select Fiat Type"
            variant="outlined"
            placeholder=""
            helperText=""
          />
        )}
        size="medium"
      />
      <TextField
        className="domain-name2"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="number"
        label="Amount to print"
        placeholder="100"
        size="medium"
        margin="none"
        onChange={(e) => setSupply(+e.target.value)}
      />
      <PrimaryButton onClick={onMintClick}>Print</PrimaryButton>
    </div>
  );
};

export default MintFiatDialog;
