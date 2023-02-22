import { FunctionComponent, useCallback } from "react";
import { Box, Slider } from "@mui/material";
import TopNavigationBar from "../components/TopNavigationBar";
import CollateralCalculation from "../components/CollateralCalculation";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./AssertDetailView.css";

const AssertDetailView: FunctionComponent = () => {
  const onMiniProgramsButtonsClick = useCallback(() => {
    //TODO: nav back
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onHomeClick = useCallback(() => {
    //TODO: back home
  }, []);

  const onContextPlusClick = useCallback(() => {
    //TODO: context menu
  }, []);

  return (
    <div className="assertdetailview">
      <TopNavigationBar
        title="Assert Details"
        onMiniProgramsButtonsClick={onMiniProgramsButtonsClick}
        onTitleClick={onTitleClick}
        onHomeClick={onHomeClick}
        separator="../asserts/separator4.svg"
        onContextPlusClick={onContextPlusClick}
        rectangle1="../asserts/rectangle-14.svg"
        iconleft="../asserts/iconleft4.svg"
        ellipse="../asserts/ellipse8.svg"
        ellipse1="../asserts/ellipse9.svg"
        vector7="../asserts/vector-74.svg"
        vector8="../asserts/vector-84.svg"
      />
      <div className="assertdetailview-parent">
        <div className="assertdetailview1">
          <div className="asserttitleregion">
            <div className="assertauthorsection">
              <div className="a-legend-nft">A legend NFT author</div>
              <div className="material-symbolsshare-parent">
                <img
                  className="material-symbolsshare-icon"
                  alt=""
                  src="../asserts/materialsymbolsshare.svg"
                />
                <img
                  className="material-symbolsshare-icon"
                  alt=""
                  src="../asserts/carbonoverflowmenuhorizontal.svg"
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
                src="../asserts/iconparksolidblockchain.svg"
              />
            </div>
            <img
              className="titlebannerregion-child"
              alt=""
              src="../asserts/frame-61@2x.png"
            />
          </div>
          <div className="assertstatssection">
            <div className="icoutline-remove-red-eye-parent">
              <img
                className="material-symbolsshare-icon"
                alt=""
                src="../asserts/icoutlineremoveredeye.svg"
              />
              <div className="meka-legends">32 views</div>
            </div>
            <div className="icoutline-remove-red-eye-parent">
              <img
                className="material-symbolsshare-icon"
                alt=""
                src="../asserts/mdicardsheartoutline.svg"
              />
              <div className="meka-legends">5 favorite</div>
            </div>
            <div className="icoutline-remove-red-eye-parent">
              <img
                className="material-symbolsshare-icon"
                alt=""
                src="../asserts/mdishapeoutline.svg"
              />
              <div className="meka-legends">Fiat OTC</div>
            </div>
          </div>
        </div>
        <div className="descriptiontitle">
          <img
            className="material-symbolsshare-icon"
            alt=""
            src="../asserts/fluenttextdescription20filled.svg"
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
            src="../asserts/icoutlinepricechange.svg"
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
                <div className="div4">$86.20</div>
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
                <div className="div4">$40 ~ 84.20</div>
              </div>
            </div>
          </div>
          <div className="pricelabel-parent">
            <div className="pricelabel1">
              <div className="meka-legends">My Offer</div>
            </div>
            <div className="frame-parent1">
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
            <CollateralCalculation eqprice="1234 LYR" />
            <button className="prepare-sell-order-button6">
              <img
                className="material-symbolsshare-icon"
                alt=""
                src="../asserts/evapricetagsoutline.svg"
              />
              <div className="primary-button3">Make offer</div>
            </button>
          </div>
        </div>
        <div className="descriptiontitle">
          <img
            className="material-symbolsshare-icon"
            alt=""
            src="../asserts/galasecure.svg"
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
      <BottomNavigationBar
        boxAltLight1="../asserts/box-alt-light4.svg"
        moleculeLight1="../asserts/molecule-light4.svg"
        walletLight1="../asserts/wallet-light4.svg"
        userAltLight1="../asserts/user-alt-light4.svg"
      />
    </div>
  );
};

export default AssertDetailView;
