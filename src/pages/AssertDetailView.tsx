import { FunctionComponent, useCallback } from "react";
import { Box, Slider } from "@mui/material";
import TopNavigationBar from "../components/TopNavigationBar";
import Footer from "../components/Footer";
import styles from "./AssertDetailView.module.css";

const AssertDetailView: FunctionComponent = () => {
  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onContextMenuButtonClick = useCallback(() => {
    //TODO: context menu
  }, []);

  return (
    <div className={styles.assertdetailview}>
      <TopNavigationBar
        title="Assert Details"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className={styles.assertdetailviewParent}>
        <div className={styles.collateralsection}>
          <div className={styles.asserttitleregion}>
            <div className={styles.assertauthorsection}>
              <div className={styles.aLegendNft}>A legend NFT author</div>
              <div className={styles.materialSymbolsshareParent}>
                <img
                  className={styles.materialSymbolsshareIcon}
                  alt=""
                  src="../materialsymbolsshare.svg"
                />
                <img
                  className={styles.materialSymbolsshareIcon}
                  alt=""
                  src="../carbonoverflowmenuhorizontal.svg"
                />
              </div>
            </div>
            <div className={styles.asserttitlesection}>
              <div className={styles.mekaLegends}>Meka Legends # 500</div>
            </div>
            <div className={styles.assertownersection}>
              <div className={styles.mekaLegends}>Owner someone</div>
            </div>
          </div>
          <div className={styles.asserttitleregion}>
            <div className={styles.iconParkSolidblockchainWrapper}>
              <img
                className={styles.materialSymbolsshareIcon}
                alt=""
                src="../iconparksolidblockchain.svg"
              />
            </div>
            <img
              className={styles.titlebannerregionChild}
              alt=""
              src="../frame-61@2x.png"
            />
          </div>
          <div className={styles.assertstatssection}>
            <div className={styles.icoutlineRemoveRedEyeParent}>
              <img
                className={styles.materialSymbolsshareIcon}
                alt=""
                src="../icoutlineremoveredeye.svg"
              />
              <div className={styles.mekaLegends}>32 views</div>
            </div>
            <div className={styles.icoutlineRemoveRedEyeParent}>
              <img
                className={styles.materialSymbolsshareIcon}
                alt=""
                src="../mdicardsheartoutline.svg"
              />
              <div className={styles.mekaLegends}>5 favorite</div>
            </div>
            <div className={styles.icoutlineRemoveRedEyeParent}>
              <img
                className={styles.materialSymbolsshareIcon}
                alt=""
                src="../mdishapeoutline.svg"
              />
              <div className={styles.mekaLegends}>Fiat OTC</div>
            </div>
          </div>
        </div>
        <div className={styles.descriptiontitle}>
          <img
            className={styles.materialSymbolsshareIcon}
            alt=""
            src="../fluenttextdescription20filled.svg"
          />
          <div className={styles.mekaLegends}>Description</div>
        </div>
        <div className={styles.descriptiondetails}>
          <div className={styles.mekaLegends}>By A great designer</div>
        </div>
        <div className={styles.descriptiontitle}>
          <img
            className={styles.materialSymbolsshareIcon}
            alt=""
            src="../icoutlinepricechange.svg"
          />
          <div className={styles.mekaLegends}>Price and payment</div>
        </div>
        <div className={styles.buysection}>
          <div className={styles.priceandbuyregion}>
            <div className={styles.pricelabel}>
              <div className={styles.mekaLegends}>Current Price</div>
            </div>
            <div className={styles.priceandvaluelabel}>
              <div className={styles.mekaLegends}>0.0325</div>
              <div className={styles.tetherusdtParent}>
                <div className={styles.tetherusdt}>tether/USDT</div>
                <div className={styles.div1}>$86.20</div>
              </div>
            </div>
          </div>
          <div className={styles.setlimitsection}>
            <div className={styles.pricelabel1}>
              <div className={styles.mekaLegends}>Available to buy</div>
            </div>
            <div className={styles.priceandvaluelabel1}>
              <div className={styles.mekaLegends}>100 - 200</div>
              <div className={styles.tetherusdtParent}>
                <div className={styles.tetherusdt}>tether/ETH</div>
                <div className={styles.div1}>$40 ~ 84.20</div>
              </div>
            </div>
          </div>
          <div className={styles.pricelabelParent}>
            <div className={styles.pricelabel1}>
              <div className={styles.mekaLegends}>My Offer</div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.selectedamountParent}>
                <input
                  className={styles.selectedamount}
                  type="number"
                  placeholder="150"
                />
                <div className={styles.tetherethGroup}>
                  <div className={styles.tethereth1}>tether/ETH</div>
                  <div className={styles.tetherusdt}>100 tether/USDT</div>
                  <div className={styles.tetherusdt}>$ 10.3</div>
                </div>
              </div>
              <div className={styles.limitadjustsection}>
                <div className={styles.tetherusdt}>Min</div>
                <Box className={styles.slidercontinuous}>
                  <Slider
                    color="primary"
                    defaultValue={20}
                    orientation="horizontal"
                  />
                </Box>
                <div className={styles.max}>Max</div>
              </div>
            </div>
          </div>
          <div className={styles.makeofferbutton}>
            <div className={styles.pricelabel1}>
              <div className={styles.mekaLegends}>Collateral and Fees</div>
            </div>
            <div className={styles.collateralcalculation}>
              <div className={styles.collateralsection}>
                <div className={styles.collateralWorthLabel}>
                  <div className={styles.tetherusdt}>
                    Collateral value: 120%
                  </div>
                  <div className={styles.tetherusdt}>1234 LYR</div>
                </div>
                <div className={styles.collateralWorthLabel1}>
                  <div className={styles.tetherusdt}>$ 103</div>
                </div>
              </div>
              <div className={styles.collateralsection}>
                <div className={styles.collateralWorthLabel}>
                  <div className={styles.tetherusdt}>DAO fee: 1%</div>
                  <div className={styles.tetherusdt}>1234 LYR</div>
                </div>
                <div className={styles.collateralWorthLabel1}>
                  <div className={styles.tetherusdt}>$ 103</div>
                </div>
              </div>
              <div className={styles.collateralsection}>
                <div className={styles.collateralWorthLabel}>
                  <div className={styles.tetherusdt}>Network fee: 0.2%</div>
                  <div className={styles.tetherusdt}>1234 LYR</div>
                </div>
                <div className={styles.collateralWorthLabel1}>
                  <div className={styles.tetherusdt}>$ 103</div>
                </div>
              </div>
              <div className={styles.collateralcalculationChild} />
              <div className={styles.collateralsection}>
                <div className={styles.collateralWorthLabel6}>
                  <div className={styles.tetherusdt}>1234 LYR</div>
                </div>
                <div className={styles.collateralWorthLabel7}>
                  <div className={styles.tetherusdt}>Total:</div>
                  <div className={styles.div8}>$ 103</div>
                </div>
              </div>
            </div>
            <button className={styles.prepareSellOrderButton}>
              <img
                className={styles.materialSymbolsshareIcon}
                alt=""
                src="../evapricetagsoutline.svg"
              />
              <div className={styles.primaryButton}>Make offer</div>
            </button>
          </div>
        </div>
        <div className={styles.descriptiontitle}>
          <img
            className={styles.materialSymbolsshareIcon}
            alt=""
            src="../galasecure.svg"
          />
          <div className={styles.mekaLegends}>Trading protection</div>
        </div>
        <div className={styles.descriptiondetails1}>
          <div className={styles.thisOrderIs}>
            This order is protected by staking of 100,000 LYR, or $1,000 in USD,
            from the seller. This order is regulated by the DAO “A good shop”
            which has a total staking of 30,000,000 LYR.
          </div>
        </div>
      </div>
      <Footer
        iconImageUrl="../box-alt-light6.svg"
        moleculeImageUrl="../molecule-light6.svg"
        walletImageUrl="../wallet-light6.svg"
        userImageUrl="../user-alt-light6.svg"
        propColor="#0ebd8d"
        propColor1="#434343"
      />
    </div>
  );
};

export default AssertDetailView;
