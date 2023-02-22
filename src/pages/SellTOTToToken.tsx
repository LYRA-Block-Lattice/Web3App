import { FunctionComponent, useState, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import SignTradeSecretPopup from "../components/SignTradeSecretPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./SellTOTToToken.css";

const SellTOTToToken: FunctionComponent = () => {
  const [isSignTradeSecretPopupOpen, setSignTradeSecretPopupOpen] =
    useState(false);
  const navigate = useNavigate();

  const openSignTradeSecretPopup = useCallback(() => {
    setSignTradeSecretPopupOpen(true);
  }, []);

  const closeSignTradeSecretPopup = useCallback(() => {
    setSignTradeSecretPopupOpen(false);
  }, []);

  const onReviewTheOrderClick = useCallback(() => {
    navigate("/previewsellorderform");
  }, [navigate]);

  return (
    <>
      <div className="selltottotoken">
        <form className="createtottosellform1">
          <div className="to-get-tokennft">Create and Sell [TOT/SKU]</div>
          <select className="selecttypeoftot">
            <option value="sku">Goods</option>
            <option value="svc">Service</option>
            <option value="tot">Generic Trade only TOken</option>
          </select>
          <input className="tot-name2" type="text" placeholder="TOT Name" />
          <input
            className="tot-description3"
            type="text"
            placeholder="Public Description, seen by everyone"
          />
          <input
            className="tot-name2"
            type="number"
            placeholder="Total Supply"
          />
          <button
            className="prepare-sell-order-button25"
            onClick={openSignTradeSecretPopup}
          >
            <div className="utility-button8">Sign trade secret</div>
          </button>
          <div className="note-i-need2">
            Note: I need to send trade secret privately to buyer(s).
          </div>
          <button className="prepare-sell-order-button26">
            <div className="secondary-button6">Create TOT</div>
          </button>
        </form>
        <form className="searchtokenbyname1">
          <div className="to-get-tokennft">To get Token/NFT</div>
          <Autocomplete
            sx={{ width: 301 }}
            disablePortal
            options={["aaa", "bbb", "ccc"]}
            renderInput={(params: any) => (
              <TextField
                {...params}
                color="primary"
                label="Token Name"
                variant="outlined"
                placeholder=""
                helperText=""
              />
            )}
            size="medium"
          />
        </form>
        <div className="priceandcollateralform2">
          <div className="price-and-collateral2">Price and Collateral</div>
          <div className="set-the-price-one-group">
            <div className="set-the-price1">Set the price, one</div>
            <div className="set-the-price1">offering</div>
            <div className="set-the-price1">for</div>
            <div className="set-the-price1">biding</div>
            <div className="set-the-price1">:</div>
          </div>
          <TextField
            className="sellatprice3"
            sx={{ width: 301 }}
            color="primary"
            variant="outlined"
            type="number"
            label="Price for biding token"
            placeholder="1.0"
            size="medium"
            margin="none"
          />
          <div className="amount2">Amount:</div>
          <TextField
            className="sellatprice3"
            sx={{ width: 301 }}
            color="primary"
            variant="outlined"
            type="number"
            label="Amount of the selling token"
            placeholder="10"
            size="medium"
            margin="none"
          />
          <div className="limitoftrade2">
            <TextField
              className="sellatprice3"
              sx={{ width: 138 }}
              color="primary"
              variant="outlined"
              type="number"
              label="Limit Min"
              placeholder="1"
              size="medium"
              margin="none"
            />
            <div className="set-the-price1">-</div>
            <TextField
              className="sellatprice3"
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
          <div className="amount2">Collateral (in LYR):</div>
          <div className="collateral-section1">
            <TextField
              className="sellatprice3"
              sx={{ width: 301 }}
              color="primary"
              variant="outlined"
              type="text"
              label="Provide a guarantee for the trade"
              placeholder="100"
              size="medium"
              margin="none"
            />
            <div className="collateral-worth-label6">
              <div className="set-the-price1">Total worth in USD:</div>
              <div className="set-the-price1">$103</div>
            </div>
          </div>
          <div className="amount2">Create order in DAO:</div>
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
          <div className="amount2">
            Current dealer is [dealer name]. You will contact buyers through the
            dealer.
          </div>
          <button className="reviewtheorder2" onClick={onReviewTheOrderClick}>
            <div className="primary-button11">Review the Order</div>
          </button>
        </div>
      </div>
      {isSignTradeSecretPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignTradeSecretPopup}
        >
          <SignTradeSecretPopup onClose={closeSignTradeSecretPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default SellTOTToToken;
