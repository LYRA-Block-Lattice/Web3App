import { CircularProgress } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { APIResult } from "../app/blockchain/blocks/meta";
import { BatchRunLongRunTask, LongRunTask } from "../app/utils";
import SecondaryButton from "../components/SecondaryButton";
import "./StepProgressReportDialog.css";

interface LongRunTaskListProps {
  batchName: string;
  input: any;
  promises: LongRunTask[];
  onContinue: () => void;
  onResult?: (result: any) => void;
  onError?: (error: any) => void;
}

const StepProgressReportDialog: FunctionComponent<LongRunTaskListProps> = (
  arg
) => {
  const [running, setRunning] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean | undefined>(undefined);
  const [errmsg, setErrmsg] = useState("");
  const [step, setStep] = useState(0);

  useEffect(() => {
    setRunning(true);
    BatchRunLongRunTask(arg.input, arg.promises, (index, total) => {
      console.log(`Completed ${index} of ${total} promises`);
      setStep(index);
    })
      .then((result) => {
        console.log("BatchRunLongRunTask result", result);
        setSuccess(true);
        if (arg.onResult) arg.onResult(result);
      })
      .catch((error) => {
        console.log("BatchRunLongRunTask error", error);
        setSuccess(false);
        setErrmsg(error.toString());
        if (arg.onError) arg.onError(error);
      });
  }, [arg]);

  useEffect(() => {
    if (success != undefined) {
      setRunning(false);
    }
  }, [success]);

  const getStatus = (index: number) => {
    //console.log("getStatus", index, step, success);
    if (success === undefined && index + 1 < step) return " ✅";
    if (success === undefined && index + 1 >= step) return ", pending";
    if (success != undefined && index + 1 < step) return " ✅";

    if (success === false && index + 1 === step) return " ❌";
    if (success === true && index + 1 === step) return " ✅";
    return ", abort";
  };

  return (
    <div className="stepprogressreportdialog">
      {arg.promises.map((promise, index) => {
        return (
          <div key={index} className="step-1-upload">
            Step {index + 1}: {promise.name}
            {getStatus(index)}
          </div>
        );
      })}

      {running && <CircularProgress />}

      {success != undefined && success && (
        <>
          <img className="vector-icon9" alt="" src="../asserts/vector8.svg" />
          <div className="congratulations">Congratulations!</div>
          <div className="notify-message-goes">
            {arg.batchName} successfully completed!
          </div>
        </>
      )}
      {success != undefined && !success && (
        <>
          {" "}
          <img className="vector-icon10" alt="" src="../asserts/vector9.svg" />
          <div className="congratulations">Ops, something wrong!</div>
          <div className="notify-message-goes">{errmsg}</div>
        </>
      )}
      <SecondaryButton onClick={arg.onContinue}>Continue</SecondaryButton>
    </div>
  );
};

export default StepProgressReportDialog;
