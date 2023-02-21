import { FunctionComponent, useCallback } from "react";
import { TextField, Autocomplete } from "@mui/material";
import CollateralAndFees from "../components/CollateralAndFees";
import { useNavigate } from "react-router-dom";
import "./PriceAndCollateralForm.css";

type PriceAndCollateralFormType = {
  offering?: string;
  biding?: string;
  eqprice?: string;
};

const PriceAndCollateralForm: FunctionComponent<PriceAndCollateralFormType> = ({
  offering,
  biding,
  eqprice = "1234",
}) => {
  const navigate = useNavigate();

  const onReviewTheOrderClick = useCallback(() => {
    navigate("/previewsellorderform");
  }, [navigate]);

  return (
    <div className="priceandcollateralform">
      <div className="price-and-collateral">Price and Collateral</div>
      <div className="sellatprice-parent">
        <TextField
          className="sellatprice"
          sx={{ width: 320 }}
          color="primary"
          variant="outlined"
          type="number"
          label="Price for biding token"
          placeholder="1.0"
          size="medium"
          margin="none"
        />
        <div className="worth-in-dollar-100-wrapper">
          <div className="worth-in-dollar">Worth in dollar: $100</div>
        </div>
      </div>
      <div className="sellatprice-parent">
        <TextField
          className="sellatprice"
          sx={{ width: 320 }}
          color="primary"
          variant="outlined"
          type="number"
          label="Equivalence price calculated by LYR"
          placeholder="1.0"
          size="medium"
          margin="none"
        />
        <div className="worth-in-dollar-100-wrapper">
          <div className="worth-in-dollar">Worth in dollar: $100</div>
        </div>
      </div>
      <TextField
        className="sellatprice"
        sx={{ width: 320 }}
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
        <div className="worth-in-dollar">-</div>
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
      <Autocomplete
        sx={{ width: 320 }}
        disablePortal
        options={[] as any}
        renderInput={(params: any) => (
          <TextField
            {...params}
            color="primary"
            label="Choose a regulatory DAO"
            variant="outlined"
            placeholder=""
            helperText=""
            required
          />
        )}
        size="medium"
      />
      <CollateralAndFees eqprice={eqprice} />
      <button className="reviewtheorder" onClick={onReviewTheOrderClick}>
        <div className="primary-button6">Review the Order</div>
      </button>
    </div>
  );
};

export default PriceAndCollateralForm;
