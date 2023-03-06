import { FunctionComponent } from "react";
import SecondaryButton from "../components/SecondaryButton";
import "./StepProgressReportDialog.css";

const StepProgressReportDialog: FunctionComponent = () => {
  return (
    <div className="stepprogressreportdialog">
      <div className="step-1-upload">Step 1: Upload Image...</div>
      <div className="step-1-upload">Step 2: Create Metadata...</div>
      <div className="step-1-upload">Step 3: Minting...</div>
      <img className="vector-icon9" alt="" src="../asserts/vector8.svg" />
      <div className="congratulations">Congratulations!</div>
      <div className="notify-message-goes">
        Notify message goes here to help user understand what’s going on.
      </div>
      <img className="vector-icon10" alt="" src="../asserts/vector9.svg" />
      <div className="congratulations">Ops, something wrong!</div>
      <div className="notify-message-goes">
        Error message goes here to help user understand what’s going on.
      </div>
      <SecondaryButton secondaryButton="Continue" />
    </div>
  );
};

export default StepProgressReportDialog;
