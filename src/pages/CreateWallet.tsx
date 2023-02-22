import { FunctionComponent, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  TextField,
  Input,
  Icon,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as actionTypes from "../app/actionTypes";
import "./CreateWallet.css";

const CreateWallet: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [chkkey, setChkkey] = useState("");
  const [pvk, setPvk] = useState("");

  const onOpenWalletLinkClick = useCallback(() => {
    navigate("/open-wallet");
  }, [navigate]);

  const onWalletCreate = useCallback(() => {
    // check if password and password2 equal
    if (name != "" && password === password2) {
      if (chkkey === "on" && pvk !== "") {
        dispatch({
          type: actionTypes.WALLET_RESTORE,
          payload: {
            name: name,
            password: password,
            privateKey: pvk
          }
        });
      } else
        dispatch({
          type: actionTypes.WALLET_CREATE,
          payload: {
            name: name,
            password: password
          }
        });
    }
  }, [dispatch, name, password, password2, chkkey, pvk]);

  return (
    <div className="createwallet">
      <b className="sign-up">Create Wallet</b>
      <div className="illus1">
        <img className="illus1-child" alt="" src="../asserts/group-3.svg" />
        <div className="group-parent">
          <img className="frame-item" alt="" src="../asserts/group-42.svg" />
          <div className="create-account">
            C<span className="r">r</span>
            <span className="e">e</span>a<span className="t">t</span>
            {`e `}
            <span className="a">A</span>
            <span className="cc">cc</span>ount
          </div>
          <img className="fill-43-icon" alt="" src="../asserts/fill-43.svg" />
          <img
            className="email-address-icon"
            alt=""
            src="../asserts/email-address.svg"
          />
          <img
            className="youremailgmailc-icon"
            alt=""
            src="../asserts/youremailgmailc.svg"
          />
          <img className="frame-inner" alt="" src="../asserts/group-49.svg" />
          <img
            className="your-text-icon"
            alt=""
            src="../asserts/your-text.svg"
          />
          <img className="group-icon" alt="" src="../asserts/group-53.svg" />
          <img
            className="your-city-icon"
            alt=""
            src="../asserts/your-city.svg"
          />
          <img className="frame-child1" alt="" src="../asserts/group-57.svg" />
          <img
            className="entry-password-icon"
            alt=""
            src="../asserts/entry-password.svg"
          />
          <img className="frame-child2" alt="" src="../asserts/group-145.svg" />
        </div>
      </div>
      <TextField
        className="wallet-name"
        sx={{ width: 343 }}
        color="primary"
        variant="standard"
        type="text"
        label="Wallet Name"
        size="medium"
        margin="none"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        className="wallet-name"
        sx={{ width: 343 }}
        color="primary"
        variant="standard"
        type="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility">
                <Icon>visibility</Icon>
              </IconButton>
            </InputAdornment>
          )
        }}
        label="Password"
        size="medium"
        margin="none"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        className="wallet-name"
        sx={{ width: 343 }}
        color="primary"
        variant="standard"
        type="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility">
                <Icon>visibility</Icon>
              </IconButton>
            </InputAdornment>
          )
        }}
        label="Confirm password"
        size="medium"
        margin="none"
        required
        onChange={(e) => setPassword2(e.target.value)}
      />
      <FormControlLabel
        label="I want to restore wallet by Private Key"
        labelPlacement="end"
        control={
          <Checkbox
            color="primary"
            size="medium"
            onChange={(e) => setChkkey(e.target.value)}
          />
        }
      />
      <TextField
        className="wallet-name"
        sx={{ width: 343 }}
        color="primary"
        variant="standard"
        type="text"
        label="Private Key"
        placeholder="Placeholder"
        size="medium"
        margin="none"
        onChange={(e) => setPvk(e.target.value)}
      />
      <button className="create-wallet" onClick={onWalletCreate}>
        <div className="button-shape" />
        <div className="createlabel">Create</div>
      </button>
      <button className="open-wallet-link" onClick={onOpenWalletLinkClick}>
        Open Wallet
      </button>
    </div>
  );
};

export default CreateWallet;
