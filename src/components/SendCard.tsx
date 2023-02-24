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
    <div className="ordercard4">
      <div className="order-brief-section4">
        <button className="banner-image4" onClick={onBannerImage2Click}>
          <div className="order-banner4">
            <div className="order-image4">
              <img
                className="fluentmail-inbox-arrow-up-20-icon"
                alt=""
                src="../asserts/fluentmailinboxarrowup20regular.svg"
              />
            </div>
            <div className="order-status4">
              <b className="success1">Success</b>
            </div>
          </div>
        </button>
        <div className="title-section4">
          <div className="send-parent">
            <b className="send">{txType}</b>
            <b className="tetherusdt-lyr">tether/USDT, LYR</b>
          </div>
          <div className="title-section-child1" />
          <div className="am-wrapper1">
            <div className="send">12/29/2022 10:25:37 AM</div>
          </div>
          <div className="details-section4">
            <div className="block14">
              <div className="send">To</div>
              <div className="send">Received</div>
              <div className="send">Received on</div>
            </div>
            <div className="block24">
              <div className="send">LT8d...in6wm6SyfnqmmJN7jSny</div>
              <div className="send">Yes</div>
              <div className="send">12/29/2022 10:25:37 AM</div>
            </div>
            <div className="details-section-child2" />
          </div>
        </div>
      </div>
      <div className="trades-section4">
        <div className="width-controller4" />
      </div>
    </div>
  );
};

export default SendCard;
