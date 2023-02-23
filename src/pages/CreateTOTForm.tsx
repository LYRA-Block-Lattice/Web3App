import { FunctionComponent, useState, useCallback } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  TextField,
} from "@mui/material";
import SignTradeSecretPopup from "../components/SignTradeSecretPopup";
import PortalPopup from "../components/PortalPopup";
import styles from "./CreateTOTForm.module.css";

const CreateTOTForm: FunctionComponent = () => {
  const [isSignTradeSecretPopupOpen, setSignTradeSecretPopupOpen] =
    useState(false);

  const openSignTradeSecretPopup = useCallback(() => {
    setSignTradeSecretPopupOpen(true);
  }, []);

  const closeSignTradeSecretPopup = useCallback(() => {
    setSignTradeSecretPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.createtotform}>
        <form className={styles.createtottosellform}>
          <div className={styles.createAndSell}>Create and Sell [TOT/SKU]</div>
          <FormControl sx={{ width: 301 }} variant="outlined">
            <InputLabel color="primary">Select Type of TOT</InputLabel>
            <Select color="primary" size="medium" label="Select Type of TOT">
              <MenuItem value="Goods">Goods</MenuItem>
              <MenuItem value="Service">Service</MenuItem>
              <MenuItem value="Generic Trade only Token">
                Generic Trade only Token
              </MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <TextField
            className={styles.totName}
            sx={{ width: 301 }}
            color="primary"
            variant="outlined"
            type="text"
            label="TOT Name"
            size="medium"
            margin="none"
          />
          <TextField
            sx={{ width: 301 }}
            color="primary"
            variant="outlined"
            multiline
            rows={5}
            label="Public Description, seen by everyone"
            placeholder="Introduct to my token"
            margin="none"
          />
          <TextField
            className={styles.totName}
            sx={{ width: 301 }}
            color="primary"
            variant="outlined"
            type="number"
            label="Total Supply"
            placeholder="1"
            size="medium"
            margin="none"
          />
          <button
            className={styles.prepareSellOrderButton}
            onClick={openSignTradeSecretPopup}
          >
            <div className={styles.utilityButton}>Sign trade secret</div>
          </button>
          <div className={styles.noteINeed}>
            Note: I need to send trade secret privately to buyer(s).
          </div>
          <button className={styles.prepareSellOrderButton1}>
            <div className={styles.secondaryButton}>Create TOT</div>
          </button>
        </form>
      </div>
      {isSignTradeSecretPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignTradeSecretPopup}
        >
          <SignTradeSecretPopup onClose={closeSignTradeSecretPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default CreateTOTForm;
