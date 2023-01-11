import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import App from "./App";
import { getAppSelector } from "./app/selectors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Shell: FunctionComponent = () => {
  const dispatch = useDispatch();
  const app = useSelector(getAppSelector);

  useEffect(() => {
    if (app.error != null) {
      toast.error(app.error, {
        onClose: () => dispatch({ type: "ERROR_CLEAR" })
      });
    }
  }, [app.error]);

  return (
    <div>
      <App />
      <ToastContainer theme="colored" />
    </div>
  );
};

export default Shell;
