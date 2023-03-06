import { FunctionComponent, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import TopNavigationBar from "../components/TopNavigationBar";
import PrimaryButton from "../components/PrimaryButton";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./SendTokenForm.css";

const SendTokenForm: FunctionComponent = () => {
  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onContextMenuButtonClick = useCallback(() => {
    //TODO: context menu
  }, []);

  return (
    <div className="sendtokenform">
      <TopNavigationBar
        title="Send Token"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
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
        <PrimaryButton primaryButton="Send" />
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default SendTokenForm;
