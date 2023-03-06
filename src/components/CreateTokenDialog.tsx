import { FunctionComponent, useCallback, useState } from "react";
import { TextField } from "@mui/material";
import SecondaryButton from "../components/SecondaryButton";
import "./CreateTokenDialog.css";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../app/actionTypes";
import { getAppSelector } from "../app/selectors";
import { LongRunTask, NeedRunTask } from "../app/utils";
import { getWallet } from "../app/wallet/walletSaga";
import { ContractTypes } from "../app/blockchain";

const CreateTokenDialog: FunctionComponent<NeedRunTask> = (props) => {
  const dispatch = useDispatch();
  const app = useSelector(getAppSelector);

  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [domain, setDomain] = useState<string>("");
  const [supply, setSupply] = useState<number>(0);

  const onMintClick = useCallback(() => {
    console.log("mint token.");

    const promises: LongRunTask[] = [
      {
        promise: () => {
          const wallet = getWallet();

          return wallet.mintToken(
            name,
            domain,
            desc,
            8,
            supply,
            true,
            undefined,
            undefined,
            undefined,
            ContractTypes.Cryptocurrency,
            undefined
          );
        },
        callback: null,
        name: "Mint Token " + name,
        description: "Submit genesis block to Lyra Blockchain."
      }
    ];

    if (props.onStart) props.onStart("Mint Token", null, promises);
    // dispatch({
    //   type: actionTypes.WALLET_MINT_TOKEN,
    //   payload: {
    //     accountId: app.wallet.accountId,
    //     name: name,
    //     desc: desc,
    //     domain: domain,
    //     supply: supply,
    //     tag: "mint " + name
    //   }
    // });
  }, [name, desc, domain, supply]);
  return (
    <div className="createtokendialog">
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
        onChange={(e) => setName(e.target.value)}
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
        onChange={(e) => setDomain(e.target.value)}
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
        onChange={(e) => setDesc(e.target.value)}
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
        onChange={(e) => setSupply(+e.target.value)}
      />
      <SecondaryButton secondaryButton="Mint Token" onClick={onMintClick} />
    </form>
  );
};

export default CreateTokenDialog;
