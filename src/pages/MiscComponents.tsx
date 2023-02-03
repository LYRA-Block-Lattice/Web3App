import { FunctionComponent } from "react";
import NFTInWalletDisplay from "../components/NFTInWalletDisplay";
import "./MiscComponents.css";

const MiscComponents: FunctionComponent = () => {
  return (
    <div className="misccomponents">
      <div className="nft-showing-item-parent">
        <div className="nft-showing-item">
          <div className="lyralogoblueicon-wrapper">
            <img
              className="lyralogoblueicon"
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
            <div className="price">
              <div className="div2">60$</div>
            </div>
          </div>
        </div>
        <div className="nft-showing-item">
          <div className="lyralogoblueicon-wrapper">
            <img
              className="lyralogoblueicon"
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
            <div className="price">
              <div className="div2">60$</div>
            </div>
          </div>
        </div>
      </div>
      <div className="nft-showing-item-group">
        <div className="nft-showing-item">
          <div className="lyralogoblueicon-wrapper">
            <img
              className="lyralogoblueicon"
              alt=""
              src="../asserts/lyralogoblueicon@2x.png"
            />
          </div>
          <div className="content2">
            <div className="name-bm">
              <div className="put-your-product2">
                put your product name here or go!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiscComponents;
