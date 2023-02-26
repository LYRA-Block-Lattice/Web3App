import { FunctionComponent } from "react";
import { TextField } from "@mui/material";
import "./CreateTokenDialog.css";

const CreateTokenDialog: FunctionComponent = () => {
  return (
    <form className="createtokendialog">
      <div className="mint-token1">Mint Token</div>
      <TextField
        className="token-name1"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Token Name"
        size="medium"
        margin="none"
      />
      <TextField
        className="token-name1"
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
        className="token-name1"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="number"
        label="Total Supply"
        placeholder="1"
        size="medium"
        margin="none"
      />
      <button className="prepare-sell-order-button19">
        <div className="secondary-button6">Mint Token</div>
      </button>
    </form>
  );
};

export default CreateTokenDialog;
