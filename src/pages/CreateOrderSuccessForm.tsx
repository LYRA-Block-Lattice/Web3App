import { FunctionComponent } from "react";
import "./CreateOrderSuccessForm.css";

const CreateOrderSuccessForm: FunctionComponent = () => {
  return (
    <div className="createordersuccessform">
      <div className="success">Success!</div>
      <img className="illus8-icon" alt="" src="../asserts/illus8.svg" />
      <div className="you-order-tx-hash-is">You order TX Hash is:</div>
      <div className="blvm6g1jjkwuz8ocens7fuuswjqdr3">
        BLVm6g1JJkWUZ8oCenS7FuusWJQdR3deCwtRk6U7Rt8L
      </div>
      <a
        className="view-on-block-explorer"
        href="https://nebula.lyra.live/showblock/FuF7e1ZaBdmqB6cc5PfxitShUnR5WWNKcm59ofYPCXua"
        target="_blank"
      >
        View on block explorer
      </a>
      <button className="prepare-sell-order-button">
        <div className="secondary-button">View my orders</div>
      </button>
    </div>
  );
};

export default CreateOrderSuccessForm;
