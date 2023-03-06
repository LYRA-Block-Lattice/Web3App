import { FunctionComponent } from "react";
import { TextField } from "@mui/material";
import SecondaryButton from "../components/SecondaryButton";
import "./CreateTokenForm.css";

const CreateTokenForm: FunctionComponent = () => {
  return (
    <form className="createtokenform">
      <div className="mint-token">Mint Token</div>
      <TextField
        className="token-name"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Token Name"
        size="medium"
        margin="none"
      />
      <TextField
        className="token-name"
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
        className="token-name"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="number"
        label="Total Supply"
        placeholder="1"
        size="medium"
        margin="none"
      />
      <SecondaryButton secondaryButton="Mint Token" />
    </form>
  );
};

export default CreateTokenForm;
