import { FunctionComponent, useCallback, useState } from "react";
import { TextField } from "@mui/material";
import SecondaryButton from "../components/SecondaryButton";
import "./CreateTokenForm.css";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../app/actionTypes";
import { getAppSelector } from "../app/selectors";

type TokenMintProps = {
  onClose?: (ticker?: string) => void;
  children?: React.ReactNode;
  tag?: string;
};

const CreateTokenForm: FunctionComponent<TokenMintProps> = (props) => {
  const dispatch = useDispatch();
  const app = useSelector(getAppSelector);

  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [domain, setDomain] = useState<string>("");
  const [supply, setSupply] = useState<number>(0);

  const onMintClick = useCallback(() => {
    console.log("mint token.");
    dispatch({
      type: actionTypes.WALLET_MINT_TOKEN,
      payload: {
        accountId: app.wallet.accountId,
        name: name,
        desc: desc,
        domain: domain,
        supply: supply,
        tag: "mint " + name
      }
    });
  }, [name, desc, domain, supply]);

  return (
    <div className="createtokenform">
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
        onChange={(e) => setName(e.target.value)}
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
        className="token-name"
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
      <SecondaryButton onClick={onMintClick}>Mint Token</SecondaryButton>
    </div>
  );
};

export default CreateTokenForm;
