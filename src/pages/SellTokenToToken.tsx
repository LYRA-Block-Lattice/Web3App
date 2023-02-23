import { FunctionComponent, useState, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import TopNavigationBar from "../components/TopNavigationBar";
import GeneralPopup from "../components/GeneralPopup";
import PortalPopup from "../components/PortalPopup";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./SellTokenToToken.css";

const SellTokenToToken: FunctionComponent = () => {
  const [isGeneralPopupOpen, setGeneralPopupOpen] = useState(false);

  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onContextMenuButtonClick = useCallback(() => {
    //TODO: context menu
  }, []);

  const openGeneralPopup = useCallback(() => {
    setGeneralPopupOpen(true);
  }, []);

  const closeGeneralPopup = useCallback(() => {
    setGeneralPopupOpen(false);
  }, []);

  const onReviewTheOrderClick = useCallback(() => {
    // Please sync "PreviewSellOrderForm" to the project
  }, []);

  return (
    <>
      <div className="selltokentotoken">
        <TopNavigationBar
          title="Order Settings"
          onNavBackButtonClick={onNavBackButtonClick}
          onTitleClick={onTitleClick}
          onContextMenuButtonClick={onContextMenuButtonClick}
        />
        <div className="priceandcollateralform">
          <div className="to-sell-token-parent">
            <div className="to-sell-token">To Sell Token</div>
            <button
              className="prepare-sell-order-button16"
              onClick={openGeneralPopup}
            >
              <div className="utility-button2">Mint</div>
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
          <div className="collateralcalculation1">
            <div className="collateralsection1">
              <div className="collateral-worth-label8">
                <div className="worth-in-dollar">Collateral value: 120%</div>
                <div className="worth-in-dollar">1234 LYR</div>
              </div>
              <div className="collateral-worth-label9">
                <div className="worth-in-dollar">$ 103</div>
              </div>
            </div>
            <div className="collateralsection1">
              <div className="collateral-worth-label8">
                <div className="worth-in-dollar">DAO fee: 1%</div>
                <div className="worth-in-dollar">1234 LYR</div>
              </div>
              <div className="collateral-worth-label9">
                <div className="worth-in-dollar">$ 103</div>
              </div>
            </div>
            <div className="collateralsection1">
              <div className="collateral-worth-label8">
                <div className="worth-in-dollar">Network fee: 0.2%</div>
                <div className="worth-in-dollar">1234 LYR</div>
              </div>
              <div className="collateral-worth-label9">
                <div className="worth-in-dollar">$ 103</div>
              </div>
            </div>
            <div className="collateralcalculation-item" />
            <div className="collateralsection1">
              <div className="collateral-worth-label14">
                <div className="worth-in-dollar">1234 LYR</div>
              </div>
              <div className="collateral-worth-label15">
                <div className="worth-in-dollar">Total:</div>
                <div className="div14">$ 103</div>
              </div>
            </div>
          </div>
          <button className="reviewtheorder" onClick={onReviewTheOrderClick}>
            <div className="primary-button8">Review the Order</div>
          </button>
        </div>
        <BottomNavigationBar />
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
