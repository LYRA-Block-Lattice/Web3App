import { FunctionComponent, useCallback } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  TextField,
  Input,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import TopNavigationBar from "../components/TopNavigationBar";
import Footer from "../components/Footer";
import "./OpenWallet.css";

const OpenWallet: FunctionComponent = () => {
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
    <div className="openwallet">
      <TopNavigationBar
        title="Open Wallet"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className="illus5-copy-parent">
        <img className="illus5-copy-icon" alt="" src="../illus5-copy.svg" />
        <FormControl
          className="wallet-name1"
          sx={{ width: 343 }}
          variant="standard"
        >
          <InputLabel color="primary">Wallet Name</InputLabel>
          <Select color="primary" size="medium" label="Wallet Name">
            <MenuItem value="wallet a">wallet a</MenuItem>
            <MenuItem value="name b">name b</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <TextField
          className="password"
          sx={{ width: 330 }}
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
          placeholder="Placeholder"
          size="medium"
          margin="none"
          required
        />
        <button className="prepare-sell-order-button16">
          <div className="primary-button8">Open</div>
        </button>
        <button className="prepare-sell-order-button17">
          <div className="mini-button1">Create</div>
        </button>
        <button className="forgot-password-copy">Forgot password?</button>
      </div>
      <Footer
        iconImageUrl="../box-alt-light.svg"
        moleculeImageUrl="../molecule-light.svg"
        walletImageUrl="../wallet-light.svg"
        userImageUrl="../user-alt-light.svg"
      />
    </div>
  );
};

export default OpenWallet;
