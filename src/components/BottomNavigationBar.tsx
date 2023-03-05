import { FunctionComponent, useMemo, useState } from "react";
import CSS, { Property } from "csstype";
import { useNavigate } from "react-router";
import "./BottomNavigationBar.css";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { getNotifySelector } from "../app/selectors";

type BottomNavigationBarType = {
  /** Style props */
  textColor?: Property.Color;
};

const BottomNavigationBar: FunctionComponent<BottomNavigationBarType> = ({
  textColor
}) => {
  const notify = useSelector(getNotifySelector);

  const textStyle: CSS.Properties = useMemo(() => {
    return {
      color: textColor
    };
  }, [textColor]);

  const navigation = useNavigate();
  const gotoMarket = () => {
    navigation("/");
  };
  const gotoWallet = () => {
    navigation("/wallethome");
  };
  return (
    <div className="bottomtabbar">
      <div className="home-indicator2">
        <div className="home-indicator3" />
      </div>
      <div className="tabbar">
        <button className="tabbar-item" onClick={gotoMarket}>
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/box-alt-light.svg"
          />
          <div className="text13">Market</div>
        </button>
        <button className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/molecule-light.svg"
          />
          <div className="text13">DAO</div>
        </button>
        <button className="tabbar-item" onClick={gotoWallet}>
          <Badge
            badgeContent={
              notify.event.unrecvcnt > 999 ? "?" : notify.event.unrecvcnt
            }
            color="primary"
          >
            <img
              className="box-alt-light-icon"
              alt=""
              src="../asserts/wallet-light.svg"
            />
          </Badge>
          <div className="text15" style={textStyle}>
            Wallet
          </div>
        </button>
        <button className="tabbar-item">
          <img
            className="box-alt-light-icon"
            alt=""
            src="../asserts/user-alt-light.svg"
          />
          <div className="text13">Me</div>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigationBar;
