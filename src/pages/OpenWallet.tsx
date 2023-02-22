import { FunctionComponent } from "react";
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
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./OpenWallet.css";

const OpenWallet: FunctionComponent = () => {
  return (
    <div className="openwallet">
      <TopNavigationBar title="Open Wallet" />
      <div className="illus5-copy-parent">
        <img
          className="illus5-copy-icon"
          alt=""
          src="../asserts/illus5-copy.svg"
        />
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
        <button className="prepare-sell-order-button19">
          <div className="primary-button7">Open Wallet</div>
        </button>
        <button className="prepare-sell-order-button20">
          <div className="mini-button1">Create Wallet</div>
        </button>
        <button className="forgot-password-copy">Forgot password?</button>
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

export default OpenWallet;
