import { useEventCallback } from "@mui/material";
import React from "react";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { APIResult } from "../app/blockchain/blocks/meta";
import { LongRunTask } from "../app/utils";
import CreateTokenDialog from "../components/CreateTokenDialog";
import StepProgressReportDialog from "../components/StepProgressReportDialog";
import PageTemplate from "../pages/PageTemplate";
import PopupTemplate from "./PopupTemplate";

const promises: LongRunTask[] = [
  {
    promise: () =>
      new Promise<APIResult>((resolve) =>
        setTimeout(() => {
          console.log("Promise 1 resolved");
          resolve(new APIResult());
        }, 1000)
      ),
    callback: null,
    name: "Promise 1",
    description: "Wait 1 second"
  },
  {
    promise: () =>
      new Promise<APIResult>((resolve, reject) =>
        setTimeout(() => {
          console.log("Promise 2 rejected");
          //reject(new Error("Promise 2 error"));
          resolve(new APIResult());
        }, 2000)
      ),
    callback: null,
    name: "Promise 2",
    description: "Wait 2 seconds and reject with an error"
  }
];

const MinterToken = () => {
  const [poped, setPoped] = useState<boolean>(false);

  const popProgress = useCallback(() => {
    setPoped(true);
  }, []);

  console.log("render MinterToken");

  return (
    <PageTemplate title="Mint Token">
      <PopupTemplate
        popup={
          <StepProgressReportDialog
            promises={promises}
            batchName="Mint token"
          />
        }
        popped={poped}
        onClose={() => setPoped(false)}
      >
        <CreateTokenDialog onStart={popProgress} />
      </PopupTemplate>
    </PageTemplate>
  );
};

export default React.memo(MinterToken);
