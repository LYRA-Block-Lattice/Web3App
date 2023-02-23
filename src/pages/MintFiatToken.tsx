import { FunctionComponent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import styles from "./MintFiatToken.module.css";

const MintFiatToken: FunctionComponent = () => {
  return (
    <form className={styles.mintFiatToken}>
      <div className={styles.printFiatFor}>Print Fiat for free</div>
      <Autocomplete
        sx={{ width: 301 }}
        disablePortal
        options={[] as any}
        renderInput={(params: any) => (
          <TextField
            {...params}
            color="primary"
            label="Select Fiat Type"
            variant="outlined"
            placeholder=""
            helperText=""
          />
        )}
        size="medium"
      />
      <TextField
        className={styles.domainName}
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="number"
        label="Amount to print"
        placeholder="100"
        size="medium"
        margin="none"
      />
      <button className={styles.prepareSellOrderButton}>
        <div className={styles.secondaryButton}>Print</div>
      </button>
    </form>
  );
};

export default MintFiatToken;
