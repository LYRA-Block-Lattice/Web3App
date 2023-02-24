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
          <div className="swap-button-parent">
            <button className="swap-button" onClick={onSwapButtonClick}>
              <img
                className="home-icon-interlocution"
                alt=""
                src="../asserts/home--icon--interlocution5.svg"
              />
              <div className="ranking">Market</div>
            </button>
            <button className="swap-button">
              <img
                className="home-icon-interlocution"
                alt=""
                src="../asserts/home--icon--interlocution6.svg"
              />
              <div className="ranking">Swap</div>
            </button>
            <button className="swap-button" onClick={onSendButtonClick}>
              <img
                className="home-icon-interlocution"
                alt=""
                src="../asserts/home--icon--interlocution7.svg"
              />
              <div className="ranking">Send</div>
            </button>
            <button className="swap-button" onClick={onReceiveButtonClick}>
              <img
                className="home-icon-interlocution"
                alt=""
                src="../asserts/home--icon--interlocution8.svg"
              />
              <div className="ranking">Receive</div>
            </button>
            <button className="swap-button" onClick={openSideMenuPopup}>
              <img
                className="home-icon-interlocution"
                alt=""
                src="../asserts/home--icon--interlocution9.svg"
              />
              <div className="ranking">More...</div>
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
