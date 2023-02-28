import {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
import { call, put, take, cancelled } from "redux-saga/effects";
import { store } from "../app/store";
import { useNavigate } from "react-router";
import CatalogSelection from "../components/CatalogSelection";
import GeneralPopup from "../components/GeneralPopup";
import PortalPopup from "../components/PortalPopup";
import PrimaryButton from "../components/PrimaryButton";
import StepProgressReportDialog from "../components/StepProgressReportDialog";
import PageTemplate from "../pages/PageTemplate";
import { useDispatch } from "react-redux";
import { LongRunTaskx } from "./TaskRunner";

interface BatchRunnerProps {
  tasks: LongRunTaskx[];
  onFinished: (success: boolean, payload: any) => void;
  onError: (error: any) => void;
}

export const BatchRunner: FunctionComponent<BatchRunnerProps> = (
  props: BatchRunnerProps
) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isGeneralPopupOpen, setGeneralPopupOpen] = useState(false);

  const closeGeneralPopup = useCallback((ticker: any) => {
    setGeneralPopupOpen(false);
  }, []);

  return (
    <>
      {isGeneralPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={() => closeGeneralPopup(null)}
        >
          {/* <StepProgressReportDialog /> */}
        </PortalPopup>
      )}
    </>
  );
};
