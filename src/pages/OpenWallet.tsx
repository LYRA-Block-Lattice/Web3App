import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  TextField,
  Input,
  Icon,
  InputAdornment,
  IconButton,
  SelectChangeEvent
} from "@mui/material";
import TopNavigationBar from "../components/TopNavigationBar";
import { useNavigate, useSearchParams } from "react-router-dom";
import TopNavigationBar from "../components/TopNavigationBar";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./OpenWallet.css";

import * as actionTypes from "../app/actionTypes";
import { getAuthSelector, getWalletNamesSelector } from "../app/selectors";

const OpenWallet: FunctionComponent = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});

  const [name, setName] = useState("");
  const [index, setIndex] = useState<number>(0);
  const [password, setPassword] = useState("");
  const names = useSelector(getWalletNamesSelector);
  const dispatch = useDispatch();
  const auth = useSelector(getAuthSelector);

  const handleChange = (event: SelectChangeEvent) => {
    setIndex(+event.target.value);
  };

  const onOpenWallet = useCallback(() => {
    console.log("names is " + names);
    console.log("selected name is " + names[index]);

    dispatch({
      type: actionTypes.WALLET_OPEN,
      payload: {
        name: names[index],
        password: password,
        ret: searchParams.get("ret")
      }
    });
  }, [names, name, index, password, dispatch]);

  const onSignUpClick = useCallback(() => {
    navigate("/create-wallet");
  }, [navigate]);

  useEffect(() => {
    if (auth.accountId != undefined && names && names.length > 0)
      setIndex(names.findIndex((a) => a == auth.walletName));
    else navigate("/create-wallet");
  }, [dispatch, auth.accountId, names]);

  return (
    <div className="openwallet">
      <TopNavigationBar
        title="Open Wallet"
        onMiniProgramsButtonsClick={onMiniProgramsButtonsClick}
        onTitleClick={onTitleClick}
        onHomeClick={onHomeClick}
        separator="../asserts/separator10.svg"
        onContextPlusClick={onContextPlusClick}
        rectangle1="../asserts/rectangle-111.svg"
        iconleft="../asserts/iconleft.svg"
        ellipse="../asserts/ellipse.svg"
        ellipse1="../asserts/ellipse1.svg"
        vector7="../asserts/vector-7.svg"
        vector8="../asserts/vector-8.svg"
      />
      <div className="illus5-copy-parent">
        <img
          className="illus5-copy-icon"
          alt=""
          src="../asserts/illus5-copy.svg"
        />
        <FormControl
          className="wallet-name1"
          sx={{ width: 343 }}
          variant="standard"
        >
          <InputLabel color="primary">Wallet Name</InputLabel>
          <Select
            color="primary"
            size="medium"
            label="Wallet Name"
            onChange={handleChange}
            value={index.toString()}
          >
            {names?.map((name: any, index: any) => (
              <MenuItem key={index} value={index}>
                {name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText />
        </FormControl>
        <TextField
          className="password"
          sx={{ width: 330 }}
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
          placeholder="Placeholder"
          size="medium"
          margin="none"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="prepare-sell-order-button18" onClick={onOpenWallet}>
          <div className="primary-button7">Open</div>
        </button>
        <button className="prepare-sell-order-button19">
          <div className="mini-button5">Create</div>
        </button>
        <button className="forgot-password-copy">Forgot password?</button>
      </div>
      <BottomNavigationBar
        boxAltLight1="../asserts/box-alt-light.svg"
        moleculeLight1="../asserts/molecule-light.svg"
        walletLight1="../asserts/wallet-light.svg"
        userAltLight1="../asserts/user-alt-light.svg"
        textColor="#434343"
        textColor1="#0ebd8d"
      />
    </div>
  );
};

export default OpenWallet;
