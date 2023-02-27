import { useEventCallback } from "@mui/material";
import React from "react";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import CreateTokenDialog from "../components/CreateTokenDialog";
import StepProgressReportDialog from "../components/StepProgressReportDialog";
import PageTemplate from "../pages/PageTemplate";
import PopupTemplate from "./PopupTemplate";

const MinterToken = () => {
  const [poped, setPoped] = useState<boolean>(false);

  const popProgress = useCallback(() => {
    setPoped(true);
  }, []);

  console.log("render MinterToken");

  return (
    <PageTemplate title="Mint Token">
      <PopupTemplate
        popup={<StepProgressReportDialog />}
        popped={poped}
        onClose={() => setPoped(false)}
      >
        <CreateTokenDialog onStart={popProgress} />
      </PopupTemplate>
    </PageTemplate>
  );
};

export default React.memo(MinterToken);
