import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { TextField, Autocomplete } from "@mui/material";
import CollateralAndFees from "../components/CollateralAndFees";
import { useNavigate } from "react-router-dom";
import "./PriceAndCollateralForm.css";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../app/actionTypes";
import { getMarketSelector, getNotifySelector } from "../app/selectors";
import { IDao, LyraGlobal } from "../app/blockchain/blocks/block";
import CollateralCalculation from "./CollateralCalculation";

type PriceAndCollateralFormType = {
  offering?: string;
  biding?: string;
  eqprice?: string;
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
  const [dao, setDao] = useState<IDao | null>(null);

  const [pricedollar, setPriceDollar] = useState<number>(0);
  const [eqdollar, setEQDollar] = useState<number>(0);

  const [totallyr, setTotalLYR] = useState<number>(0);

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
    } else setEQDollar(0);
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

  const onTotal = (total: number, daofee: number, netfee: number) => {
    setTotalLYR(total);
  };

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
      collateral: totallyr,
      secret: undefined,
      //daoid: dao?.daoId,
      dealerid: market.dealerId,
      limitmin: limitmin,
      limitmax: limitmax,
      eqprice: eqprice,
      // daofee: daofeelyr,
      // netfee: netfeelyr,
      payby: ["Default"]
    };
    navigate("/sellflow?data=" + encodeURIComponent(JSON.stringify(obj)));
  }, [
    navigate,
    offering,
    biding,
    price,
    count,
    //collaterallyr,
    //dao?.daoId,
    market.dealerId,
    totallyr,
    limitmin,
    limitmax,
    eqprice
    // daofeelyr,
    // netfeelyr
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
        isOptionEqualToValue={(option, value) => option.Name === value.Name}
        getOptionLabel={(option) => option.Name}
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
      <CollateralCalculation
        selling={true}
        eqprice={eqprice}
        eqdollar={eqdollar}
        amount={count}
        dao={dao}
        onTotalChange={onTotal}
      />
      <button className="reviewtheorder" onClick={onReviewTheOrderClick}>
        <div className="primary-button6">Review the Order</div>
      </button>
    </div>
  );
};

export default PriceAndCollateralForm;
