import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import { useNavigate } from "react-router-dom";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./CreateOrderSuccessForm.css";

const CreateOrderSuccessForm: FunctionComponent = () => {
  const navigate = useNavigate();

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
      <TopNavigationBar
        title="Order Created"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
        iconleft="../asserts/iconleft1.svg"
        icroundPlus="../asserts/icroundplus12.svg"
      />
      <div className="success-parent">
        <div className="success">Success!</div>
        <img className="illus8-icon" alt="" src="../asserts/illus8.svg" />
        <div className="you-order-tx">You order TX Hash is:</div>
        <div className="blvm6g1jjkwuz8ocens7fuuswjqdr3">
          BLVm6g1JJkWUZ8oCenS7FuusWJQdR3deCwtRk6U7Rt8L
        </div>
        <a
          className="view-on-block"
          href="https://nebula.lyra.live/showblock/FuF7e1ZaBdmqB6cc5PfxitShUnR5WWNKcm59ofYPCXua"
          target="_blank"
        >
          View on block explorer
        </a>
        <button className="buttons6" onClick={onButtonsClick}>
          <div className="secondary-button4">View my orders</div>
        </button>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default CreateOrderSuccessForm;
