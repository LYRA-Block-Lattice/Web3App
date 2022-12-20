import { FunctionComponent, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import "./CreateTOTForm.css";

const CreateTOTForm: FunctionComponent = () => {
  const [selectTypeOfTOTAnchorEl, setSelectTypeOfTOTAnchorEl] =
    useState<HTMLElement | null>(null);
  const selectTypeOfTOTOpen = Boolean(selectTypeOfTOTAnchorEl);
  const handleSelectTypeOfTOTClick = (event: React.MouseEvent<HTMLElement>) => {
    setSelectTypeOfTOTAnchorEl(event.currentTarget);
  };
  const handleSelectTypeOfTOTClose = () => {
    setSelectTypeOfTOTAnchorEl(null);
  };

  return (
    <form className="createtotform">
      <div className="create-tot">Create TOT</div>
      <div>
        <Button
          sx={{ width: 301 }}
          id="button-Select Type of TOT"
          aria-controls="menu-Select Type of TOT"
          aria-haspopup="true"
          aria-expanded={selectTypeOfTOTOpen ? "true" : undefined}
          onClick={handleSelectTypeOfTOTClick}
          color="primary"
        >
          Select Type of TOT
        </Button>
        <Menu
          anchorEl={selectTypeOfTOTAnchorEl}
          open={selectTypeOfTOTOpen}
          onClose={handleSelectTypeOfTOTClose}
        />
      </div>
      <input className="tot-name" type="text" placeholder="TOT Name" />
      <input
        className="tot-description2"
        type="text"
        placeholder="Public Description, seen by everyone"
      />
      <input className="tot-name" type="text" placeholder="Total Supply" />
      <button className="prepare-sell-order-button3">
        <div className="utility-button1">Sign trade secret</div>
      </button>
      <div className="note-i-need-to-send-trade-sec">
        Note: I need to send trade secret privately to buyer(s).
      </div>
      <button className="prepare-sell-order-button4">
        <div className="secondary-button1">Create TOT</div>
      </button>
    </form>
  );
};

export default CreateTOTForm;
