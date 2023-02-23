import { FunctionComponent, useCallback } from "react";
import { Box, Slider } from "@mui/material";
import TopNavigationBar from "../components/TopNavigationBar";
import Footer from "../components/Footer";
import "./AssertDetailView.css";

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
    <div className="assertdetailview">
      <TopNavigationBar
        title="Assert Details"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className="assertdetailview-parent">
        <div className="collateralsection">
          <div className="asserttitleregion">
            <div className="assertauthorsection">
              <div className="a-legend-nft">A legend NFT author</div>
              <div className="material-symbolsshare-parent">
                <img
                  className="material-symbolsshare-icon"
                  alt=""
                  src="../materialsymbolsshare.svg"
                />
                <img
                  className="material-symbolsshare-icon"
                  alt=""
                  src="../carbonoverflowmenuhorizontal.svg"
                />
              </div>
            </div>
            <div className="asserttitlesection">
              <div className="meka-legends">Meka Legends # 500</div>
            </div>
            <div className="assertownersection">
              <div className="meka-legends">Owner someone</div>
            </div>
          </div>
          <div className="asserttitleregion">
            <div className="icon-park-solidblockchain-wrapper">
              <img
                className="material-symbolsshare-icon"
                alt=""
                src="../iconparksolidblockchain.svg"
              />
            </div>
            <img
              className="titlebannerregion-child"
              alt=""
              src="../frame-61@2x.png"
            />
          </div>
          <div className="assertstatssection">
            <div className="icoutline-remove-red-eye-parent">
              <img
                className="material-symbolsshare-icon"
                alt=""
                src="../icoutlineremoveredeye.svg"
              />
              <div className="meka-legends">32 views</div>
            </div>
            <div className="icoutline-remove-red-eye-parent">
              <img
                className="material-symbolsshare-icon"
                alt=""
                src="../mdicardsheartoutline.svg"
              />
              <div className="meka-legends">5 favorite</div>
            </div>
            <div className="icoutline-remove-red-eye-parent">
              <img
                className="material-symbolsshare-icon"
                alt=""
                src="../mdishapeoutline.svg"
              />
              <div className="meka-legends">Fiat OTC</div>
            </div>
          </div>
        </div>
        <div className="descriptiontitle">
          <img
            className="material-symbolsshare-icon"
            alt=""
            src="../fluenttextdescription20filled.svg"
          />
          <div className="meka-legends">Description</div>
        </div>
        <div className="descriptiondetails">
          <div className="meka-legends">By A great designer</div>
        </div>
        <div className="descriptiontitle">
          <img
            className="material-symbolsshare-icon"
            alt=""
            src="../icoutlinepricechange.svg"
          />
          <div className="meka-legends">Price and payment</div>
        </div>
        <div className="buysection">
          <div className="priceandbuyregion">
            <div className="pricelabel">
              <div className="meka-legends">Current Price</div>
            </div>
            <div className="priceandvaluelabel">
              <div className="meka-legends">0.0325</div>
              <div className="tetherusdt-parent">
                <div className="tetherusdt">tether/USDT</div>
                <div className="div2">$86.20</div>
              </div>
            </div>
          </div>
          <div className="setlimitsection">
            <div className="pricelabel1">
              <div className="meka-legends">Available to buy</div>
            </div>
            <div className="priceandvaluelabel1">
              <div className="meka-legends">100 - 200</div>
              <div className="tetherusdt-parent">
                <div className="tetherusdt">tether/ETH</div>
                <div className="div2">$40 ~ 84.20</div>
              </div>
            </div>
          </div>
          <div className="pricelabel-parent">
            <div className="pricelabel1">
              <div className="meka-legends">My Offer</div>
            </div>
            <div className="frame-parent4">
              <div className="selectedamount-parent">
                <input
                  className="selectedamount"
                  type="number"
                  placeholder="150"
                />
                <div className="tethereth-group">
                  <div className="tethereth1">tether/ETH</div>
                  <div className="tetherusdt">100 tether/USDT</div>
                  <div className="tetherusdt">$ 10.3</div>
                </div>
              </div>
              <div className="limitadjustsection">
                <div className="tetherusdt">Min</div>
                <Box className="slidercontinuous">
                  <Slider
                    color="primary"
                    defaultValue={20}
                    orientation="horizontal"
                  />
                </Box>
                <div className="max">Max</div>
              </div>
            </div>
          </div>
          <div className="makeofferbutton">
            <div className="pricelabel1">
              <div className="meka-legends">Collateral and Fees</div>
            </div>
            <div className="collateralcalculation">
              <div className="collateralsection">
                <div className="collateral-worth-label">
                  <div className="tetherusdt">Collateral value: 120%</div>
                  <div className="tetherusdt">1234 LYR</div>
                </div>
                <div className="collateral-worth-label1">
                  <div className="tetherusdt">$ 103</div>
                </div>
              </div>
              <div className="collateralsection">
                <div className="collateral-worth-label">
                  <div className="tetherusdt">DAO fee: 1%</div>
                  <div className="tetherusdt">1234 LYR</div>
                </div>
                <div className="collateral-worth-label1">
                  <div className="tetherusdt">$ 103</div>
                </div>
              </div>
              <div className="collateralsection">
                <div className="collateral-worth-label">
                  <div className="tetherusdt">Network fee: 0.2%</div>
                  <div className="tetherusdt">1234 LYR</div>
                </div>
                <div className="collateral-worth-label1">
                  <div className="tetherusdt">$ 103</div>
                </div>
              </div>
              <div className="collateralcalculation-child" />
              <div className="collateralsection">
                <div className="collateral-worth-label6">
                  <div className="tetherusdt">1234 LYR</div>
                </div>
                <div className="collateral-worth-label7">
                  <div className="tetherusdt">Total:</div>
                  <div className="div9">$ 103</div>
                </div>
              </div>
            </div>
            <button className="prepare-sell-order-button4">
              <img
                className="material-symbolsshare-icon"
                alt=""
                src="../evapricetagsoutline.svg"
              />
              <div className="primary-button4">Make offer</div>
            </button>
          </div>
        </div>
        <div className="descriptiontitle">
          <img
            className="material-symbolsshare-icon"
            alt=""
            src="../galasecure.svg"
          />
          <div className="meka-legends">Trading protection</div>
        </div>
        <div className="descriptiondetails1">
          <div className="this-order-is">
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
