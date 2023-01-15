import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { TextField, Autocomplete } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./PriceAndCollateralForm.css";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../app/actionTypes";
import { getMarketSelector } from "../app/selectors";

type PriceAndCollateralFormType = {
  offering?: string;
  biding?: string;
};

const PriceAndCollateralForm: FunctionComponent<PriceAndCollateralFormType> = ({
  offering,
  biding
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const market = useSelector(getMarketSelector);

  const [price, setPrice] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [limitmin, setLimitmin] = useState<number>(0);
  const [limitmax, setLimitmax] = useState<number>(0);
  const [collateral, setCollateral] = useState<number>(0);
  const [daoId, setDaoId] = useState("");

  useEffect(() => {
    dispatch({ type: actionTypes.BLOCKCHAIN_FIND_DAO, payload: "" });
    dispatch({ type: actionTypes.MARKET_GET_DEALER });
  }, []);

  const searchDao = (searchTerm: any) => {
    dispatch({ type: actionTypes.BLOCKCHAIN_FIND_DAO, payload: searchTerm });
  };

  const onDaoSearchChange = useCallback(
    (event: any, value: any, reason: any) => {
      if (value) {
        searchDao(value);
      }
    },
    [market.daos]
  );

  const onReviewTheOrderClick = useCallback(() => {
    let togettoken = biding;
    console.log(
      "sell " + offering + ", to get " + togettoken + ", on price " + price
    );
    var obj = {
      selltoken: offering,
      gettoken: togettoken,
      price: price,
      count: count,
      collateral: collateral,
      secret: undefined,
      daoid: daoId,
      dealerid: market.dealerId,
      limitmin: limitmin,
      limitmax: limitmax
    };
    navigate(
      "/previewsellorderform/?data=" + encodeURIComponent(JSON.stringify(obj))
    );
  }, [
    navigate,
    offering,
    biding,
    price,
    count,
    collateral,
    daoId,
    market.dealerId
  ]);

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
        onChange={(e) => setPrice(+e.target.value)}
      />
      <div className="amount">Amount:</div>
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
        onChange={(e) => setCount(+e.target.value)}
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
          onChange={(e) => setLimitmin(+e.target.value)}
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
          onChange={(e) => setLimitmax(+e.target.value)}
        />
      </div>
      <div className="amount">Collateral (in LYR):</div>
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
          onChange={(e) => setCollateral(+e.target.value)}
        />
        <div className="collateral-worth-label">
          <div className="set-the-price">Total worth in USD:</div>
          <div className="set-the-price">$103</div>
        </div>
      </div>
      <div className="amount">Create order in DAO:</div>
      <Autocomplete
        sx={{ width: 301 }}
        disablePortal
        options={market.daos}
        onInputChange={onDaoSearchChange}
        onChange={(event, value) => setDaoId(value?.daoId!)}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        renderInput={(params: any) => (
          <TextField
            {...params}
            color="primary"
            label="Find DAO"
            variant="outlined"
            placeholder="Search DAO by the name"
            helperText="Select DAO the order will be created in"
            required
          />
        )}
        size="medium"
      />
      <div className="amount">
        Current dealer is [{market.dealerName}]. You will contact buyers through
        the dealer.
      </div>
      <button className="reviewtheorder" onClick={onReviewTheOrderClick}>
        <div className="primary-button5">Review the Order</div>
      </button>
    </div>
  );
};

export default PriceAndCollateralForm;
