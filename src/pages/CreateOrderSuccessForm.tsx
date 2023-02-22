import { FunctionComponent, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BottomNavigationBar from "../components/BottomNavigationBar";
import TopNavigationBar from "../components/TopNavigationBar";
import "./CreateOrderSuccessForm.css";

const CreateOrderSuccessForm: FunctionComponent = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});
  const tx = searchParams.get("tx");

  const onPrepareSellOrderButtonClick = useCallback(() => {
    navigate("/viewordersform");
  }, [navigate]);

  return (
    <div className="createordersuccessform">
      <nav className="navigation28">
        <button
          className="mini-programs-buttons16"
          onClick={onMiniProgramsButtonsClick}
        >
          <img className="iconleft8" alt="" src="../asserts/iconleft4.svg" />
        </button>
        <button className="title13" onClick={onTitleClick}>
          Order Created
        </button>
        <div className="mini-programs-buttons17">
          <div className="stroke8" />
          <button className="home8" onClick={onHomeClick}>
            <img
              className="ellipse-icon16"
              alt=""
              src="../asserts/ellipse8.svg"
            />
            <img
              className="ellipse-icon17"
              alt=""
              src="../asserts/ellipse9.svg"
            />
          </button>
          <img
            className="separator-icon8"
            alt=""
            src="../asserts/separator4.svg"
          />
          <button
            className="navigationprepare-sell-order8"
            onClick={onNavigationPrepareSellOrderClick}
          >
            <img
              className="navigationprepare-sell-order-child20"
              alt=""
              src="../asserts/rectangle-18.svg"
            />
            <img
              className="navigationprepare-sell-order-child21"
              alt=""
              src="../asserts/vector-74.svg"
            />
            <img
              className="navigationprepare-sell-order-child22"
              alt=""
              src="../asserts/vector-84.svg"
            />
          </button>
        </div>
      </nav>
      <div className="success-parent">
        <div className="success">Success!</div>
        <img className="illus8-icon" alt="" src="../asserts/illus8.svg" />
        <div className="you-order-tx">You order TX Hash is:</div>
        <div className="blvm6g1jjkwuz8ocens7fuuswjqdr3">{tx}</div>
        <a
          className="view-on-block"
          href="https://nebula.lyra.live/showblock/{tx}"
          target="_blank"
        >
          View on block explorer
        </a>
        <button
          className="prepare-sell-order-button12"
          onClick={onPrepareSellOrderButtonClick}
        >
          <div className="secondary-button3">View my orders</div>
        </button>
      </div>
      <BottomNavigationBar
        boxAltLight1="../asserts/box-alt-light4.svg"
        moleculeLight1="../asserts/molecule-light4.svg"
        walletLight1="../asserts/wallet-light4.svg"
        userAltLight1="../asserts/user-alt-light4.svg"
        textColor="#434343"
        textColor1="#0ebd8d"
      />
    </div>
  );
};

export default CreateOrderSuccessForm;
