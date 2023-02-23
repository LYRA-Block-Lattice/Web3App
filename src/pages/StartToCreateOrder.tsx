import {
  FunctionComponent,
  useCallback,
  LegacyRef,
  useRef,
  useState,
  useEffect
} from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import { useNavigate } from "react-router-dom";
import CatalogSelection from "../components/CatalogSelection";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./StartToCreateOrder.css";
import Xarrow, { Xwrapper } from "react-xarrows";
import PrimaryAccountCard from "../components/PrimaryAccountCard";

const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "5px"
};

const typeMap: { [index: string]: any } = {
  Token: "Token",
  NFT: "NFT",
  Fiat: "Fiat",
  Goods: "TOT",
  Service: "TOT"
};

const StartToCreateOrder: FunctionComponent = () => {
  const [start, setStart] = useState<string | undefined>();
  const [end, setEnd] = useState<string | undefined>();
  const [isDisabled, setDisabled] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (start != undefined && end != undefined) {
      setDisabled(false);
    }
  }, [start, end]);

  const onPrepareSellOrderButtonClick = useCallback(() => {
    navigate(`/selltokentotoken?sell=${typeMap[start!]}&get=${typeMap[end!]}`);
  }, [navigate, start, end]);

  const onTokenAction = (
    act: string | undefined,
    tok: string | undefined,
    xref: LegacyRef<HTMLButtonElement> | undefined
  ) => {
    if (act === "Sell") {
      setStart(tok);
    } else {
      setEnd(tok);
    }
    //
  };

  return (
    <div className="starttocreateorder main-content">
      <TopNavigationBar title="Select Catalog" />
      <div className="catalog-section-parent">
        <div className="catalog-section">
          <Xwrapper>
            <div style={{ zIndex: 3 }}>
              <Xarrow
                showXarrow={start != null && end != null}
                start={`Sell-${start}`}
                end={`Get-${end}`}
              />
            </div>
            <div className="catalogselection">
              <div className="i-want-to">I want to sell:</div>
              <div className="tradecatalog">
                <button className="select-token-catalog-button">
                  <img
                    className="mapart-gallery-icon"
                    alt=""
                    src="../asserts/icbaselinegeneratingtokens2.svg"
                  />
                  <div className="token-wrapper">
                    <b className="token">Token</b>
                  </div>
                </button>
                <button className="select-token-catalog-button">
                  <img
                    className="mapart-gallery-icon"
                    alt=""
                    src="../asserts/mapartgallery.svg"
                  />
                  <div className="token-wrapper">
                    <b className="token">NFT</b>
                  </div>
                </button>
                <button className="select-token-catalog-button">
                  <img
                    className="mapart-gallery-icon"
                    alt=""
                    src="../asserts/fluentemojihighcontrastdollarbanknote.svg"
                  />
                  <div className="token-wrapper">
                    <b className="fiat">Fiat</b>
                  </div>
                </button>
                <button className="select-token-catalog-button">
                  <img
                    className="mapart-gallery-icon"
                    alt=""
                    src="../asserts/mditruckdelivery.svg"
                  />
                  <div className="token-wrapper">
                    <b className="goods">Goods</b>
                  </div>
                </button>
                <button className="select-token-catalog-button">
                  <img
                    className="mapart-gallery-icon"
                    alt=""
                    src="../asserts/carbonuserservicedesk2.svg"
                  />
                  <div className="token-wrapper">
                    <b className="fiat">Service</b>
                  </div>
                </button>
              </div>
            </div>
            <div className="catalog-section-child" />
            <div className="catalogselection">
              <div className="i-want-to">I want to get:</div>
              <div className="tradecatalog">
                <button className="select-token-catalog-button">
                  <img
                    className="mapart-gallery-icon"
                    alt=""
                    src="../asserts/icbaselinegeneratingtokens3.svg"
                  />
                  <div className="token-wrapper">
                    <b className="token">Token</b>
                  </div>
                </button>
                <button className="select-token-catalog-button">
                  <img
                    className="mapart-gallery-icon"
                    alt=""
                    src="../asserts/mapartgallery.svg"
                  />
                  <div className="token-wrapper">
                    <b className="token">NFT</b>
                  </div>
                </button>
                <button className="select-token-catalog-button">
                  <img
                    className="mapart-gallery-icon"
                    alt=""
                    src="../asserts/fluentemojihighcontrastdollarbanknote.svg"
                  />
                  <div className="token-wrapper">
                    <b className="fiat">Fiat</b>
                  </div>
                </button>
                <button className="select-token-catalog-button">
                  <img
                    className="mapart-gallery-icon"
                    alt=""
                    src="../asserts/mditruckdelivery1.svg"
                  />
                  <div className="token-wrapper">
                    <b className="goods">Goods</b>
                  </div>
                </button>
                <button className="select-token-catalog-button">
                  <img
                    className="mapart-gallery-icon"
                    alt=""
                    src="../asserts/carbonuserservicedesk2.svg"
                  />
                  <div className="token-wrapper">
                    <b className="fiat">Service</b>
                  </div>
                </button>
              </div>
            </div>
          </Xwrapper>
        </div>
        <button
          className="prepare-sell-order-button2"
          disabled={isDisabled}
          onClick={onPrepareSellOrderButtonClick}
        >
          <div className="primary-button">Specify Token</div>
        </button>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default StartToCreateOrder;
