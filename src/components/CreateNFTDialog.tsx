import { FunctionComponent } from "react";
import { TextField } from "@mui/material";
import "./CreateNFTDialog.css";

const CreateNFTDialog: FunctionComponent = () => {
  return (
    <div className="createnftdialog">
      <div className="create-nft1">Create NFT</div>
      <TextField
        className="nft-name1"
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
        className="createnftdialog-child"
        alt=""
        src="../asserts/frame-627115@2x.png"
      />
      <TextField
        className="nft-name1"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Metadata URL"
        placeholder="https://..."
        size="medium"
        margin="none"
      />
      <div className="or1">or</div>
      <input className="select-nft-image1" type="file" />
      <button className="buttons15">
        <div className="secondary-button7">Create NFT</div>
      </button>
    </div>
  );
};

export default CreateNFTDialog;
