import {
  FunctionComponent,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from "react";
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
import PrimaryButton from "../components/PrimaryButton";
import MiniButton from "../components/MiniButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./OpenWallet.css";

import * as actionTypes from "../app/actionTypes";
import { getAuthSelector, getWalletNamesSelector } from "../app/selectors";
import PrimaryButton from "../components/PrimaryButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const OpenWallet: FunctionComponent = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(true);

  const names = useSelector(getWalletNamesSelector);
  const dispatch = useDispatch();
  const auth = useSelector(getAuthSelector);
  const app = useSelector((state: any) => state.app);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (name != "" && password != "") {
      setBusy(false);
    } else {
      setBusy(true);
    }
  }, [name, password]);

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setName(event.target.value as string);
    },
    [names]
  );

  const onOpenWallet = useCallback(() => {
    console.log("names is " + names);
    console.log("selected name is " + name);

    dispatch({
      type: actionTypes.WALLET_OPEN,
      payload: {
        name: name,
        password: password,
        ret: searchParams.get("ret")
      }
    });
  }, [names, name, password, dispatch]);

  const onSignUpClick = useCallback(() => {
    navigate("/createwallet");
  }, [navigate]);

  useEffect(() => {
    if (!app.existing) navigate("/createwallet");
  }, [dispatch, app, auth, names]);

  return (
    <div className="openwallet">
      <TopNavigationBar title="Open Wallet" />
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
            value={name}
            color="primary"
            size="medium"
            label="Wallet Name"
            onChange={handleChange}
          >
            {names?.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
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
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
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
        <PrimaryButton disabled={busy} onClick={onOpenWallet}>
          Open
        </PrimaryButton>
        <MiniButton miniButton="Create" onClick={onSignUpClick} />
        <button className="forgot-password-copy">Forgot password?</button>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default OpenWallet;
