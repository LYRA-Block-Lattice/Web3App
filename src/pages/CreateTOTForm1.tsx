import { FunctionComponent, useState, useCallback } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./CreateTOTForm1.css";

const CreateTOTForm1: FunctionComponent = () => {
  const [selectTypeOfTOTAnchorEl, setSelectTypeOfTOTAnchorEl] =
    useState<HTMLElement | null>(null);
  const navigate = useNavigate();
  const selectTypeOfTOTOpen = Boolean(selectTypeOfTOTAnchorEl);
  const handleSelectTypeOfTOTClick = (event: React.MouseEvent<HTMLElement>) => {
    setSelectTypeOfTOTAnchorEl(event.currentTarget);
  };
  const handleSelectTypeOfTOTClose = () => {
    setSelectTypeOfTOTAnchorEl(null);
  };

  const onPrepareSellOrderButtonClick = useCallback(() => {
    navigate("/signtradesecretform");
  }, [navigate]);

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
      <input className="tot-name6" type="text" placeholder="TOT Name" />
      <input
        className="tot-description8"
        type="text"
        placeholder="Public Description, seen by everyone"
      />
      <input className="tot-name6" type="text" placeholder="Total Supply" />
      <button
        className="prepare-sell-order-button21"
        onClick={onPrepareSellOrderButtonClick}
      >
        <div className="utility-button8">Sign trade secret</div>
      </button>
      <div className="note-i-need-to-send-trade-sec6">
        Note: I need to send trade secret privately to buyer(s).
      </div>
      <button className="prepare-sell-order-button22">
        <div className="secondary-button10">Create TOT</div>
      </button>
    </form>
  );
};

export default CreateTOTForm1;
