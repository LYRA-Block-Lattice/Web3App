import { FunctionComponent, useCallback } from "react";
import {
  TextField,
  Input,
  Icon,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import TopNavigationBar from "../components/TopNavigationBar";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./CreateWallet.css";

const CreateWallet: FunctionComponent = () => {
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
    <div className="createwallet">
      <TopNavigationBar
        title="Create Wallet"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className="illus1-parent">
        <div className="illus1">
          <img className="illus1-child" alt="" src="../group-3.svg" />
          <div className="group-parent">
            <img className="group-icon" alt="" src="../group-42.svg" />
            <div className="create-account">
              C<span className="r">r</span>
              <span className="e">e</span>a<span className="t">t</span>
              {`e `}
              <span className="a">A</span>
              <span className="cc">cc</span>ount
            </div>
            <img className="fill-43-icon" alt="" src="../fill-43.svg" />
            <img
              className="email-address-icon"
              alt=""
              src="../email-address.svg"
            />
            <img
              className="youremailgmailc-icon"
              alt=""
              src="../youremailgmailc.svg"
            />
            <img className="frame-child1" alt="" src="../group-49.svg" />
            <img className="your-text-icon" alt="" src="../your-text.svg" />
            <img className="frame-child2" alt="" src="../group-53.svg" />
            <img className="your-city-icon" alt="" src="../your-city.svg" />
            <img className="frame-child3" alt="" src="../group-57.svg" />
            <img
              className="entry-password-icon"
              alt=""
              src="../entry-password.svg"
            />
            <img className="frame-child4" alt="" src="../group-145.svg" />
          </div>
        </div>
        <TextField
          className="wallet-name"
          sx={{ width: 343 }}
          color="primary"
          variant="standard"
          type="text"
          label="Wallet Name"
          size="medium"
          margin="none"
          required
        />
        <TextField
          className="wallet-name"
          sx={{ width: 343 }}
          color="primary"
          variant="standard"
          type="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility">
                  <Icon>visibility</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          label="Password"
          size="medium"
          margin="none"
          required
        />
        <TextField
          className="wallet-name"
          sx={{ width: 343 }}
          color="primary"
          variant="standard"
          type="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility">
                  <Icon>visibility</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          label="Confirm password"
          size="medium"
          margin="none"
          required
        />
        <div className="checkboxrestoreprivatekey-parent">
          <FormControlLabel
            label="I want to restore wallet by Private Key"
            labelPlacement="end"
            control={<Checkbox color="primary" size="medium" />}
          />
          <TextField
            className="wallet-name"
            sx={{ width: 343 }}
            color="primary"
            variant="standard"
            type="text"
            label="Private Key"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
        </div>
        <button className="prepare-sell-order-button14">
          <div className="primary-button7">Create</div>
        </button>
        <button className="prepare-sell-order-button15">
          <div className="mini-button">Open</div>
        </button>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default CreateWallet;
