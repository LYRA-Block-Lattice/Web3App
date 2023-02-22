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
      <TopNavigationBar title="Order Created" />
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
        boxAltLight="box-alt-light2.svg"
        moleculeLight="molecule-light2.svg"
        walletLight="wallet-light2.svg"
        userAltLight="user-alt-light2.svg"
      />
    </div>
  );
};

export default CreateOrderSuccessForm;
