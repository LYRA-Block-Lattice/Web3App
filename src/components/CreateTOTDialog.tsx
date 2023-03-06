import { FunctionComponent, useCallback, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  TextField
} from "@mui/material";
import UtilityButton from "../components/UtilityButton";
import SecondaryButton from "../components/SecondaryButton";
import "./CreateTOTDialog.css";
import { LongRunTask, NeedRunTask } from "../app/utils";
import { useSelector, useDispatch } from "react-redux";
import { getAppSelector } from "../app/selectors";
import PortalPopup from "./PortalPopup";
import SignTradeSecretPopup from "./SignTradeSecretPopup";
import { getWallet } from "../app/wallet/walletSaga";
import { LyraCrypto } from "../app/blockchain";

const holdTypes: any = {
  Goods: "TOT",
  Service: "SVC",
  "Generic Trade only Token": "TOT"
};

const CreateTOTDialog: FunctionComponent<NeedRunTask> = (props) => {
  const app = useSelector(getAppSelector);
  const dispatch = useDispatch();

  const [tott, setTott] = useState("Goods");
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [supply, setSupply] = useState<number>(1);

  // signature for trade secret.
  const [tssign, setTssign] = useState<string | undefined>(undefined);

  const totTypeChanged = useCallback(
    (e: any) => {
      e.preventDefault();
      setTott(e.target.value);
    },
    [tott]
  );

  const [isSignTradeSecretPopupOpen, setSignTradeSecretPopupOpen] =
    useState(false);

  const openSignTradeSecretPopup = useCallback(() => {
    setSignTradeSecretPopupOpen(true);
  }, []);

  const closeSignTradeSecretPopup = useCallback(() => {
    setSignTradeSecretPopupOpen(false);
  }, []);

  const onSecretChanged = useCallback((secret: string) => {
    setSignTradeSecretPopupOpen(false);
    if (secret) {
      const userToken = JSON.parse(sessionStorage.getItem("token")!);
      const apisign = LyraCrypto.Sign(secret, userToken.pvt);
      setTssign(apisign);
    }
  }, []);

  const onMintClick = useCallback(() => {
    console.log("Creating TOT...");
    const promises: LongRunTask[] = [
      {
        promise: (input) =>
          new Promise(async (resolve, reject) => {
            const wallet = getWallet();

            const balanceResp = await wallet.createTOT(
              input.type,
              input.name,
              input.description,
              input.supply,
              input.tradeSecretSignature,
              input.descSignature,
              input.owner
            );
            if (balanceResp.resultCode == 0) {
              resolve({ ...input, balanceResp: balanceResp });
            } else {
              reject(balanceResp.resultMessage);
            }
          }),
        callback: null,
        name: "Mint Trade only Token",
        description: "Send block to Lyra consensus network."
      }
    ];
    if (props.onStart) {
      const ret = props.onStart(
        "Mint trade only token",
        {
          type: holdTypes[tott],
          name: name,
          description: desc,
          supply: supply,
          tradeSecretSignature: tssign
        },
        promises
      );
      console.log(ret);
    }
    // dispatch({
    //   type: "WALLET_MINT_TOT",
    //   payload: {
    //     accountId: app.wallet.accountId,
    //     type: holdTypes[tott],
    //     name: name,
    //     description: desc,
    //     supply: supply,
    //     tradeSecretSignature: tssign
    //   }
    // });
  }, [tott, name, desc, supply, tssign]);

  return (
    <div className="createtotdialog">
      <div className="createtottosellform1">
        <div className="create-and-sell1">Create and Sell [TOT/SKU]</div>
        <FormControl sx={{ width: 301 }} variant="outlined">
          <InputLabel color="primary">Select Type of TOT</InputLabel>
          <Select
            color="primary"
            size="medium"
            label="Select Type of TOT"
            onChange={totTypeChanged}
          >
            <MenuItem value="Goods">Goods</MenuItem>
            <MenuItem value="Service">Service</MenuItem>
            <MenuItem value="Generic Trade only Token">
              Generic Trade only Token
            </MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <TextField
          className="tot-name1"
          sx={{ width: 301 }}
          color="primary"
          variant="outlined"
          type="text"
          label="TOT Name"
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
          label="Public Description, seen by everyone"
          placeholder="Introduct to my token"
          margin="none"
          onChange={(e) => setDesc(e.target.value)}
        />
        <TextField
          className="tot-name1"
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
        <UtilityButton onClick={openSignTradeSecretPopup}>
          Sign trade secret
        </UtilityButton>
        <div className="note-i-need1">
          Note: I need to send trade secret privately to buyer(s).
        </div>
        <SecondaryButton onClick={onMintClick}>Create TOT</SecondaryButton>
      </div>
      {isSignTradeSecretPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignTradeSecretPopup}
        >
          <SignTradeSecretPopup onClose={onSecretChanged} />
        </PortalPopup>
      )}
    </div>
  );
};

export default CreateTOTDialog;
