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
import Footer from "../components/Footer";
import styles from "./CreateWallet.module.css";

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
    <div className={styles.createwallet}>
      <TopNavigationBar
        title="Create Wallet"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className={styles.illus1Parent}>
        <div className={styles.illus1}>
          <img className={styles.illus1Child} alt="" src="../group-3.svg" />
          <div className={styles.groupParent}>
            <img className={styles.frameChild} alt="" src="../group-42.svg" />
            <div className={styles.createAccount}>
              C<span className={styles.r}>r</span>
              <span className={styles.e}>e</span>a
              <span className={styles.t}>t</span>
              {`e `}
              <span className={styles.a}>A</span>
              <span className={styles.cc}>cc</span>ount
            </div>
            <img className={styles.fill43Icon} alt="" src="../fill-43.svg" />
            <img
              className={styles.emailAddressIcon}
              alt=""
              src="../email-address.svg"
            />
            <img
              className={styles.youremailgmailcIcon}
              alt=""
              src="../youremailgmailc.svg"
            />
            <img className={styles.frameItem} alt="" src="../group-49.svg" />
            <img
              className={styles.yourTextIcon}
              alt=""
              src="../your-text.svg"
            />
            <img className={styles.frameInner} alt="" src="../group-53.svg" />
            <img
              className={styles.yourCityIcon}
              alt=""
              src="../your-city.svg"
            />
            <img className={styles.groupIcon} alt="" src="../group-57.svg" />
            <img
              className={styles.entryPasswordIcon}
              alt=""
              src="../entry-password.svg"
            />
            <img className={styles.frameChild1} alt="" src="../group-145.svg" />
          </div>
        </div>
        <TextField
          className={styles.walletName}
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
          className={styles.walletName}
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
          className={styles.walletName}
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
        <div className={styles.checkboxrestoreprivatekeyParent}>
          <FormControlLabel
            label="I want to restore wallet by Private Key"
            labelPlacement="end"
            control={<Checkbox color="primary" size="medium" />}
          />
          <TextField
            className={styles.walletName}
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
        <button className={styles.prepareSellOrderButton}>
          <div className={styles.primaryButton}>Create</div>
        </button>
        <button className={styles.prepareSellOrderButton1}>
          <div className={styles.miniButton}>Open</div>
        </button>
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

export default CreateWallet;
