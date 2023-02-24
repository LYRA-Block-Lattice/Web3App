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
    <div className="ordercard5">
      <div className="order-brief-section5">
        <button className="banner-image5" onClick={onBannerImage3Click}>
          <div className="order-banner5">
            <button className="order-image5">
              <img
                className="fluentmail-inbox-arrow-down-2-icon"
                alt=""
                src="../asserts/fluentmailinboxarrowdown20regular.svg"
              />
            </button>
            <div className="order-status5">
              <b className="success2">Success</b>
            </div>
          </div>
        </button>
        <div className="title-section5">
          <div className="receive-parent">
            <b className="receive">{txType}</b>
            <b className="tetherusdt6">tether/USDT</b>
          </div>
          <div className="title-section-child2" />
          <div className="am-wrapper2">
            <div className="receive">12/29/2022 10:25:37 AM</div>
          </div>
          <div className="details-section5">
            <div className="block15">
              <div className="receive">From</div>
              <div className="receive">Sent on</div>
            </div>
            <div className="block25">
              <div className="receive">LT8d...in6wm6SyfnqmmJN7jSny</div>
              <div className="receive">12/29/2022 10:25:37 AM</div>
            </div>
            <div className="details-section-child3" />
          </div>
        </div>
      </div>
      <div className="trades-section5">
        <div className="width-controller5" />
      </div>
    </div>
  );
};

export default ReceiveCard;
