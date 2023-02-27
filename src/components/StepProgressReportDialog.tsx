import { FunctionComponent } from "react";
import "./StepProgressReportDialog.css";

const StepProgressReportDialog: FunctionComponent = () => {
  console.log("render StepProgressReportDialog");

  return (
    <div className="stepprogressreportdialog">
      <div className="step-1-upload">Step 1: Upload Image...</div>
      <div className="step-1-upload">Step 2: Create Metadata...</div>
      <div className="step-1-upload">Step 3: Minting...</div>
      <img className="vector-icon9" alt="" src="../asserts/vector8.svg" />
      <div className="ops-something-wrong">Ops, something wrong!</div>
      <div className="error-message-goes">
        Error message goes here to help user understand what’s going on.
      </div>
      <img className="vector-icon10" alt="" src="../asserts/vector9.svg" />
      <div className="ops-something-wrong">Congratulations!</div>
      <div className="error-message-goes">
        Notify message goes here to help user understand what’s going on.
      </div>
      <button className="prepare-sell-order-button24">
        <div className="secondary-button9">Continue</div>
      </button>
    </div>
  );
};

export default StepProgressReportDialog;
