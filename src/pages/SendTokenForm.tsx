import { FunctionComponent, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import "./SendTokenForm.css";
import SearchTokenInput, { IToken } from "../dup/SearchTokenInput";

const SendTokenForm: FunctionComponent = () => {
  const onSellChange = (value: any) => {
    console.log("onSellChange: " + value);
  };

  return (
    <div className="sendtokenform">
      <div className="asserttitlesection">
        <div className="send-token">Send Token</div>
      </div>
      <SearchTokenInput
        key="tosend"
        val={{ token: "LYR", name: "LYR" } as IToken}
        dir="Sell"
        cat="Token"
        ownOnly={true}
        onTokenSelect={onSellChange}
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
      />
      <button className="prepare-sell-order-button">
        <div className="primary-button">Send</div>
      </button>
    </div>
  );
};

export default SendTokenForm;
