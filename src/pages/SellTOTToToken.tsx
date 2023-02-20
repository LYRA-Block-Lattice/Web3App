import { FunctionComponent, useState, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import SignTradeSecretPopup from "../components/SignTradeSecretPopup";
import PortalPopup from "../components/PortalPopup";
import PriceAndCollateralForm from "../components/PriceAndCollateralForm";
import "./SellTOTToToken.css";

const SellTOTToToken: FunctionComponent = () => {
  const [isSignTradeSecretPopupOpen, setSignTradeSecretPopupOpen] =
    useState(false);

  const openSignTradeSecretPopup = useCallback(() => {
    setSignTradeSecretPopupOpen(true);
  }, []);

  const closeSignTradeSecretPopup = useCallback(() => {
    setSignTradeSecretPopupOpen(false);
  }, []);

  return (
    <>
      <div className="selltottotoken">
        <form className="createtottosellform">
          <div className="create-and-sell">Create and Sell [TOT/SKU]</div>
          <select className="selecttypeoftot">
            <option value="sku">Goods</option>
            <option value="svc">Service</option>
            <option value="tot">Generic Trade only TOken</option>
          </select>
          <input className="tot-supply" type="text" placeholder="TOT Name" />
          <input
            className="tot-description4"
            type="text"
            placeholder="Public Description, seen by everyone"
          />
          <input
            className="tot-supply"
            type="number"
            placeholder="Total Supply"
          />
          <button
            className="prepare-sell-order-button17"
            onClick={openSignTradeSecretPopup}
          >
            <div className="utility-button7">Sign trade secret</div>
          </button>
          <div className="note-i-need2">
            Note: I need to send trade secret privately to buyer(s).
          </div>
          <button className="prepare-sell-order-button18">
            <div className="secondary-button5">Create TOT</div>
          </button>
        </form>
        <form className="searchtokenbyname1">
          <div className="create-and-sell">To get Token/NFT</div>
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
        <PriceAndCollateralForm offering="offering" biding="biding" />
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
