import { FunctionComponent, useCallback } from "react";
import { TextField, Autocomplete } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./PriceAndCollateralForm.css";

type PriceAndCollateralFormType = {
  offering?: string;
  biding?: string;
};

const PriceAndCollateralForm: FunctionComponent<PriceAndCollateralFormType> = ({
  offering,
  biding,
}) => {
  const navigate = useNavigate();

  const onReviewTheOrderClick = useCallback(() => {
    navigate("/previewsellorderform");
  }, [navigate]);

  return (
    <div className="priceandcollateralform">
      <div className="price-and-collateral">Price and Collateral</div>
      <div className="set-the-price-one-parent">
        <div className="set-the-price">Set the price, one</div>
        <div className="set-the-price">{offering}</div>
        <div className="set-the-price">for</div>
        <div className="set-the-price">{biding}</div>
        <div className="set-the-price">:</div>
      </div>
      <TextField
        className="sellatprice"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="number"
        label="Price for biding token"
        placeholder="1.0"
        size="medium"
        margin="none"
      />
      <div className="collateral-in-lyr">Amount:</div>
      <TextField
        className="sellatprice"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="number"
        label="Amount of the selling token"
        placeholder="10"
        size="medium"
        margin="none"
      />
      <div className="limitoftrade">
        <TextField
          className="sellatprice"
          sx={{ width: 138 }}
          color="primary"
          variant="outlined"
          type="number"
          label="Limit Min"
          placeholder="1"
          size="medium"
          margin="none"
        />
        <div className="set-the-price">-</div>
        <TextField
          className="sellatprice"
          sx={{ width: 138 }}
          color="primary"
          variant="outlined"
          type="number"
          label="Limit Max"
          placeholder="10"
          size="medium"
          margin="none"
        />
      </div>
      <div className="collateral-in-lyr">Collateral (in LYR):</div>
      <div className="collateral-section">
        <TextField
          className="sellatprice"
          sx={{ width: 301 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Provide a guarantee for the trade"
          placeholder="100"
          size="medium"
          margin="none"
        />
        <div className="collateral-worth-label">
          <div className="set-the-price">Total worth in USD:</div>
          <div className="set-the-price">$103</div>
        </div>
      </div>
      <div className="collateral-in-lyr">Create order in DAO:</div>
      <Autocomplete
        sx={{ width: 301 }}
        disablePortal
        options={[] as any}
        renderInput={(params: any) => (
          <TextField
            {...params}
            color="primary"
            label="Find DAO"
            variant="outlined"
            placeholder=""
            helperText="Select DAO the order will be created in"
            required
          />
        )}
        size="medium"
      />
      <div className="collateral-in-lyr">
        Current dealer is [dealer name]. You will contact buyers through the
        dealer.
      </div>
      <button className="reviewtheorder" onClick={onReviewTheOrderClick}>
        <div className="primary-button4">Review the Order</div>
      </button>
    </div>
  );
};

export default PriceAndCollateralForm;
