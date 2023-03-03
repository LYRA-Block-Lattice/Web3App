import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from "@mui/material";
import { FunctionComponent, useCallback, useEffect } from "react";
import "./SideMenuPopup.css";
import SendIcon from "@mui/icons-material/Send";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import React from "react";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAppSelector, getAuthSelector } from "../app/selectors";
import * as actionTypes from "../app/actionTypes";
import { Link } from "react-router-dom";

type SideMenuPopupType = {
  onClose?: () => void;
};

const SideMenuPopup: FunctionComponent<SideMenuPopupType> = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const app = useSelector(getAppSelector);
  const auth = useSelector(getAuthSelector);

  const [open, setOpen] = React.useState(true);

  const closeWallet = useCallback(() => {
    dispatch({ type: actionTypes.WALLET_CLOSE });
  }, []);

  const openWallet = useCallback(() => {
    navigate("/openwallet");
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="sidemenupopup main-content" data-animate-on-scroll>
      <div className="frame-container">
        <div className="vector-parent">
          <img className="vector-icon8" alt="" src="../asserts/vector10.svg" />
          <div className="lyra-web3-ecommerce">Lyra Web3 eCommerce</div>
        </div>
        <List
          sx={{ width: "100%", maxWidth: 360 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          // subheader={
          //   <ListSubheader component="div" id="nested-list-subheader">
          //     Nested List Items
          //   </ListSubheader>
          // }
        >
          {/* <ListItemButton>
            <ListItemIcon>
              <SendIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ color: "white" }}>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse> */}
          {auth?.hasKey && (
            <React.Fragment>
              <Divider sx={{ color: "white" }} />
              <ListItemButton onClick={closeWallet}>
                <ListItemIcon>
                  <SendIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Close Wallet" />
              </ListItemButton>
            </React.Fragment>
          )}
          {!auth?.hasKey && (
            <React.Fragment>
              <Divider sx={{ color: "white" }} />
              <ListItemButton onClick={openWallet}>
                <ListItemIcon>
                  <SendIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Open Wallet" />
              </ListItemButton>
            </React.Fragment>
          )}
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <Link to="/about" className="no-decoration">
              <ListItemText primary="About" />
            </Link>
          </ListItemButton>
        </List>
        {/* <div className="administration">
          <div className="component-2variant3">
            <div className="nav-item">
              <div className="administration">
                <div className="left">
                  <div className="administration-1">
                    <img
                      className="administration-1-icon"
                      alt=""
                      src="../asserts/administration-1@2x.png"
                    />
                  </div>
                  <div className="promotion">Token Mint</div>
                </div>
              </div>
              <img
                className="arrow-chevron-down-icon"
                alt=""
                src="../asserts/arrowchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className="administration">
          <div className="component-2variant3">
            <div className="nav-item">
              <div className="administration">
                <div className="left">
                  <div className="administration-1">
                    <img
                      className="administration-1-icon"
                      alt=""
                      src="../asserts/promotion-1@2x.png"
                    />
                  </div>
                  <div className="promotion">Promotion</div>
                </div>
              </div>
              <img
                className="arrow-chevron-down-icon"
                alt=""
                src="../asserts/arrowchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className="administration">
          <div className="component-2variant3">
            <div className="nav-item">
              <div className="administration">
                <div className="left">
                  <div className="administration-1">
                    <img
                      className="administration-1-icon"
                      alt=""
                      src="../asserts/customerloyalty-1@2x.png"
                    />
                  </div>
                  <div className="promotion">Loyalty</div>
                </div>
              </div>
              <img
                className="arrow-chevron-down-icon"
                alt=""
                src="../asserts/arrowchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className="administration">
          <div className="component-2variant3">
            <div className="nav-item">
              <div className="administration">
                <div className="left">
                  <div className="administration-1">
                    <img
                      className="administration-1-icon"
                      alt=""
                      src="../asserts/productmanagement-1@2x.png"
                    />
                  </div>
                  <div className="promotion">Product Management</div>
                </div>
              </div>
              <img
                className="arrow-chevron-down-icon"
                alt=""
                src="../asserts/arrowchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className="administration">
          <div className="administration">
            <div className="component-2variant3">
              <div className="nav-item">
                <div className="administration">
                  <div className="left">
                    <div className="administration-1">
                      <img
                        className="administration-1-icon"
                        alt=""
                        src="../asserts/sale-2-1@2x.png"
                      />
                    </div>
                    <div className="promotion">Sales</div>
                  </div>
                </div>
                <img
                  className="arrow-chevron-down-icon"
                  alt=""
                  src="../asserts/arrowchevrondown.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="administration">
          <div className="administration">
            <div className="administration">
              <div className="component-2variant3">
                <div className="nav-item">
                  <div className="administration">
                    <div className="left">
                      <div className="administration-1">
                        <img
                          className="administration-1-icon"
                          alt=""
                          src="../asserts/order-2@2x.png"
                        />
                      </div>
                      <div className="promotion">Orders</div>
                    </div>
                  </div>
                  <img
                    className="arrow-chevron-down-icon"
                    alt=""
                    src="../asserts/arrowchevrondown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="administration">
          <div className="component-2variant3">
            <div className="nav-item">
              <div className="administration">
                <div className="left">
                  <div className="administration-1">
                    <img
                      className="administration-1-icon"
                      alt=""
                      src="../asserts/supplychainmanagement-2@2x.png"
                    />
                  </div>
                  <div className="promotion">Supply Chain</div>
                </div>
              </div>
              <img
                className="arrow-chevron-down-icon"
                alt=""
                src="../asserts/arrowchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className="administration">
          <div className="administration">
            <div className="component-2variant3">
              <div className="nav-item">
                <div className="administration">
                  <div className="left">
                    <div className="administration-1">
                      <img
                        className="administration-1-icon"
                        alt=""
                        src="../asserts/security-1@2x.png"
                      />
                    </div>
                    <div className="promotion">Security</div>
                  </div>
                </div>
                <img
                  className="arrow-chevron-down-icon"
                  alt=""
                  src="../asserts/arrowchevrondown.svg"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SideMenuPopup;
