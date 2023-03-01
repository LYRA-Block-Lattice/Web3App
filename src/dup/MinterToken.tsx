import { useEventCallback } from "@mui/material";
import React from "react";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { APIResult } from "../app/blockchain/blocks/meta";
import { LongRunTask } from "../app/utils";
import { getWallet } from "../app/wallet/walletSaga";
import CreateNFTDialog from "../components/CreateNFTDialog";
import CreateTokenDialog from "../components/CreateTokenDialog";
import CreateTOTDialog from "../components/CreateTOTDialog";
import MintFiatDialog from "../components/MintFiatDialog";
import StepProgressReportDialog from "../components/StepProgressReportDialog";
import PageTemplate from "../pages/PageTemplate";
import PopupTemplate from "./PopupTemplate";

interface Props {
  cat: string;
}

const MinterToken = (props: Props) => {
  const [poped, setPoped] = useState<boolean>(false);
  const [input, setInput] = useState<any>(undefined);
  const [promises, setPromises] = useState<LongRunTask[]>([]);

  const popProgress = useCallback((init: any, promises: LongRunTask[]) => {
    setInput(init);
    setPromises(promises);
    setPoped(true);
  }, []);

  console.log("render Minter Token");

  return (
    <PageTemplate title={`Mint ${props.cat}`}>
      <PopupTemplate
        popup={
          <StepProgressReportDialog
            input={input}
            promises={promises}
            batchName={`Mint ${props.cat}`}
            onContinue={() => setPoped(false)}
          />
        }
        popped={poped}
        onClose={() => setPoped(false)}
      >
        {props.cat === "Token" && <CreateTokenDialog onStart={popProgress} />}
        {props.cat === "NFT" && <CreateNFTDialog onStart={popProgress} />}
        {props.cat === "Fiat" && <MintFiatDialog onStart={popProgress} />}
        {props.cat === "Goods" && <CreateTOTDialog onStart={popProgress} />}
        {props.cat === "Service" && <CreateTOTDialog onStart={popProgress} />}
      </PopupTemplate>
    </PageTemplate>
  );
};

export default React.memo(MinterToken);
