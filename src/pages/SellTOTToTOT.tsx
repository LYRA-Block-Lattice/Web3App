import { FunctionComponent, useState, useCallback } from "react";
import { TextField, Autocomplete } from "@mui/material";
import SignTradeSecretPopup from "../components/SignTradeSecretPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./SellTOTToTOT.css";

const SellTOTToTOT: FunctionComponent = () => {
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
      <div className="selltottotot">
        <form className="togettotform">
          <div className="to-get-totskusvc">To get [TOT/SKU/SVC]</div>
          <input className="tot-name1" type="text" placeholder="Name" />
          <input
            className="tot-description2"
            type="text"
            placeholder="Public Description, seen by everyone"
          />
          <button
            className="prepare-sell-order-button19"
            onClick={openSignTradeSecretPopup}
          >
            <div className="utility-button7">Sign trade secret</div>
          </button>
          <div className="note-i-need1">
            Note: This [tot/sku/svc] share the same trade secret of selling
            item.
          </div>
          <button className="prepare-sell-order-button20">
            <div className="secondary-button5">Create TOT</div>
          </button>
        </form>
        <div className="priceandcollateralform1">
          <div className="price-and-collateral1">Price and Collateral</div>
          <div className="set-the-price-one-parent">
            <div className="set-the-price">Set the price, one</div>
            <div className="set-the-price">offering</div>
            <div className="set-the-price">for</div>
            <div className="set-the-price">biding</div>
            <div className="set-the-price">:</div>
          </div>
          <TextField
            className="sellatprice2"
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
            className="sellatprice2"
            sx={{ width: 301 }}
            color="primary"
            variant="outlined"
            type="number"
            label="Amount of the selling token"
            placeholder="10"
            size="medium"
            margin="none"
          />
          <div className="limitoftrade1">
            <TextField
              className="sellatprice2"
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
              className="sellatprice2"
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
              className="sellatprice2"
              sx={{ width: 301 }}
              color="primary"
              variant="outlined"
              type="text"
              label="Provide a guarantee for the trade"
              placeholder="100"
              size="medium"
              margin="none"
            />
            <div className="collateral-worth-label5">
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
          <button className="reviewtheorder1" onClick={onReviewTheOrderClick}>
            <div className="primary-button8">Review the Order</div>
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

export default SellTOTToTOT;
