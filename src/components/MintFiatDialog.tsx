import { FunctionComponent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import "./MintFiatDialog.css";

const MintFiatDialog: FunctionComponent = () => {
  return (
    <div className="mintfiatdialog">
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
      <button className="prepare-sell-order-button18">
        <div className="secondary-button5">Print</div>
      </button>
    </div>
  );
};

export default MintFiatDialog;
