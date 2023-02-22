import { FunctionComponent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import TopNavigationBar from "../components/TopNavigationBar";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./SendTokenForm.css";

const SendTokenForm: FunctionComponent = () => {
  return (
    <div className="sendtokenform">
      <TopNavigationBar title="Send Token" />
      <div className="tokentosell-parent">
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
        <button className="prepare-sell-order-button5">
          <div className="primary-button2">Send</div>
        </button>
      </div>
      <BottomNavigationBar
        boxAltLight="../asserts/box-alt-light.svg"
        moleculeLight="../asserts/molecule-light.svg"
        walletLight="../asserts/wallet-light.svg"
        userAltLight="../asserts/user-alt-light.svg"
      />
    </div>
  );
};

export default SendTokenForm;
