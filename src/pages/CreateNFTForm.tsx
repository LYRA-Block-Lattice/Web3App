import { FunctionComponent } from "react";
import { TextField } from "@mui/material";
import SecondaryButton from "../components/SecondaryButton";
import "./CreateNFTForm.css";

const CreateNFTForm: FunctionComponent = () => {
  return (
    <div className="createnftform">
      <div className="create-nft">Create NFT</div>
      <TextField
        className="nft-name"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="text"
        label="NFT Name"
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
        margin="none"
      />
      <img
        className="createnftform-child"
        alt=""
        src="../asserts/frame-627115@2x.png"
      />
      <TextField
        className="nft-name"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Metadata URL"
        placeholder="https://..."
        size="medium"
        margin="none"
      />
      <div className="or">or</div>
      <input className="select-nft-image" type="file" />
      <SecondaryButton secondaryButton="Create NFT" />
    </div>
  );
};

export default CreateNFTForm;
