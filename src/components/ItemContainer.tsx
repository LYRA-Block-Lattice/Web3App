import { FunctionComponent } from "react";
import "./ItemContainer.css";

const ItemContainer: FunctionComponent = () => {
  return (
    <div className="nft-showing-item">
      <div className="lyralogoblueicon-wrapper">
        <img
          className="lyralogoblueicon1"
          alt=""
          src="../asserts/lyralogoblueicon@2x.png"
        />
      </div>
      <div className="content">
        <div className="name-bm">
          <div className="put-your-product">
            put your product name here or go!
          </div>
          <img
            className="press-area-icon"
            alt=""
            src="../asserts/press-area.svg"
          />
        </div>
        <div className="price1">
          <div className="div18">60$</div>
        </div>
      </div>
    </div>
  );
};

export default ItemContainer;
