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
import { BlockchainAPI } from "../app/blockchain";
import {
  IDao,
  IUniOrder,
  TokenGenesisBlock
} from "../app/blockchain/blocks/block";
import { NftMetadata } from "../app/blockchain/blocks/meta";

interface IDealerUser {
  UserName: string;
  AccountId: string;
  AvatarId: string;
}

interface IAssertInfo {
  OrderId: string;
  Blocks: {
    Order: IUniOrder;
    Offgen: TokenGenesisBlock;
    Bidgen: TokenGenesisBlock;
    Dao: IDao;
  };
  Users: {
    Seller: IDealerUser;
    Author: IDealerUser;
  };
  Meta: NftMetadata;
}

const AssertDetailView: FunctionComponent = () => {
  const dispatch = useDispatch();
  const app = useSelector(getAppSelector);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});

  const [info, setInfo] = useState<IAssertInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // variable for buyAmount
  const [buyAmount, setBuyAmount] = useState(0);

  useEffect(() => {
    const orderId = searchParams.get("orderId");
    if (orderId) {
      try {
        const fetchit = async () => {
          const response = await BlockchainAPI.fetchOrderById(orderId);
          setInfo(response as IAssertInfo);
          setIsLoading(false);
        };
        fetchit();
      } catch (error) {
        console.error(error);
      }
      // dispatch({
      //   type: MARKET_GET_ORDER_BY_ID,
      //   payload: {
      //     orderId: orderId
      //   }
      // });
    }
  }, [dispatch, searchParams]);

  const onMakeOfferButtonClick = useCallback(() => {
    if (!info) {
      dispatch({
        type: "ERROR",
        payload: {
          error: "Order not found"
        }
      });
      return;
    }
    const order = info.Blocks.Order.Order;
    dispatch({
      type: WALLET_CREATE_TRADE,
      payload: {
        accountId: app.wallet.accountId,
        trade: {
          daoId: order.daoId,
          dealerId: order.dealerId,
          orderId: info.OrderId,
          orderOwnerId: info.Blocks.Order.OwnerAccountId,

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
  }, [navigate, buyAmount, dispatch, app.wallet.accountId, info]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="assertdetailview">
          <PrimaryAccountCard />
          <div className="assertdetailview1">
            <div className="asserttitleregion">
              <div className="assertauthorsection">
                <div className="a-legend-nft">
                  Author: {info?.Users.Author.UserName}
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
                  {info?.Blocks.Offgen.Custom1 ?? info?.Blocks.Offgen.Ticker}
                </div>
              </div>
              <div className="assertownersection">
                <div className="meka-legends">
                  Owner: {info?.Users.Seller.UserName}
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
                src={info?.Meta?.image ?? "../asserts/frame-61@2x.png"}
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
              {info?.Blocks.Offgen.Description ?? "[empty]"}
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
                  {info?.Blocks.Order.Order.price} {info?.Blocks.Bidgen.Ticker}
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
                    {info?.Blocks.Order.Order.limitMin} -{" "}
                    {info?.Blocks.Order.Order.limitMax}
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
                    step={10 ** (-1 * info?.Blocks.Offgen.Precision!)}
                    min={info?.Blocks.Order.Order.limitMin}
                    max={info?.Blocks.Order.Order.limitMax}
                    onChange={(e, v) => setBuyAmount(v as number)}
                  />
                </Box>
                <div className="meka-legends">Max</div>
              </div>
              <input
                className="selectedamount"
                type="number"
                placeholder={info?.Blocks.Order.Order.limitMin! + ""}
                value={buyAmount}
                onChange={(e) => console.log(e)}
              />
            </div>
            <div className="makeofferbutton">
              <button
                className="prepare-sell-order-button5"
                onClick={onMakeOfferButtonClick}
              >
                <img
                  className="material-symbolsshare-icon"
                  alt=""
                  src="../asserts/evapricetagsoutline.svg"
                />
                <div className="primary-button2">Make offer</div>
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
                This order is protected by staking of 100,000 LYR, or $1,000 in
                USD, from the seller. This order belongs to DAO 'A good shop'
                which has a total staking of 30,000,000 LYR.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssertDetailView;
