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
import styles from "./OpenWallet.module.css";

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
    <div className={styles.openwallet}>
      <TopNavigationBar
        title="Open Wallet"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className={styles.illus5CopyParent}>
        <img
          className={styles.illus5CopyIcon}
          alt=""
          src="../illus5-copy.svg"
        />
        <FormControl
          className={styles.walletName}
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
          className={styles.password}
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
        <button className={styles.prepareSellOrderButton}>
          <div className={styles.primaryButton}>Open</div>
        </button>
        <button className={styles.prepareSellOrderButton1}>
          <div className={styles.miniButton}>Create</div>
        </button>
        <button className={styles.forgotPasswordCopy}>Forgot password?</button>
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
