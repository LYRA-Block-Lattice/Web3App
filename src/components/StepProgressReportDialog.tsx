import { CircularProgress } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { APIResult } from "../app/blockchain/blocks/meta";
import { BatchRunLongRunTask, LongRunTask } from "../app/utils";
import "./StepProgressReportDialog.css";

interface LongRunTaskListProps {
  batchName: string;
  promises: LongRunTask[];
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
    BatchRunLongRunTask(arg.promises, (index, total) => {
      console.log(`Completed ${index} of ${total} promises`);
      setStep(index);
    })
      .then(() => setSuccess(true))
      .catch((error) => {
        setSuccess(false);
        setErrmsg(error.toString());
      });
  }, []);

  useEffect(() => {
    if (success != undefined) {
      setRunning(false);
    }
  }, [success]);

  return (
    <div className="stepprogressreportdialog">
      {arg.promises.map((promise, index) => {
        return (
          <div key={index} className="step-1-upload">
            Step {index + 1}: {promise.name}, {promise.description}{" "}
            {step > index ? "✅" : "pending"}
          </div>
        );
      })}

      {running && <CircularProgress />}

      {success != undefined && success && (
        <>
          <img className="vector-icon10" alt="" src="../asserts/vector9.svg" />
          <div className="ops-something-wrong">Congratulations!</div>
          <div className="error-message-goes">
            {arg.batchName} successfully completed!
          </div>
        </>
      )}
      {success != undefined && !success && (
        <>
          {" "}
          <img className="vector-icon9" alt="" src="../asserts/vector8.svg" />
          <div className="ops-something-wrong">Ops, something wrong!</div>
          <div className="error-message-goes">{errmsg}</div>
        </>
      )}
      <button className="prepare-sell-order-button24">
        <div className="secondary-button9">Continue</div>
      </button>
    </div>
  );
};

export default StepProgressReportDialog;
