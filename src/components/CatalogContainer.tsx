import { FunctionComponent } from "react";
import "./CatalogContainer.css";

type CatalogContainerType = {
  iWantToSell?: string;
  icbaselineGeneratingToken?: string;
  mditruckDelivery?: string;
};

const CatalogContainer: FunctionComponent<CatalogContainerType> = ({
  iWantToSell,
  icbaselineGeneratingToken,
  mditruckDelivery,
}) => {
  return (
    <div className="catalogselection">
      <div className="i-want-to">{iWantToSell}</div>
      <div className="tradecatalog">
        <button className="select-token-catalog-button">
          <img
            className="mapart-gallery-icon"
            alt=""
            src={icbaselineGeneratingToken}
          />
          <div className="token-frame">
            <b className="token2">Token</b>
          </div>
        </button>
        <button className="select-token-catalog-button">
          <img
            className="mapart-gallery-icon"
            alt=""
            src="../mapartgallery.svg"
          />
          <div className="token-frame">
            <b className="token2">NFT</b>
          </div>
        </button>
        <button className="select-token-catalog-button">
          <img
            className="mapart-gallery-icon"
            alt=""
            src="../fluentemojihighcontrastdollarbanknote.svg"
          />
          <div className="token-frame">
            <b className="fiat2">Fiat</b>
          </div>
        </button>
        <button className="select-token-catalog-button">
          <img className="mapart-gallery-icon" alt="" src={mditruckDelivery} />
          <div className="token-frame">
            <b className="goods2">Goods</b>
          </div>
        </button>
        <button className="select-token-catalog-button">
          <img
            className="mapart-gallery-icon"
            alt=""
            src="../carbonuserservicedesk4.svg"
          />
          <div className="token-frame">
            <b className="fiat2">Service</b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CatalogContainer;
