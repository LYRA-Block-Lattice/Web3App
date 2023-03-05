import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import TopNavigationBar from "../components/TopNavigationBar";
import GeneralPopup from "../components/GeneralPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate, useSearchParams } from "react-router-dom";
import CollateralCalculation from "../components/CollateralCalculation";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./SellTokenToToken.css";
import SearchTokenInput from "../dup/SearchTokenInput";
import PrimaryAccountCard from "../components/PrimaryAccountCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getAppSelector,
  getAuthSelector,
  getMarketSelector,
  getNotifySelector
} from "../app/selectors";

import * as actionTypes from "../app/actionTypes";
import { IDao, TransactionBlock } from "../app/blockchain/blocks/block";

interface IToken {
  token: string;
  domain: string;
  isTOT: boolean;
  name: string;
}

const minterUrls: Record<string, string> = {
  Token: "/mint-token",
  Fiat: "/mint-fiat",
  NFT: "/mint-nft",
  TOT: "/mint-tot",
  Service: "/mint-service-token"
};

const SellTokenToToken: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const market = useSelector(getMarketSelector);
  const auth = useSelector(getAuthSelector);
  const notify = useSelector(getNotifySelector);

  //const [isDisabled, setDisabled] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const catsell = decodeURIComponent(searchParams.get("sell")!);
  const catget = decodeURIComponent(searchParams.get("get")!);

  const [tosell, setTosell] = useState<string | undefined>();
  const [toget, setToget] = useState<string | undefined>();
  const [isGeneralPopupOpen, setGeneralPopupOpen] = useState(false);

  const [price, setPrice] = useState<number>(0);
  const [eqprice, setEQPrice] = useState<number>(0);

  const [pricedollar, setPriceDollar] = useState<number>(0);
  const [eqdollar, setEQDollar] = useState<number>(0);

  const [amount, setAmount] = useState<number>(0);
  const [limitmin, setLimitmin] = useState<number>(0);
  const [limitmax, setLimitmax] = useState<number>(0);

  const [dao, setDao] = useState<IDao | null>(null);
  const [val, setVal] = useState<IToken>();
  const [totallyr, setTotalLYR] = useState<number>(0);
  const [daoFeeLyr, setDaoFeeLyr] = useState<number>(0);
  const [netFeeLyr, setNetFeeLyr] = useState<number>(0);

  const onSellChange = useCallback(
    (value: any) => {
      console.log("onSellChange: " + value);
      if (value) {
        setTosell(value);
      } else {
        setTosell("");
      }
    },
    [tosell]
  );

  useEffect(() => {
    if (price > 0 && notify.prices != undefined && toget != undefined) {
      var ticker = toget;
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
  }, [price, toget]);

  useEffect(() => {
    if (eqprice > 0 && notify.prices != undefined) {
      var ticker = toget;
      const quote = notify.prices.find((a) => a.ticker == "LYR");
      if (quote === undefined) setEQDollar(0);
      else {
        let priced = eqprice * quote.price;
        setEQDollar(priced);
      }
    } else setEQDollar(0);
  }, [eqprice]);

  const openGeneralPopup = useCallback(() => {
    if (!auth.hasKey) navigate("/openwallet?ret=/starttocreateorder");
    else navigate(minterUrls[catsell]);
  }, []);

  const closeGeneralPopup = useCallback(
    (ticker: any) => {
      if (ticker == null) {
        console.log("popup closed. nothing happened.");
      } else {
        console.log("popup closed!, the ticker is " + ticker);
        setTosell(ticker);
        setVal({ token: ticker, name: ticker } as IToken);
      }

      setGeneralPopupOpen(false);
    },
    [tosell, val]
  );

  const onDaoSearchChange = useCallback(
    (event: any, value: any, reason: any) => {
      if (value) {
        dispatch({ type: actionTypes.BLOCKCHAIN_FIND_DAO, payload: value });
      }
    },
    [market.daos]
  );

  const onTotal = (total: number, daofee: number, netfee: number) => {
    setTotalLYR(total);
    setDaoFeeLyr(daofee);
    setNetFeeLyr(netfee);
  };

  const onReviewTheOrderClick = useCallback(() => {
    var obj = {
      selltoken: tosell,
      gettoken: toget,
      price: price,
      count: amount,
      collateral: totallyr,
      secret: undefined,
      daoid: dao?.AccountID,
      dealerid: market.dealerId,
      limitmin: limitmin,
      limitmax: limitmax,
      eqprice: eqprice,
      // daofee: daofeelyr,
      // netfee: netfeelyr,
      payby: ["Default"]
    };
    var fees = {
      total: daoFeeLyr + netFeeLyr
    };
    navigate(
      "/sellflow2?data=" +
        encodeURIComponent(JSON.stringify(obj)) +
        "&fees=" +
        encodeURIComponent(JSON.stringify(fees))
    );
  }, [
    navigate,
    tosell,
    toget,
    price,
    amount,
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
    <>
      <div className="selltokentotoken main-content">
        <TopNavigationBar title="Order Settings" />
        <div className="priceandcollateralform">
          <div className="to-sell-token-parent">
            <div className="to-sell-token">To Sell Token</div>
            <button className="buttons5" onClick={openGeneralPopup}>
              <div className="utility-button2">Mint</div>
            </button>
          </div>
          <SearchTokenInput
            key="tosell"
            val={val!}
            dir="Sell"
            cat={catsell}
            ownOnly={true}
            onTokenSelect={(name, ticker) => setTosell(ticker)}
          />
          <SearchTokenInput
            key="toget"
            val={val!}
            dir="Get"
            cat={catget}
            ownOnly={false}
            onTokenSelect={(name, ticker) => setToget(ticker)}
          />
          <div className="to-get-fiat">Price and Collateral</div>
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
            onChange={(e) => setAmount(+e.target.value)}
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
            amount={amount}
            dao={dao}
            onTotalChange={onTotal}
          />
          <button className="reviewtheorder" onClick={onReviewTheOrderClick}>
            <div className="primary-button5">Review the Order</div>
          </button>
        </div>
        <BottomNavigationBar />
      </div>
      {isGeneralPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={() => closeGeneralPopup(null)}
        >
          <GeneralPopup
            tag={catsell}
            onClose={closeGeneralPopup}
          ></GeneralPopup>
        </PortalPopup>
      )}
    </>
  );
};

export default SellTokenToToken;
