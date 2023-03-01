import { useEventCallback } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { APIResult } from "../app/blockchain/blocks/meta";
import { LongRunTask, NeedRunTask } from "../app/utils";
import { getWallet } from "../app/wallet/walletSaga";
import CreateNFTDialog from "../components/CreateNFTDialog";
import CreateTokenDialog from "../components/CreateTokenDialog";
import CreateTOTDialog from "../components/CreateTOTDialog";
import MintFiatDialog from "../components/MintFiatDialog";
import StepProgressReportDialog from "../components/StepProgressReportDialog";
import PageTemplate from "../pages/PageTemplate";
import SellFlow from "../pages/SellFlow";
import PopupTemplate from "./PopupTemplate";

const SellFlowWithPopup: FunctionComponent = () => {
  const [poped, setPoped] = useState<boolean>(false);
  const [input, setInput] = useState<any>(undefined);
  const [promises, setPromises] = useState<LongRunTask[]>([]);

  const popProgress = useCallback((init: any, promises: LongRunTask[]) => {
    setInput(init);
    setPromises(promises);
    setPoped(true);
  }, []);

  return (
    <PopupTemplate
      popup={
        <StepProgressReportDialog
          input={input}
          promises={promises}
          batchName={`Sell Order Workflow`}
          onContinue={() => setPoped(false)}
        />
      }
      popped={poped}
      onClose={() => setPoped(false)}
    >
      <SellFlow onStart={popProgress} />
    </PopupTemplate>
  );
};

export default React.memo(SellFlowWithPopup);
