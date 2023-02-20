import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { TextField, Autocomplete } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./PriceAndCollateralForm.css";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../app/actionTypes";
import { getMarketSelector, getNotifySelector } from "../app/selectors";
import { IDao } from "../app/market/marketReducer";
import { LyraGlobal } from "../app/blockchain/blocks/block";

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
  const notify = useSelector(getNotifySelector);

  const [price, setPrice] = useState<number>(0);
  const [eqprice, setEQPrice] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [limitmin, setLimitmin] = useState<number>(0);
  const [limitmax, setLimitmax] = useState<number>(0);
  const [collateral, setCollateral] = useState<number>(0);
  const [dao, setDao] = useState<IDao | null>(null);

  const [pricedollar, setPriceDollar] = useState<number>(0);
  const [eqdollar, setEQDollar] = useState<number>(0);

  useEffect(() => {
    dispatch({ type: actionTypes.BLOCKCHAIN_FIND_DAO, payload: "" });
    dispatch({ type: actionTypes.MARKET_GET_DEALER });
  }, []);

  //update info on dao selected
  useEffect(() => {
    if (dao != undefined && dao != null) {
    }
  }, [dao]);

  useEffect(() => {
    if (price > 0 && notify.prices != undefined && biding != undefined) {
      var ticker = biding;
      if (ticker.startsWith("tether/")) ticker = ticker.replace("tether/", "");
      if (ticker.startsWith("fiat/"))
        ticker = ticker.replace("fiat/", "").toLowerCase();
      const quote = notify.prices.find((a) => a.ticker == ticker);
      if (quote === undefined) setPriceDollar(0);
      else {
        let priced = price * quote.price;
        setPriceDollar(priced);
      }
    } else setPriceDollar(0);
  }, [price, biding]);

  useEffect(() => {
    if (eqprice > 0 && notify.prices != undefined) {
      let eqdollar =
        eqprice * notify.prices.find((a) => a.ticker == "LYR")!.price;
      setEQDollar(eqdollar);
    }
  }, [eqprice]);

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
      daoid: dao?.daoId,
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
    dao?.daoId,
    market.dealerId
  ]);

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
          onChange={(e) => setPrice(+e.target.value)}
        />
        <div className="worth-in-dollar-100-wrapper">
          <div className="worth-in-dollar">
            Worth in dollar: ${" "}
            {pricedollar.toLocaleString(undefined, {
              maximumFractionDigits: 2
            })}
          </div>
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
          onChange={(e) => setEQPrice(+e.target.value)}
        />
        <div className="worth-in-dollar-100-wrapper">
          <div className="worth-in-dollar">
            Worth in dollar: ${" "}
            {eqdollar.toLocaleString(undefined, {
              maximumFractionDigits: 2
            })}
          </div>
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
          onChange={(e) => setLimitmax(+e.target.value)}
        />
      </div>
      <Autocomplete
        sx={{ width: 320 }}
        disablePortal
        options={market.daos}
        onInputChange={onDaoSearchChange}
        onChange={(event, value) => setDao(value)}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
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
      <div className="collateralcount1">
        <div className="sellatprice-parent">
          <div className="collateral-worth-label5">
            <div className="worth-in-dollar">Collateral value: 120%</div>
            <div className="worth-in-dollar">1234 LYR</div>
          </div>
          <div className="collateral-worth-label6">
            <div className="worth-in-dollar">$ 103</div>
          </div>
        </div>
        <div className="sellatprice-parent">
          <div className="collateral-worth-label5">
            <div className="worth-in-dollar">DAO fee: 1%</div>
            <div className="worth-in-dollar">1234 LYR</div>
          </div>
          <div className="collateral-worth-label6">
            <div className="worth-in-dollar">$ 103</div>
          </div>
        </div>
        <div className="sellatprice-parent">
          <div className="collateral-worth-label5">
            <div className="worth-in-dollar">Network fee 0.2%</div>
            <div className="worth-in-dollar">1234 LYR</div>
          </div>
          <div className="collateral-worth-label6">
            <div className="worth-in-dollar">$ 103</div>
          </div>
        </div>
      </div>
      <button className="reviewtheorder" onClick={onReviewTheOrderClick}>
        <div className="primary-button5">Review the Order</div>
      </button>
    </div>
  );
};

export default PriceAndCollateralForm;
