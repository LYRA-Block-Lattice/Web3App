import { FunctionComponent } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  TextField,
} from "@mui/material";
import "./CreateTOTDialog.css";

const CreateTOTDialog: FunctionComponent = () => {
  return (
    <div className="createtotdialog">
      <form className="createtottosellform1">
        <div className="create-and-sell1">Create and Sell [TOT/SKU]</div>
        <FormControl sx={{ width: 301 }} variant="outlined">
          <InputLabel color="primary">Select Type of TOT</InputLabel>
          <Select color="primary" size="medium" label="Select Type of TOT">
            <MenuItem value="Goods">Goods</MenuItem>
            <MenuItem value="Service">Service</MenuItem>
            <MenuItem value="Generic Trade only Token">
              Generic Trade only Token
            </MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <TextField
          className="tot-name1"
          sx={{ width: 301 }}
          color="primary"
          variant="outlined"
          type="text"
          label="TOT Name"
          size="medium"
          margin="none"
        />
        <TextField
          sx={{ width: 301 }}
          color="primary"
          variant="outlined"
          multiline
          rows={5}
          label="Public Description, seen by everyone"
          placeholder="Introduct to my token"
          margin="none"
        />
        <TextField
          className="tot-name1"
          sx={{ width: 301 }}
          color="primary"
          variant="outlined"
          type="number"
          label="Total Supply"
          placeholder="1"
          size="medium"
          margin="none"
        />
        <button className="buttons6">
          <div className="utility-button1">Sign trade secret</div>
        </button>
        <div className="note-i-need1">
          Note: I need to send trade secret privately to buyer(s).
        </div>
        <button className="buttons7">
          <div className="secondary-button3">Create TOT</div>
        </button>
      </form>
    </div>
  );
};

export default CreateTOTDialog;
