import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import App from "./App";
import { getNotifySelector } from "./app/selectors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Shell: FunctionComponent = () => {
  const dispatch = useDispatch();
  const notify = useSelector(getNotifySelector);

  useEffect(() => {
    if (notify.error != null) {
      toast.error(notify.error, {
        onClose: () => dispatch({ type: "ERROR_CLEAR" })
      });
    }
  }, [notify.error]);

  useEffect(() => {
    if (notify.event != null && notify.event.change != "None") {
      toast.success(notify.event?.msg);
    }
  }, [notify.event]);

  return (
    <div>
      <App />
      <ToastContainer theme="colored" position="bottom-left" />
    </div>
  );
};

export default Shell;
