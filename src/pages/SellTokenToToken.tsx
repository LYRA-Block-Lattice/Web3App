import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import GeneralPopup from "../components/GeneralPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate, useSearchParams } from "react-router-dom";
import CollateralCalculation from "../components/CollateralCalculation";
import "./SellTokenToToken.css";
import SearchTokenInput from "../dup/SearchTokenInput";
import PrimaryAccountCard from "../components/PrimaryAccountCard";
import { useSelector } from "react-redux";
import { getAppSelector, getAuthSelector } from "../app/selectors";

interface customWindow extends Window {
  rrComponent?: any;
  rrProxy?: any;
}
declare const window: customWindow;

interface IToken {
  token: string;
  domain: string;
  isTOT: boolean;
  name: string;
}

const SellTokenToToken: FunctionComponent = () => {
  const navigate = useNavigate();
  const app = useSelector(getAppSelector);
  const auth = useSelector(getAuthSelector);

  //const [isDisabled, setDisabled] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const catsell = decodeURIComponent(searchParams.get("sell")!);
  const catget = decodeURIComponent(searchParams.get("get")!);

  const [tosell, setTosell] = useState<string | undefined>();
  const [toget, setToget] = useState<string | undefined>();
  const [isGeneralPopupOpen, setGeneralPopupOpen] = useState(false);

  const [val, setVal] = useState<IToken>();

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

  const openGeneralPopup = useCallback(() => {
    if (!auth.hasKey) navigate("/openwallet?ret=/starttocreateorder");
    else setGeneralPopupOpen(true);
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

  return (
    <>
      <div className="selltokentotoken">
        <PrimaryAccountCard />
        <div className="searchtokenbyname">
          <div className="to-sell-token-parent">
            <div className="to-sell-token">To Sell Token</div>
            <button
              className="prepare-sell-order-button10"
              onClick={openGeneralPopup}
            >
              <div className="utility-button4">Mint</div>
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
        </div>
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
          <CollateralCalculation eqprice="1234" />
          <button className="reviewtheorder" onClick={onReviewTheOrderClick}>
            <div className="primary-button3">Review the Order</div>
          </button>
        </div>
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
