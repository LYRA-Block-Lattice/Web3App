import { FunctionComponent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import "./MintFiatDialog.css";

const MintFiatDialog: FunctionComponent = () => {
  return (
    <form className="mintfiatdialog">
      <div className="print-fiat-for1">Print Fiat for free</div>
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
        className="domain-name2"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="number"
        label="Amount to print"
        placeholder="100"
        size="medium"
        margin="none"
      />
      <button className="buttons2">
        <div className="secondary-button">Print</div>
      </button>
    </form>
  );
};

export default MintFiatDialog;
