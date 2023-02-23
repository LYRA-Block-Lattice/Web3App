import { FunctionComponent } from "react";
import { TextField } from "@mui/material";
import styles from "./CreateTokenForm.module.css";

const CreateTokenForm: FunctionComponent = () => {
  return (
    <form className={styles.createtokenform}>
      <div className={styles.mintToken}>Mint Token</div>
      <TextField
        className={styles.tokenName}
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Token Name"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.tokenName}
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Domain Name"
        size="medium"
        margin="none"
      />
      <TextField
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        multiline
        rows={5}
        label="Description"
        placeholder="Textarea placeholder"
        margin="none"
      />
      <TextField
        className={styles.tokenName}
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="number"
        label="Total Supply"
        placeholder="1"
        size="medium"
        margin="none"
      />
      <button className={styles.prepareSellOrderButton}>
        <div className={styles.secondaryButton}>Mint Token</div>
      </button>
    </form>
  );
};

export default CreateTokenForm;
