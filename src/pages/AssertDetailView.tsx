import { FunctionComponent, useEffect, useState, useCallback } from "react";
import ReactLoading from "react-loading";
import { Box, Slider } from "@mui/material";
import TopNavigationBar from "../components/TopNavigationBar";
import CollateralCalculation from "../components/CollateralCalculation";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./AssertDetailView.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import {
  getAppSelector,
  getAuthSelector,
  getMarketSelector,
  getNotifySelector
} from "../app/selectors";
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
  const auth = useSelector(getAuthSelector);
  const notify = useSelector(getNotifySelector);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});

  const [info, setInfo] = useState<IAssertInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // variable for buyAmount
  const [buyAmount, setBuyAmount] = useState(0);

  // dollar estimated
  const [pricedollar, setPriceDollar] = useState(0);
  const [avalibleMinDollar, setAvalibleMinDollar] = useState(0);
  const [avalibleMaxDollar, setAvalibleMaxDollar] = useState(0);
  const [offerDollar, setOfferDollar] = useState(0);

  // bid estimated
  const [bidAmount, setBidAmount] = useState(0);
  const [totallyr, setTotalLYR] = useState<number>(0);

  useEffect(() => {
    const orderId = searchParams.get("orderId");
    if (orderId) {
      try {
        const fetchit = async () => {
          const response = await BlockchainAPI.fetchOrderById(orderId);
          setInfo(response as IAssertInfo);
          setBuyAmount(response.Blocks.Order.Order.limitMin);
          setIsLoading(false);
        };
        fetchit();
      } catch (error) {
        console.error(error);
      }
    }
  }, [dispatch, searchParams]);

  useEffect(() => {
    if (info && notify.prices) {
      let pricedollar =
        info.Blocks.Order.Order.eqprice *
        notify.prices.find((a) => a.ticker == "LYR")!.price;
      setPriceDollar(pricedollar);
      setAvalibleMinDollar(pricedollar * info.Blocks.Order.Order.limitMin);
      setAvalibleMaxDollar(pricedollar * info.Blocks.Order.Order.limitMax);
      setBidAmount(buyAmount * info.Blocks.Order.Order.price);
      setOfferDollar(pricedollar * buyAmount);
    }
  }, [info, notify, buyAmount]);

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
    if (!auth.hasKey) {
      navigate("/openwallet?ret=/assertdetailview?orderId=" + info.OrderId);
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
          eqprice: order.eqprice,
          cltamt: totallyr,
          payVia: "Default",
          amount: buyAmount,
          pay: order.price * buyAmount
        }
      }
    });
  }, [navigate, buyAmount, dispatch, app.wallet.accountId, info, totallyr]);

  const onTotal = (total: number, daofee: number, netfee: number) => {
    setTotalLYR(total);
  };

  return (
    <div className="assertdetailview main-content">
      <TopNavigationBar title="Assert Details" />
      {isLoading && (
        <div className="overlay">
          <div className="center">
            <h1>Loading...</h1>
            <ReactLoading
              type="spinningBubbles"
              color="#ffffff"
              height={100}
              width={100}
            />
          </div>
        </div>
      )}
      <div className="assertdetailview-parent">
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
            <div className="asserttitlesection">
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
            {info?.Meta?.image && (
              <img
                className="titlebannerregion-child"
                alt=""
                src={info?.Meta?.image}
              />
            )}
            {info?.Meta?.image || <h1>{info?.Blocks.Offgen.Ticker}</h1>}
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
                {info?.Blocks.Order.Order.price}
              </div>
              <div className="tetherusdt-parent">
                <div className="tetherusdt">{info?.Blocks.Bidgen.Ticker}</div>
                <div className="div2">
                  ${" "}
                  {pricedollar.toLocaleString(undefined, {
                    maximumFractionDigits: 2
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="setlimitsection">
            <div className="pricelabel1">
              <div className="meka-legends">Available to buy</div>
            </div>
            <div className="priceandvaluelabel1">
              <div className="meka-legends">
                {" "}
                {info?.Blocks.Order.Order.limitMin} -{" "}
                {info?.Blocks.Order.Order.limitMax}
              </div>
              <div className="tetherusdt-parent">
                <div className="tetherusdt">
                  {info?.Blocks.Offgen.Custom1 ?? info?.Blocks.Offgen.Ticker}
                </div>
                <div className="div2">
                  {" "}
                  ${" "}
                  {avalibleMinDollar.toLocaleString(undefined, {
                    maximumFractionDigits: 2
                  })}{" "}
                  ~{" "}
                  {avalibleMaxDollar.toLocaleString(undefined, {
                    maximumFractionDigits: 2
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="my-offer-section">
            <div className="pricelabel1">
              <div className="meka-legends">My Offer</div>
            </div>
            <div className="frame-parent2">
              <div className="selectedamount-parent">
                <input
                  placeholder="Amount to buy"
                  className="selectedamount"
                  type="number"
                  value={buyAmount}
                  min={info?.Blocks.Order.Order.limitMin}
                  max={info?.Blocks.Order.Order.limitMax}
                  onChange={(e) => setBuyAmount(Number(e.target.value))}
                />
                <div className="tethereth-group">
                  <div className="tethereth1">
                    {info?.Blocks.Offgen.Custom1 ?? info?.Blocks.Offgen.Ticker}
                  </div>
                  <div className="tetherusdt">
                    {bidAmount.toLocaleString(undefined, {
                      maximumFractionDigits: 8
                    })}{" "}
                    {info?.Blocks.Bidgen.Ticker}
                  </div>
                  <div className="tetherusdt">
                    ${" "}
                    {offerDollar.toLocaleString(undefined, {
                      maximumFractionDigits: 2
                    })}
                  </div>
                </div>
              </div>
              <div className="limitadjustsection">
                <div className="tetherusdt">Min</div>
                <Box className="slidercontinuous">
                  <Slider
                    color="primary"
                    orientation="horizontal"
                    step={info ? 10 ** (-1 * info.Blocks.Offgen.Precision) : 0}
                    min={info?.Blocks.Order.Order.limitMin ?? 0}
                    max={info?.Blocks.Order.Order.limitMax ?? 0}
                    onChange={(e, v) => setBuyAmount(v as number)}
                    value={buyAmount ?? 0}
                  />
                </Box>
                <div className="max">Max</div>
              </div>
            </div>
          </div>
        </div>
        <div className="makeofferbutton">
          <div className="pricelabel1">
            <div className="meka-legends">Collateral and Fees</div>
          </div>
          <CollateralCalculation
            selling={false}
            eqprice={info?.Blocks.Order.Order.eqprice ?? 0}
            eqdollar={pricedollar}
            amount={buyAmount}
            dao={info?.Blocks.Dao ?? null}
            onTotalChange={onTotal}
          />
        </div>
        <button className="buttons4" onClick={onMakeOfferButtonClick}>
          <img
            className="material-symbolsshare-icon"
            alt=""
            src="../asserts/evapricetagsoutline1.svg"
          />
          <div className="primary-button4">Make offer</div>
        </button>
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
        <BottomNavigationBar />
      </div>
    </div>
  );
};

export default AssertDetailView;
