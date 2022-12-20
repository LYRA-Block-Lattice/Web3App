import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SelectOfferingAndBiding.css";

const SelectOfferingAndBiding: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrepareSellOrderButton4Click = useCallback(() => {
    navigate("/selecttokenfororder");
  }, [navigate]);

  return (
    <div className="selectofferingandbiding">
      <div className="frame-div1">
        <div className="i-want-to-sell-token">I want to sell [Token]:</div>
        <button className="prepare-sell-order-button9">
          <div className="utility-button2">Select for sell</div>
        </button>
        <div className="or1">or</div>
        <button className="prepare-sell-order-button9">
          <div className="utility-button3">Mint for sell</div>
        </button>
      </div>
      <div className="frame-div2">
        <div className="buyer-should-pay-me-by">Buyer should pay me by:</div>
        <button className="prepare-sell-order-button9">
          <div className="utility-button2">Select token</div>
        </button>
        <div className="or1">or</div>
        <button className="prepare-sell-order-button9">
          <div className="utility-button2">Specify token</div>
        </button>
      </div>
      <button
        className="prepare-sell-order-button13"
        onClick={onPrepareSellOrderButton4Click}
      >
        <div className="primary-button2">Next</div>
      </button>
    </div>
  );
};

export default SelectOfferingAndBiding;
