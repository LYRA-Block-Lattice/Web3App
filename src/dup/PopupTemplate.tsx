import React from "react";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import SimpleDialog from "./SimpleDialog";

interface PopupProps {
  popped: boolean;
  onClose?: () => void;
  popup: React.ReactNode;
  children?: React.ReactNode | React.ReactNode[];
}

const PopupTemplate: FunctionComponent<PopupProps> = (props: PopupProps) => {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = (value: string) => {
  //   setOpen(false);
  // };

  console.log("render PopupTemplate");

  return (
    <>
      <SimpleDialog
        key={Math.random()}
        open={props.popped}
        selectedValue=""
        onClose={() => props.onClose && props.onClose()}
      >
        {props.popup}
      </SimpleDialog>
      {props.children}
    </>
  );
};

export default React.memo(PopupTemplate);
