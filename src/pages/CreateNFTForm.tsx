import { FunctionComponent } from "react";
import { TextField } from "@mui/material";
import styles from "./CreateNFTForm.module.css";

const CreateNFTForm: FunctionComponent = () => {
  return (
    <div className={styles.createnftform}>
      <div className={styles.createNft}>Create NFT</div>
      <TextField
        className={styles.nftName}
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
        className={styles.createnftformChild}
        alt=""
        src="../frame-627115@2x.png"
      />
      <TextField
        className={styles.nftName}
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Metadata URL"
        placeholder="https://..."
        size="medium"
        margin="none"
      />
      <div className={styles.or}>or</div>
      <input className={styles.selectNftImage} type="file" />
      <button className={styles.prepareSellOrderButton}>
        <div className={styles.secondaryButton}>Create NFT</div>
      </button>
    </div>
  );
};

export default CreateNFTForm;
