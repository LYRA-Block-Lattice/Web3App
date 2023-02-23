import { FunctionComponent, useState, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import TopNavigationBar from "../components/TopNavigationBar";
import GeneralPopup from "../components/GeneralPopup";
import PortalPopup from "../components/PortalPopup";
import Footer from "../components/Footer";
import styles from "./SellTokenToToken.module.css";

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
      <div className={styles.selltokentotoken}>
        <TopNavigationBar
          title="Order Settings"
          onNavBackButtonClick={onNavBackButtonClick}
          onTitleClick={onTitleClick}
          onContextMenuButtonClick={onContextMenuButtonClick}
        />
        <div className={styles.priceandcollateralform}>
          <div className={styles.toSellTokenParent}>
            <div className={styles.toSellToken}>To Sell Token</div>
            <button
              className={styles.prepareSellOrderButton}
              onClick={openGeneralPopup}
            >
              <div className={styles.utilityButton}>Mint</div>
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
          <div className={styles.toGetFiat}>To Get Fiat</div>
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
          <div className={styles.toGetFiat}>Price and Collateral</div>
          <div className={styles.sellatpriceParent}>
            <TextField
              className={styles.sellatprice}
              sx={{ width: 320 }}
              color="primary"
              variant="outlined"
              type="number"
              label="Price for biding token"
              placeholder="1.0"
              size="medium"
              margin="none"
            />
            <div className={styles.worthInDollar100Wrapper}>
              <div className={styles.worthInDollar}>Worth in dollar: $100</div>
            </div>
          </div>
          <div className={styles.sellatpriceParent}>
            <TextField
              className={styles.sellatprice}
              sx={{ width: 320 }}
              color="primary"
              variant="outlined"
              type="number"
              label="Equivalence price calculated by LYR"
              placeholder="1.0"
              size="medium"
              margin="none"
            />
            <div className={styles.worthInDollar100Wrapper}>
              <div className={styles.worthInDollar}>Worth in dollar: $100</div>
            </div>
          </div>
          <TextField
            className={styles.sellatprice}
            sx={{ width: 320 }}
            color="primary"
            variant="outlined"
            type="number"
            label="Amount of the selling token"
            placeholder="10"
            size="medium"
            margin="none"
          />
          <div className={styles.limitoftrade}>
            <TextField
              className={styles.sellatprice}
              sx={{ width: 138 }}
              color="primary"
              variant="outlined"
              type="number"
              label="Limit Min"
              placeholder="1"
              size="medium"
              margin="none"
            />
            <div className={styles.worthInDollar}>-</div>
            <TextField
              className={styles.sellatprice}
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
          <div className={styles.collateralcalculation}>
            <div className={styles.collateralsection}>
              <div className={styles.collateralWorthLabel}>
                <div className={styles.worthInDollar}>
                  Collateral value: 120%
                </div>
                <div className={styles.worthInDollar}>1234 LYR</div>
              </div>
              <div className={styles.collateralWorthLabel1}>
                <div className={styles.worthInDollar}>$ 103</div>
              </div>
            </div>
            <div className={styles.collateralsection}>
              <div className={styles.collateralWorthLabel}>
                <div className={styles.worthInDollar}>DAO fee: 1%</div>
                <div className={styles.worthInDollar}>1234 LYR</div>
              </div>
              <div className={styles.collateralWorthLabel1}>
                <div className={styles.worthInDollar}>$ 103</div>
              </div>
            </div>
            <div className={styles.collateralsection}>
              <div className={styles.collateralWorthLabel}>
                <div className={styles.worthInDollar}>Network fee: 0.2%</div>
                <div className={styles.worthInDollar}>1234 LYR</div>
              </div>
              <div className={styles.collateralWorthLabel1}>
                <div className={styles.worthInDollar}>$ 103</div>
              </div>
            </div>
            <div className={styles.collateralcalculationChild} />
            <div className={styles.collateralsection}>
              <div className={styles.collateralWorthLabel6}>
                <div className={styles.worthInDollar}>1234 LYR</div>
              </div>
              <div className={styles.collateralWorthLabel7}>
                <div className={styles.worthInDollar}>Total:</div>
                <div className={styles.div4}>$ 103</div>
              </div>
            </div>
          </div>
          <button
            className={styles.reviewtheorder}
            onClick={onReviewTheOrderClick}
          >
            <div className={styles.primaryButton}>Review the Order</div>
          </button>
        </div>
        <Footer
          iconImageUrl="../box-alt-light.svg"
          moleculeImageUrl="../molecule-light.svg"
          walletImageUrl="../wallet-light.svg"
          userImageUrl="../user-alt-light.svg"
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
