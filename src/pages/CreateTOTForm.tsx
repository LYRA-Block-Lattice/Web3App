import { FunctionComponent, useState, useCallback } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  TextField
} from "@mui/material";
import SignTradeSecretPopup from "../components/SignTradeSecretPopup";
import PortalPopup from "../components/PortalPopup";
import UtilityButton from "../components/UtilityButton";
import SecondaryButton from "../components/SecondaryButton";
import "./CreateTOTForm.css";
import { useDispatch, useSelector } from "react-redux";
import { getAppSelector } from "../app/selectors";

type TokenMintProps = {
  onClose?: (ticker?: string) => void;
  children?: React.ReactNode;
  tag?: string;
};

const holdTypes: any = {
  Goods: "TOT",
  Service: "SVC",
  "Generic Trade only Token": "TOT"
};

const CreateTOTForm: FunctionComponent<TokenMintProps> = (props) => {
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

  const onMintClick = useCallback(() => {
    console.log("Creating TOT...");
    dispatch({
      type: "WALLET_MINT_TOT",
      payload: {
        accountId: app.wallet.accountId,
        type: holdTypes[tott],
        name: name,
        description: desc,
        supply: supply,
        tradeSecretSignature: tssign
      }
    });
  }, [tott, name, desc, supply, tssign]);

  return (
    <>
      <div className="createtotform">
        <div className="createtottosellform">
          <div className="create-and-sell">Create and Sell [TOT/SKU]</div>
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
            className="tot-name"
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
            className="tot-name"
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
          <UtilityButton
            openGeneralPopup={openSignTradeSecretPopup}
            utilityButton="Sign trade secret"
          />
          <div className="note-i-need">
            Note: I need to send trade secret privately to buyer(s).
          </div>
          <SecondaryButton secondaryButton="Create TOT" onClick={onMintClick}/>
        </form>
      </div>
      {isSignTradeSecretPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignTradeSecretPopup}
        >
          <SignTradeSecretPopup onClose={closeSignTradeSecretPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default CreateTOTForm;
