import { FunctionComponent, useState, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import GeneralPopup from "../components/GeneralPopup";
import PortalPopup from "../components/PortalPopup";
import PriceAndCollateralForm from "../components/PriceAndCollateralForm";
import "./SellTokenToToken.css";

const SellTokenToToken: FunctionComponent = () => {
  const [isGeneralPopupOpen, setGeneralPopupOpen] = useState(false);

  const openGeneralPopup = useCallback(() => {
    setGeneralPopupOpen(true);
  }, []);

  const closeGeneralPopup = useCallback(() => {
    setGeneralPopupOpen(false);
  }, []);

  return (
    <>
      <div className="selltokentotoken">
        <form className="searchtokenbyname">
          <div className="to-sell-token-parent">
            <div className="to-sell-token">To Sell Token</div>
            <button
              className="prepare-sell-order-button10"
              onClick={openGeneralPopup}
            >
              <div className="utility-button4">Mint</div>
            </button>
          </div>
          <Autocomplete
            sx={{ width: 320 }}
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
          <div className="to-get-fiat">To Get Fiat</div>
          <Autocomplete
            sx={{ width: 320 }}
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
        <PriceAndCollateralForm />
      </div>
      {isGeneralPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGeneralPopup}
        >
          <GeneralPopup onClose={closeGeneralPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default SellTokenToToken;
