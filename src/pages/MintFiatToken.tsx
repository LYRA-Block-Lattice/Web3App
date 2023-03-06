import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import SecondaryButton from "../components/SecondaryButton";
import "./MintFiatToken.css";
import { useDispatch, useSelector } from "react-redux";
import { getAppSelector } from "../app/selectors";
import { IBalance } from "../app/wallet/walletReducer";
import { WALLET_PRINT_FIAT } from "../app/actionTypes";

type TokenMintProps = {
  onClose?: (ticker?: string) => void;
  children?: React.ReactNode;
  tag?: string;
};

const MintFiatToken: FunctionComponent<TokenMintProps> = (props) => {
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
    dispatch({
      type: WALLET_PRINT_FIAT,
      payload: {
        accountId: app.wallet.accountId,
        ticker: name,
        amount: supply
      }
    });
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
    <div className="mint-fiat-token">
      <div className="print-fiat-for">Print Fiat for free</div>
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
        className="domain-name"
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
      <SecondaryButton secondaryButton="Print" onClick={onMintClick} />
    </form>
  );
};

export default MintFiatToken;
