import { FunctionComponent, useCallback } from "react";
import OpenContainer from "../components/OpenContainer";
import "./OrderForm.css";

const OrderForm: FunctionComponent = () => {
  const onBannerImageClick = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  return (
    <div className="ordercard3">
      <div className="order-brief-section3">
        <OpenContainer
          tokenImageUrl="../asserts/icbaselinegeneratingtokens3.svg"
          propBackgroundColor="#fa7268"
          onBannerImageClick={onBannerImageClick}
        />
        <a className="title-section2">
          <div className="sell-group">
            <b className="sold">Sell</b>
            <b className="sold">BTC</b>
            <img className="frame-child6" alt="" src="../asserts/arrow-2.svg" />
            <b className="tetherusdt4">tether/USDT</b>
          </div>
          <div className="title-section-item" />
          <div className="am-container">
            <div className="sold">12/29/2022 10:25:37 AM</div>
          </div>
          <div className="details-section2">
            <div className="block12">
              <div className="sold">Price</div>
              <div className="sold">Limit Min</div>
              <div className="sold">Sold</div>
            </div>
            <div className="block22">
              <div className="sold">10,323</div>
              <div className="sold">3.2</div>
              <div className="sold">123</div>
            </div>
            <div className="details-section-inner" />
            <div className="block32">
              <div className="sold">Amount</div>
              <div className="sold">Limit Max</div>
              <div className="sold">Shelf</div>
            </div>
            <div className="block22">
              <div className="sold">1113.2</div>
              <div className="sold">3.2</div>
              <div className="sold">123</div>
            </div>
          </div>
        </a>
      </div>
      <div className="trades-section3">
        <div className="width-controller3" />
      </div>
      <div className="itemactions1">
        <button className="delist-button1">
          <div className="mini-button6">Delist</div>
        </button>
        <button className="delist-button1">
          <div className="mini-button6">Close</div>
        </button>
      </div>
    </div>
  );
};

export default OrderForm;
