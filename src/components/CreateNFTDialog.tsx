import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { TextField } from "@mui/material";
import SecondaryButton from "../components/SecondaryButton";
import "./CreateNFTDialog.css";
import { BlockchainAPI, LyraCrypto } from "../app/blockchain";
import { dumpHttpError, LongRunTask, NeedRunTask } from "../app/utils";
import { useDispatch, useSelector } from "react-redux";
import { getAppSelector } from "../app/selectors";
import base58 from "bs58";
import { getWallet } from "../app/wallet/walletSaga";
import PrimaryButton from "./PrimaryButton";

const CreateNFTDialog: FunctionComponent<NeedRunTask> = (props) => {
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [metaUrl, setMetaUrl] = useState<string>("");
  const [supply, setSupply] = useState<number>(1);

  const [imgsrc, setImgsrc] = useState("../asserts/frame-627115@2x.png");

  const dispatch = useDispatch();
  const app = useSelector(getAppSelector);

  const [mintEnabled, setMintEnabled] = useState(false);

  useEffect(() => {
    if (name.length > 0 && desc.length > 0 && metaUrl.length > 0) {
      setMintEnabled(true);
    } else {
      setMintEnabled(false);
    }
  }, [name, desc, metaUrl]);

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
      const promises: LongRunTask[] = [
        {
          promise: (input) =>
            new Promise(async (resolve, reject) => {
              //const file = input.target.files![0];
              const data = await readFileData(input.evt);
              const hash = await sha256(data);

              console.log("sha256 hash input: " + hash);
              // sign the hash with lyraCrypto
              const userToken = JSON.parse(sessionStorage.getItem("token")!);
              const signt = LyraCrypto.Sign(hash, userToken.pvt);
              resolve({
                ...input,
                file: input.evt.target.files![0],
                hash: hash,
                signature: signt
              });
            }),
          callback: null,
          name: "Get File",
          description: "Read file from disk."
        },
        {
          promise: (input) =>
            new Promise(async (resolve, reject) => {
              console.log(`hash: ${input.hash} signt: ${input.signature}`);

              const formData = new FormData();
              formData.append("file", input.file);
              formData.append("accountId", app.wallet.accountId as string);
              formData.append("signature", input.signature);
              const uploadRet = await BlockchainAPI.uploadFile(formData);
              setImgsrc(uploadRet.url);
              resolve({ ...input, imgUrl: uploadRet.url });
            }),
          callback: null,
          name: "Upload image file",
          description: "Upload image file to Lyra Web3 network."
        },
        {
          promise: (input) =>
            new Promise(async (resolve, reject) => {
              var lsb = await BlockchainAPI.lastServiceHash();

              var msg = `${app.wallet.accountId as string}:${lsb}:${
                input.imgUrl
              }`;

              const userToken = JSON.parse(sessionStorage.getItem("token")!);
              const apisign = LyraCrypto.Sign(msg, userToken.pvt);
              // log input
              console.log(
                `input: ${input} apisign: ${apisign} by ${userToken.pvt}`
              );

              var ret = await BlockchainAPI.createNFTMeta(
                app.wallet.accountId as string,
                apisign,
                name,
                desc,
                input.imgUrl
              );

              setMetaUrl(ret.url);
              resolve({ ...input, metaUrl: ret.url });
            }),
          callback: null,
          name: "Create Metadata",
          description: "Create metadata file on Lyra Web3 network."
        }
      ];

      if (props.onStart) {
        const ret = props.onStart("Create Metadata", { evt: event }, promises);
        console.log(ret);
      }
    },
    [name, desc, imgsrc]
  );

  const onMintClick = useCallback(async () => {
    console.log("mint NFT.");
    // mint NFT
    const promises: LongRunTask[] = [
      {
        promise: (input) =>
          new Promise(async (resolve, reject) => {
            const wallet = getWallet();

            const balanceResp = await wallet.mintNFT(
              input.name,
              input.desc,
              input.supply,
              input.metaUrl,
              app.wallet.accountId
            );
            if (balanceResp.resultCode == 0) {
              resolve({ ...input, balanceResp: balanceResp });
            } else {
              reject(balanceResp.resultMessage);
            }
          }),
        callback: null,
        name: "Mint NFT",
        description: "Send block to Lyra consensus network."
      }
    ];
    if (props.onStart) {
      const ret = props.onStart(
        "Mint NFT",
        {
          name: name,
          desc: desc,
          metaUrl: metaUrl,
          supply: supply,
          imgsrc: imgsrc
        },
        promises
      );
      console.log(ret);
    }
  }, [name, desc, metaUrl, supply, imgsrc]);

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
      <img className="createnftdialog-child" alt="" src={imgsrc} />
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
        value={metaUrl}
        onChange={(e) => setMetaUrl(e.target.value)}
      />
      <div className="or1">or</div>
      <input
        className="select-nft-image1"
        type="file"
        placeholder="Select NFT Image"
        onChange={handleFileChange}
      />
      <SecondaryButton onClick={onMintClick} disabled={!mintEnabled}>
        Create NFT
      </SecondaryButton>
    </div>
  );
};

export default CreateNFTDialog;
