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
  const [success, setSuccess] = useState<boolean>(false);
  const [errmsg, setErrmsg] = useState("");

  useEffect(() => {
    BatchRunLongRunTask(arg.promises, (index, total) => {
      console.log(`Completed ${index} of ${total} promises`);
    })
      .then(() => setSuccess(true))
      .catch((error) => {
        setSuccess(false);
        setErrmsg(error.toString());
      });
  }, []);

  return (
    <div className="stepprogressreportdialog">
      {arg.promises.map((promise, index) => {
        return (
          <div key={index} className="step-1-upload">
            Step {index + 1}: {promise.name}, {promise.description}
          </div>
        );
      })}
      {!success ? (
        <>
          {" "}
          <img className="vector-icon9" alt="" src="../asserts/vector8.svg" />
          <div className="ops-something-wrong">Ops, something wrong!</div>
          <div className="error-message-goes">{errmsg}</div>
        </>
      ) : (
        <>
          <img className="vector-icon10" alt="" src="../asserts/vector9.svg" />
          <div className="ops-something-wrong">Congratulations!</div>
          <div className="error-message-goes">
            {arg.batchName} successfully completed!
          </div>
        </>
      )}
      <button className="prepare-sell-order-button24">
        <div className="secondary-button9">Continue</div>
      </button>
    </div>
  );
};

export default StepProgressReportDialog;
