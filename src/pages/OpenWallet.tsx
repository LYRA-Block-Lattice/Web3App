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
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./OpenWallet.css";

const OpenWallet: FunctionComponent = () => {
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
    <div className="openwallet">
      <nav className="navigation211">
        <button
          className="mini-programs-buttons22"
          onClick={onMiniProgramsButtonsClick}
        >
          <img className="iconleft11" alt="" src="../asserts/iconleft.svg" />
        </button>
        <button className="title16" onClick={onTitleClick}>
          Open Wallet
        </button>
        <div className="mini-programs-buttons23">
          <div className="stroke11" />
          <button className="home11" onClick={onHomeClick}>
            <img
              className="ellipse-icon22"
              alt=""
              src="../asserts/ellipse.svg"
            />
            <img
              className="ellipse-icon23"
              alt=""
              src="../asserts/ellipse1.svg"
            />
          </button>
          <img
            className="separator-icon11"
            alt=""
            src="../asserts/separator10.svg"
          />
          <button
            className="navigationprepare-sell-order11"
            onClick={onNavigationPrepareSellOrderClick}
          >
            <img
              className="navigationprepare-sell-order-child29"
              alt=""
              src="../asserts/rectangle-111.svg"
            />
            <img
              className="navigationprepare-sell-order-child30"
              alt=""
              src="../asserts/vector-7.svg"
            />
            <img
              className="navigationprepare-sell-order-child31"
              alt=""
              src="../asserts/vector-8.svg"
            />
          </button>
        </div>
      </nav>
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
        <button className="prepare-sell-order-button18">
          <div className="primary-button7">Open</div>
        </button>
        <button className="prepare-sell-order-button19">
          <div className="mini-button1">Create</div>
        </button>
        <button className="forgot-password-copy">Forgot password?</button>
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

export default OpenWallet;
