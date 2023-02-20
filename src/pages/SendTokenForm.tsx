import { FunctionComponent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import "./SendTokenForm.css";

const SendTokenForm: FunctionComponent = () => {
  return (
    <div className="sendtokenform">
      <div className="asserttitlesection">
        <div className="send-token">Send Token</div>
      </div>
      <Autocomplete
        sx={{ width: 301 }}
        disablePortal
        options={["aaa", "bbb", "ccc"]}
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
      <button className="prepare-sell-order-button4">
        <div className="primary-button">Send</div>
      </button>
    </div>
  );
};

export default SendTokenForm;
