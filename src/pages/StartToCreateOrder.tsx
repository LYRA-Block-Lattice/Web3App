import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import IWantToSelectTokenComponent from "../components/IWantToSelectTokenComponent";
import "./StartToCreateOrder.css";

const StartToCreateOrder: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrepareSellOrderButtonClick = useCallback(() => {
    navigate("/selecttokenfororder");
  }, [navigate]);

  const onTokenAction = (act:string | undefined, tok:string | undefined) => {
    //alert(`act is ${act} and token is ${tok}`);
  };

  return (
    <div className="starttocreateorder">
      <div className="frame-div3">
        <IWantToSelectTokenComponent 
          iWantToDo="Sell" 
          tokenActionClicked={onTokenAction}
          />
        <IWantToSelectTokenComponent
          iWantToDo="Get"
          tokenActionClicked={onTokenAction}
          tradeCatalogWidth="105px"
          tradeCatalogPadding="var(--padding-xs) 0px"
        />
      </div>
      <button
        className="prepare-sell-order-button2"
        onClick={onPrepareSellOrderButtonClick}
      >
        <b className="prepare-tokens">Prepare Token(s)</b>
      </button>
    </div>
  );
};

export default StartToCreateOrder;
