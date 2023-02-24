import { FunctionComponent, useCallback } from "react";
import "./ReceiveCard.css";

type ReceiveCardType = {
  txType?: string;
};

const ReceiveCard: FunctionComponent<ReceiveCardType> = ({ txType }) => {
  const onBannerImage3Click = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  return (
    <div className="ordercard3">
      <div className="order-brief-section3">
        <button className="banner-image3" onClick={onBannerImage3Click}>
          <div className="order-banner3">
            <button className="order-image3">
              <img
                className="fluentmail-inbox-arrow-down-2-icon"
                alt=""
                src="../asserts/fluentmailinboxarrowdown20regular.svg"
              />
            </button>
            <div className="order-status3">
              <b className="success2">Success</b>
            </div>
          </div>
        </button>
        <div className="title-section3">
          <div className="receive-parent">
            <b className="receive">{txType}</b>
            <b className="tetherusdt4">tether/USDT</b>
          </div>
          <div className="line-div" />
          <div className="am-wrapper1">
            <div className="receive">12/29/2022 10:25:37 AM</div>
          </div>
          <div className="details-section3">
            <div className="block13">
              <div className="receive">From</div>
              <div className="receive">Sent on</div>
            </div>
            <div className="block23">
              <div className="receive">LT8d...in6wm6SyfnqmmJN7jSny</div>
              <div className="receive">12/29/2022 10:25:37 AM</div>
            </div>
            <div className="details-section-child1" />
          </div>
        </div>
      </div>
      <div className="trades-section3">
        <div className="width-controller3" />
      </div>
    </div>
  );
};

export default ReceiveCard;
