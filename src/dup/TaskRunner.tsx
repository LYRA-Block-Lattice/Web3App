import { AnyAction } from "@reduxjs/toolkit";
import { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export interface LongRunTask {
  name: string;
  action: AnyAction;
  successAction: {};
  errorAction: {};
  success: boolean;
  payload: any;
}

export const TaskRunner: FunctionComponent<LongRunTask> = (
  props: LongRunTask
) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(props.action); // Dispatch the action to Redux-Saga
    const unsubscribe = () => {
      // Subscribe to the Redux store and wait for the action to be dispatched by Redux-Saga
      dispatch({ type: "DATA_RECEIVED" });
    };
    return unsubscribe; // Unsubscribe when the component unmounts
  }, [dispatch]);

  return <div className="task-runner"></div>;
};
