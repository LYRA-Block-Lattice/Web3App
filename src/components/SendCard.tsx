import { FunctionComponent, useCallback } from "react";
import "./SendCard.css";

type SendCardType = {
  txType?: string;
};

const SendCard: FunctionComponent<SendCardType> = ({ txType }) => {
  const onBannerImage2Click = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  return (
    <div className="ordercard2">
      <div className="order-brief-section2">
        <button className="banner-image2" onClick={onBannerImage2Click}>
          <div className="order-banner2">
            <div className="order-image2">
              <img
                className="fluentmail-inbox-arrow-up-20-icon"
                alt=""
                src="../asserts/fluentmailinboxarrowup20regular.svg"
              />
            </div>
            <div className="order-status2">
              <b className="success1">Success</b>
            </div>
          </div>
        </button>
        <div className="title-section2">
          <div className="send-parent">
            <b className="send">{txType}</b>
            <b className="tetherusdt-lyr">tether/USDT, LYR</b>
          </div>
          <div className="title-section-inner" />
          <div className="am-frame">
            <div className="send">12/29/2022 10:25:37 AM</div>
          </div>
          <div className="details-section2">
            <div className="block12">
              <div className="send">To</div>
              <div className="send">Received</div>
              <div className="send">Received on</div>
            </div>
            <div className="block22">
              <div className="send">LT8d...in6wm6SyfnqmmJN7jSny</div>
              <div className="send">Yes</div>
              <div className="send">12/29/2022 10:25:37 AM</div>
            </div>
            <div className="details-section-inner" />
          </div>
        </div>
      </div>
      <div className="trades-section2">
        <div className="width-controller2" />
      </div>
    </div>
  );
};

export default SendCard;
