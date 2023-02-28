import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import PortalPopup from "../components/PortalPopup";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  children?: React.ReactNode | React.ReactNode[];
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, children } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  console.log("render SimpleDialog");

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Running the task</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem disableGutters>{children}</ListItem>
      </List>
    </Dialog>
  );
}

export default React.memo(SimpleDialog);
