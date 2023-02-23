import { FunctionComponent, useState, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import TopNavigationBar from "../components/TopNavigationBar";
import GeneralPopup from "../components/GeneralPopup";
import PortalPopup from "../components/PortalPopup";
import CollateralCalculation from "../components/CollateralCalculation";
import { useNavigate } from "react-router-dom";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./SellTokenToToken.css";

const SellTokenToToken: FunctionComponent = () => {
  const [isGeneralPopupOpen, setGeneralPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onMiniProgramsButtonsClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const openGeneralPopup = useCallback(() => {
    setGeneralPopupOpen(true);
  }, []);

  const closeGeneralPopup = useCallback(() => {
    setGeneralPopupOpen(false);
  }, []);

  const onReviewTheOrderClick = useCallback(() => {
    navigate("/previewsellorderform");
  }, [navigate]);

  return (
    <>
      <div className="selltokentotoken">
        <TopNavigationBar
          title="Order Settings"
          onMiniProgramsButtonsClick={onMiniProgramsButtonsClick}
          onTitleClick={onTitleClick}
        />
        <div className="priceandcollateralform">
          <div className="to-sell-token-parent">
            <div className="to-sell-token">To Sell Token</div>
            <button
              className="prepare-sell-order-button11"
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
            <div className="primary-button4">Review the Order</div>
          </button>
        </div>
        <BottomNavigationBar
          boxAltLight1="../asserts/box-alt-light.svg"
          moleculeLight1="../asserts/molecule-light.svg"
          walletLight1="../asserts/wallet-light.svg"
          userAltLight1="../asserts/user-alt-light.svg"
          textColor="#434343"
          textColor1="#0ebd8d"
        />
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
