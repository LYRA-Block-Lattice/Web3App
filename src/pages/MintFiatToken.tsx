import { FunctionComponent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import SecondaryButton from "../components/SecondaryButton";
import "./MintFiatToken.css";

const MintFiatToken: FunctionComponent = () => {
  return (
    <form className="mint-fiat-token">
      <div className="print-fiat-for">Print Fiat for free</div>
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
        className="domain-name"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="number"
        label="Amount to print"
        placeholder="100"
        size="medium"
        margin="none"
      />
      <SecondaryButton />
    </form>
  );
};

export default MintFiatToken;
