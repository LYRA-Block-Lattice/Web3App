import { FunctionComponent, useEffect, useState, useCallback } from "react";
import { Box, Slider } from "@mui/material";
import "./AssertDetailView.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { getAppSelector, getMarketSelector } from "../app/selectors";
import {
  MARKET_GET_ORDER_BY_ID,
  WALLET_CREATE_TRADE
} from "../app/actionTypes";
import PrimaryAccountCard from "../components/PrimaryAccountCard";

const AssertDetailView: FunctionComponent = () => {
  const dispatch = useDispatch();
  const market = useSelector(getMarketSelector);
  const app = useSelector(getAppSelector);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});

  // variable for buyAmount
  const [buyAmount, setBuyAmount] = useState(0);

  useEffect(() => {
    const orderId = searchParams.get("orderId");
    if (orderId) {
      dispatch({
        type: MARKET_GET_ORDER_BY_ID,
        payload: {
          orderId: orderId
        }
      });
    }
  }, [dispatch, searchParams]);

  const onMakeOfferButtonClick = useCallback(() => {
    const order = market.order?.Blocks[0].Order;
    if (!order) {
      dispatch({
        type: "ERROR",
        payload: {
          error: "Order not found"
        }
      });
      return;
    }
    dispatch({
      type: WALLET_CREATE_TRADE,
      payload: {
        accountId: app.wallet.accountId,
        trade: {
          daoId: order.daoId,
          dealerId: order.dealerId,
          orderId: market.order?.Blocks[0].AccountID,
          orderOwnerId: market.order?.Blocks[0].OwnerAccountId,

          offby: order.offerby,
          offering: order.offering,
          bidby: order.bidby,
          biding: order.biding,

          price: order.price,
          cltamt: 100,
          payVia: "Meka",
          amount: buyAmount,
          pay: order.price * buyAmount
        }
      }
    });
  }, [navigate, buyAmount, dispatch, app.wallet.accountId, market.order]);

  return (
    <div className="assertdetailview">
      <PrimaryAccountCard />
      <div className="assertdetailview1">
        <div className="asserttitleregion">
          <div className="assertauthorsection">
            <div className="a-legend-nft">
              Author:{" "}
              {market.order?.Users?.lengh > 1
                ? market.order?.Users[1].UserName
                : market.order?.Users[0].UserName}
            </div>
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
          <div className="asserttitlesection1">
            <div className="meka-legends">
              {market.order?.Blocks[1].Custom1 ??
                market.order?.Blocks[1].Ticker}
            </div>
          </div>
          <div className="assertownersection">
            <div className="meka-legends">
              Owner: {market.order?.Users[0].UserName}
            </div>
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
            src={market.order?.Meta?.image ?? "../asserts/frame-61@2x.png"}
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
        <div className="meka-legends">
          {market.order?.Blocks[1].Description ?? "[empty]"}
        </div>
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
            <div className="meka-legends">
              {market.order?.Blocks[0].Order.price}{" "}
              {market.order?.Blocks[2].Ticker}
            </div>
            <div className="tetherusdt">$ 0</div>
          </div>
        </div>
        <div className="selectamountsection">
          <div className="setlimitsection">
            <div className="pricelabel1">
              <div className="meka-legends">Available to buy</div>
            </div>
            <div className="priceandvaluelabel1">
              <div className="meka-legends">
                {market.order?.Blocks[0].Order.limitMin} -{" "}
                {market.order?.Blocks[0].Order.limitMax}
              </div>
              <div className="tetherusdt">tether/USDT</div>
              <div className="div8">$0 ~ 0</div>
            </div>
          </div>
          <div className="limitadjustsection">
            <div className="meka-legends">Min</div>
            <Box className="slidercontinuous">
              <Slider
                color="primary"
                orientation="horizontal"
                min={market.order?.Blocks[0].Order.limitMin}
                max={market.order?.Blocks[0].Order.limitMax}
                onChange={(e, v) => setBuyAmount(v as number)}
              />
            </Box>
            <div className="meka-legends">Max</div>
          </div>
          <input
            className="selectedamount"
            type="number"
            placeholder={market.order?.Blocks[0].Order.limitMin}
            value={buyAmount}
            onChange={(e) => console.log(e)}
          />
        </div>
        <div className="makeofferbutton">
          <button
            className="prepare-sell-order-button4"
            onClick={onMakeOfferButtonClick}
          >
            <img
              className="material-symbolsshare-icon"
              alt=""
              src="../asserts/evapricetagsoutline.svg"
            />
            <div className="primary-button1">Make offer</div>
          </button>
        </div>
        <div className="descriptiontitle">
          <img
            className="material-symbolsshare-icon"
            alt=""
            src="../asserts/galasecure.svg"
          />
          <div className="meka-legends">Trading protection</div>
        </div>
        <div className="descriptiondetails">
          <div className="a-legend-nft">
            This order is protected by staking of 100,000 LYR, or $1,000 in USD,
            from the seller. This order belongs to DAO ‘A good shop’ which has a
            total staking of 30,000,000 LYR.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssertDetailView;
