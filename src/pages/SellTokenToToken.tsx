import { FunctionComponent, useState, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import TopNavigationBar from "../components/TopNavigationBar";
import GeneralPopup from "../components/GeneralPopup";
import PortalPopup from "../components/PortalPopup";
import CollateralCalculation from "../components/CollateralCalculation";
import { useNavigate } from "react-router-dom";
import "./SellTokenToToken.css";

const SellTokenToToken: FunctionComponent = () => {
  const [isGeneralPopupOpen, setGeneralPopupOpen] = useState(false);
  const navigate = useNavigate();

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
          titleLetterSpacing="0.41px"
          titleFontWeight="500"
          titleFontFamily="'SF Pro Display'"
          titleLineHeight="18px"
        />
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
        <div className="bottomtabbar2">
          <div className="home-indicator4">
            <div className="home-indicator5" />
          </div>
          <div className="tabbar2">
            <div className="tabbar-item8">
              <img
                className="box-alt-light-icon2"
                alt=""
                src="../asserts/box-alt-light.svg"
              />
              <div className="text18">Market</div>
            </div>
            <div className="tabbar-item8">
              <img
                className="box-alt-light-icon2"
                alt=""
                src="../asserts/molecule-light.svg"
              />
              <div className="text18">DAO</div>
            </div>
            <div className="tabbar-item8">
              <img
                className="box-alt-light-icon2"
                alt=""
                src="../asserts/wallet-light.svg"
              />
              <div className="text20">Wallet</div>
            </div>
            <div className="tabbar-item11">
              <img
                className="box-alt-light-icon2"
                alt=""
                src="../asserts/user-alt-light.svg"
              />
              <div className="text18">Me</div>
            </div>
          </div>
        </div>
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
