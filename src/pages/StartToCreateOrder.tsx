import { setegid } from "process";
import { FunctionComponent, useCallback, LegacyRef, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CatalogSelection from "../components/CatalogSelection";
import "./StartToCreateOrder.css";
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
import { refType } from "@mui/utils";

const boxStyle = {border: "grey solid 2px", borderRadius: "10px", padding: "5px"};

const StartToCreateOrder: FunctionComponent = () => {
  const [start, setStart] = useState<string|undefined>();
  const [end, setEnd] = useState<string|undefined>();
  const [isDisabled, setDisabled] = useState<boolean>(true);

  const navigate = useNavigate();

  const onPrepareSellOrderButtonClick = useCallback(() => {
    navigate("/selltokentotoken");
  }, [navigate]);

  const onTokenAction = (act:string | undefined, tok:string | undefined, xref: LegacyRef<HTMLButtonElement> | undefined) => {
    if(act === "Sell")
    {
      setStart(tok);
    }
    else
    {
      setEnd(tok);
    }
    if(isDisabled && start != undefined && end != undefined) {
      setDisabled(false);
    }
    //
  };

  return (
    <div className="starttocreateorder">
      <div className="choose-the-catalog">Choose the catalog</div>
      <div className="catalog-section">
      <Xwrapper>
             <Xarrow showXarrow={start != null && end != null} start={`Sell-${start}`} end={`Get-${end}`}/>
        
        <CatalogSelection key="sell" iWantTo="Sell" tokenActionClicked={onTokenAction}/>
        <div className="catalog-section-child" />
        <CatalogSelection key="get" iWantTo="Get" tokenActionClicked={onTokenAction}/>
        </Xwrapper>
      </div>
      <button
        className="prepare-sell-order-button18"
        disabled={isDisabled}
        onClick={onPrepareSellOrderButtonClick}
      >
        <div className="primary-button10">Specify Token</div>
      </button>
    </div>
  );
};

export default StartToCreateOrder;
