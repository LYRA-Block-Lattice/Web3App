import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideMenuPopup from "../components/SideMenuPopup";
import PortalDrawer from "../components/PortalDrawer";
import "./WalletToolBar.css";
import { useDispatch, useSelector } from "react-redux";
import { getAuthSelector } from "../app/selectors";
import * as actionTypes from "../app/actionTypes";

const WalletToolBar: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(getAuthSelector);
  const [isSideMenuPopupOpen, setSideMenuPopupOpen] = useState(false);

  const onSwapButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSendButtonClick = useCallback(() => {
    navigate("/sendtokenform");
  }, [navigate]);

  const onReceiveButtonClick = useCallback(() => {
    if (!auth.hasKey) navigate("/openwallet");
    else
      dispatch({
        type: actionTypes.WALLET_RECEIVE,
        payload: auth.accountId
      });
  }, [navigate]);

  const openSideMenuPopup = useCallback(() => {
    setSideMenuPopupOpen(true);
  }, []);

  const closeSideMenuPopup = useCallback(() => {
    setSideMenuPopupOpen(false);
  }, []);

  return (
    <>
      <div className="iconssection-wrapper">
        <div className="iconssection">
          <div className="swap-button-group">
            <button className="send-button" onClick={onSwapButtonClick}>
              <img
                className="home-icon-interlocution5"
                alt=""
                src="../asserts/home--icon--interlocution5.svg"
              />
              <div className="ranking5">Market</div>
            </button>
            <button className="send-button">
              <img
                className="home-icon-interlocution5"
                alt=""
                src="../asserts/home--icon--interlocution6.svg"
              />
              <div className="ranking5">Swap</div>
            </button>
            <button className="send-button" onClick={onSendButtonClick}>
              <img
                className="home-icon-interlocution5"
                alt=""
                src="../asserts/home--icon--interlocution7.svg"
              />
              <div className="ranking5">Send</div>
            </button>
            <button className="send-button" onClick={onReceiveButtonClick}>
              <img
                className="home-icon-interlocution5"
                alt=""
                src="../asserts/home--icon--interlocution8.svg"
              />
              <div className="ranking5">Receive</div>
            </button>
            <button className="send-button" onClick={openSideMenuPopup}>
              <img
                className="home-icon-interlocution5"
                alt=""
                src="../asserts/home--icon--interlocution9.svg"
              />
              <div className="ranking5">More...</div>
            </button>
          </div>
        </div>
      </div>
      {isSideMenuPopupOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeSideMenuPopup}
        >
          <SideMenuPopup onClose={closeSideMenuPopup} />
        </PortalDrawer>
      )}
    </>
  );
};

export default WalletToolBar;
