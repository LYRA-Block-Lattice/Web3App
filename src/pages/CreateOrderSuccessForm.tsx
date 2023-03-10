import { FunctionComponent, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import TopNavigationBar from "../components/TopNavigationBar";
import SecondaryButton from "../components/SecondaryButton";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./CreateOrderSuccessForm.css";
import { BlockchainAPI } from "../app/blockchain";

const CreateOrderSuccessForm: FunctionComponent = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});
  const tx = searchParams.get("tx");

  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onContextMenuButtonClick = useCallback(() => {
    //TODO: context menu
  }, []);

  const onButtonsClick = useCallback(() => {
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
          rel="noopener"
          className="view-on-block"
          href={BlockchainAPI.getBlockExplorerUrl(tx!)}
          target="_blank"
        >
          View on block explorer
        </a>
        <SecondaryButton onClick={onButtonsClick} />
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default CreateOrderSuccessForm;
