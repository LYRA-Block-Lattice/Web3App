﻿import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import "./SearchTokenInput.css";
import { useSelector } from "react-redux";
import { getAppSelector } from "../app/selectors";
import { IBalance } from "../app/wallet/walletReducer";
export interface IToken {
  token: string;
  domain: string;
  isTOT: boolean;
  name: string;
}

type SearchTokenInputProps = {
  dir: string;
  cat: string;
  ownOnly: boolean;
  onTokenSelect: (name: string | undefined, ticker: string | undefined) => void;
  val: IToken;
};

export const SearchTokenInput: FunctionComponent<SearchTokenInputProps> = ({
  dir,
  cat,
  ownOnly,
  onTokenSelect,
  val
}) => {
  const [defval, setDefval] = useState<IToken>();
  const [options, setOptions] = useState<IToken[]>([]);
  // all balance in current wallet
  const [balance, setBalance] = useState<IBalance[]>([]);
  // balance of selected token
  const [selbalance, setSelbalance] = useState<number | undefined>(0);
  const app = useSelector(getAppSelector);

  async function getTokens() {
    setBalance(app.wallet.balances);
  }

  useEffect(() => {
    // set selbalance if val is specified
    if (val) {
      setDefval(val);
      var b = app.wallet.balances.find((a) => a.Ticker == val.token);
      if (b) {
        setSelbalance(b.Balance);
      }
    }

    getTokens();
  }, []);

  const searchToken = (searchTerm: string, cat: string) => {
    if (ownOnly && cat != "Fiat") {
      // search in wallet/balance
      var url = `https://${app.network}.lyra.live/api/Node/FindTokensForAccount?accountId=${app.wallet.accountId}&q=${searchTerm}&cat=${cat}`;
      fetch(url)
        .then(
          (response) => response.text(),
          (err) => {
            console.log("err: " + err);
          }
        )
        .then((txt) => JSON.parse(txt!))
        .then(
          function (ret: []) {
            setOptions(ret);
          },
          (err) => {
            console.log("err: " + err);
          }
        );
    } else {
      var url = `https://${app.network}.lyra.live/api/Node/FindTokens?q=${searchTerm}&cat=${cat}`;
      fetch(url)
        .then(
          (response) => response.text(),
          (err) => {
            console.log("err: " + err);
          }
        )
        .then((txt) => JSON.parse(txt!))
        .then(function (ret: []) {
          setOptions(ret);
        });
    }
  };

  const onGetTokenInputChange = useCallback(
    (event: any, value: string) => {
      if (value) {
        getTokens();

        searchToken(value, cat);

        var tok = balance?.find((a) => a.Ticker == value);
        if (tok) {
          setSelbalance(tok.Balance);
          onTokenSelect(tok.Name, tok.Ticker);
        } else {
          // for nft/tot, its the name
          let tkn = options.find((a) => a.name == value);
          if (tkn) {
            onTokenSelect(tkn.name, tkn.token);
          }
          let tok2 = balance?.find((a) => a.Ticker == tkn?.token);
          if (tok2) {
            setSelbalance(tok2?.Balance);
            onTokenSelect(tok2?.Name, tok2.Ticker);
          }
        }
      } else {
        onTokenSelect(undefined, undefined);
        setOptions([]);
        setSelbalance(0);
      }
    },
    [options]
  );

  return (
    <div>
      <Autocomplete
        sx={{ width: 320 }}
        disablePortal
        defaultValue={val}
        options={options}
        onInputChange={onGetTokenInputChange}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        renderInput={(params: any) => (
          <TextField
            {...params}
            color="primary"
            label="Token Name"
            variant="outlined"
            placeholder=""
            helperText=""
          />
        )}
        size="medium"
      />
      <div className="balance">
        Balance:{" "}
        {(selbalance ?? 0).toLocaleString(undefined, {
          maximumFractionDigits: 2
        })}
      </div>
    </div>
  );
};

export default SearchTokenInput;
