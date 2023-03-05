import { FunctionComponent, useState, useCallback } from "react";
import { TextField } from "@mui/material";
import "./CreateNFTForm.css";
import { useDispatch, useSelector } from "react-redux";
import { MARKET_UPLOAD_FILE, WALLET_MINT_NFT } from "../app/actionTypes";
import { getAppSelector } from "../app/selectors";
import { LyraCrypto } from "../app/blockchain/lyra-crypto";
import axios from "axios";
import base58 from "bs58";
import { BlockchainAPI } from "../app/blockchain/blockchain-api";
import { HTTPError } from "ky-universal";
import { LyraApi } from "../app/blockchain/lyra-api";
import { dumpHttpError, extractStreamData } from "../app/utils";

type TokenMintProps = {
  onClose?: (ticker?: string) => void;
  children?: React.ReactNode;
  tag?: string;
};

const CreateNFTForm: FunctionComponent<TokenMintProps> = (props) => {
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [metaUrl, setMetaUrl] = useState<string>("");
  const [supply, setSupply] = useState<number>(1);

  const [imgsrc, setImgsrc] = useState("../asserts/frame-627115@2x.png");

  const dispatch = useDispatch();
  const app = useSelector(getAppSelector);

  function readFileData(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];

    return new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event: ProgressEvent<FileReader>) => {
        resolve(event.target!.result as ArrayBuffer);
      };

      reader.onerror = (err) => {
        reject(err);
      };

      reader.readAsArrayBuffer(file);
    });
  }

  // calculate sha256 hash of binary data
  const sha256 = async (data: any) => {
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // const hashHex = hashArray
    //   .map((b) => b.toString(16).padStart(2, "0"))
    //   .join("");
    const hashStr = base58.encode(hashArray);
    return hashStr;
  };

  // get file data from form file input
  // redux can't handle big binary data. so upload file to server first
  const handleFileChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files![0];
      const data = await readFileData(event);

      // first sha256 the file
      const hash = await sha256(data);

      // sign the hash with lyraCrypto
      const userToken = JSON.parse(sessionStorage.getItem("token")!);
      const signt = LyraCrypto.Sign(hash, userToken.pvt);

      //console.log(`hash: ${hash} signt: ${signt} by ${userToken.pvt}`);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("accountId", app.wallet.accountId as string);
      formData.append("signature", signt);
      formData.append("signatureType", "p1393");

      try {
        const response = await BlockchainAPI.uploadFile(formData);
        console.log(response);
        setImgsrc(response.url);

        // then we create a metadata url
        var metaret = await createMetaData(response.url);
        setMetaUrl(metaret.url);
      } catch (error) {
        console.log(error);
        dumpHttpError(error);
      }
    },
    [imgsrc, metaUrl]
  );

  const createMetaData = useCallback(
    async (imgUrl: string) => {
      var lsb = await BlockchainAPI.lastServiceHash();

      var input = `${app.wallet.accountId as string}:${lsb}:${imgUrl}`;

      const userToken = JSON.parse(sessionStorage.getItem("token")!);
      const apisign = LyraCrypto.Sign(input, userToken.pvt);
      // log input
      console.log(`input: ${input} apisign: ${apisign} by ${userToken.pvt}`);

      var ret = await BlockchainAPI.createNFTMeta(
        app.wallet.accountId as string,
        apisign,
        name,
        desc,
        imgUrl
      );

      console.log(ret);
      return ret;
    },
    [name, desc, imgsrc]
  );

  const onMintClick = useCallback(async () => {
    console.log("mint NFT.");
    // mint NFT
    dispatch({
      type: WALLET_MINT_NFT,
      payload: {
        accountId: app.wallet.accountId as string,
        name: name,
        description: desc,
        supply: supply,
        metadataUrl: metaUrl
      }
    });
  }, [name, desc, metaUrl, supply, imgsrc]);

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
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        multiline
        rows={5}
        label="Description"
        margin="none"
        onChange={(e) => setDesc(e.target.value)}
      />
      <img className="createnftform-child" alt="" src={imgsrc} />
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
        value={metaUrl}
        onChange={(e) => setMetaUrl(e.target.value)}
      />
      <div className="or">or</div>
      <input
        className="select-nft-image"
        type="file"
        placeholder="Select NFT Image"
        onChange={handleFileChange}
      />
      <button className="prepare-sell-order-button5" onClick={onMintClick}>
        <div className="secondary-button3">Create NFT</div>
      </button>
    </div>
  );
};

export default CreateNFTForm;
