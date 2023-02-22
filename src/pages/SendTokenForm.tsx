import { FunctionComponent, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./SendTokenForm.css";

const SendTokenForm: FunctionComponent = () => {
  const onMiniProgramsButtonsClick = useCallback(() => {
    //TODO: nav back
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onHomeClick = useCallback(() => {
    //TODO: back home
  }, []);

  const onNavigationPrepareSellOrderClick = useCallback(() => {
    //TODO: context menu
  }, []);

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
