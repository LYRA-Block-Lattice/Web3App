import { FunctionComponent } from "react";
import "./ProductContainer.css";

type ProductContainerType = {
  /** Action props */
  openGeneralPopup?: () => void;
};

const ProductContainer: FunctionComponent<ProductContainerType> = ({
  openGeneralPopup,
}) => {
  return (
    <button className="nft-showing-item1" onClick={openGeneralPopup}>
      <div className="lyralogoblueicon-container">
        <img
          className="lyralogoblueicon2"
          alt=""
          src="../asserts/lyralogoblueicon@2x.png"
        />
      </div>
      <div className="content1">
        <div className="name-bm1">
          <div className="put-your-product1">
            put your product name here or go!
          </div>
        </div>
      </div>
    </button>
  );
};

export default ProductContainer;
