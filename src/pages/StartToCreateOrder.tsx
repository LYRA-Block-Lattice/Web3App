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
    //if (start == "Token" || start == "NFT" || start == "Fiat") {
    //  if (end == "Token" || end == "NFT" || end == "Fiat")
    //    navigate(`/selltokentotoken?sell=${start}&get=${end}`);
    //  //else if(end == "Fiat")
    //  //  navigate(`/selltokentofiat?sell=${start}&get=${end}`);
    //  else
    //    navigate(`/selltokentotot?sell=${start}&get=${end}`);
    //}
    ////else if(start == "Fiat")
    ////{
    ////  if(end == "Token" || end == "NFT")
    ////    navigate(`/sellfiattotoken?sell=${start}&get=${end}`);
    ////  else if(end == "Fiat")
    ////    navigate(`/sellfiattofiat?sell=${start}&get=${end}`);
    ////  else
    ////    navigate(`/sellfiattotot?sell=${start}&get=${end}`);
    ////}
    //else {
    //  if (end == "Token" || end == "NFT" || end == "Fiat")
    //    navigate(`/selltottotoken?sell=${start}&get=${end}`);
    //  //else if(end == "Fiat")
    //  //  navigate(`/selltottofiat?sell=${start}&get=${end}`);
    //  else
    //    navigate(`/selltottotot?sell=${start}&get=${end}`);
    //}
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
    <div className="starttocreateorder">
      <nav className="navigation29">
        <button
          className="mini-programs-buttons18"
          onClick={onMiniProgramsButtonsClick}
        >
          <img className="iconleft9" alt="" src="../asserts/iconleft4.svg" />
        </button>
        <button className="title14" onClick={onTitleClick}>
          Select Catalog
        </button>
        <div className="mini-programs-buttons19">
          <div className="stroke9" />
          <button className="home9" onClick={onHomeClick}>
            <img
              className="ellipse-icon18"
              alt=""
              src="../asserts/ellipse8.svg"
            />
            <img
              className="ellipse-icon19"
              alt=""
              src="../asserts/ellipse9.svg"
            />
          </button>
          <img
            className="separator-icon9"
            alt=""
            src="../asserts/separator4.svg"
          />
          <button
            className="navigationprepare-sell-order9"
            onClick={onNavigationPrepareSellOrderClick}
          >
            <img
              className="navigationprepare-sell-order-child23"
              alt=""
              src="../asserts/rectangle-19.svg"
            />
            <img
              className="navigationprepare-sell-order-child24"
              alt=""
              src="../asserts/vector-74.svg"
            />
            <img
              className="navigationprepare-sell-order-child25"
              alt=""
              src="../asserts/vector-84.svg"
            />
          </button>
        </div>
      </nav>
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
            <CatalogSelection
              key="sell"
              iWantTo="Sell"
              tokenActionClicked={onTokenAction}
            />
            <div className="catalog-section-child" />
            <CatalogSelection
              key="get"
              iWantTo="Get"
              tokenActionClicked={onTokenAction}
            />
          </Xwrapper>
        </div>
        <button
          className="prepare-sell-order-button15"
          disabled={isDisabled}
          onClick={onPrepareSellOrderButtonClick}
        >
          <div className="primary-button5">Specify Token</div>
        </button>
      </div>
      <BottomNavigationBar
        boxAltLight1="../asserts/box-alt-light4.svg"
        moleculeLight1="../asserts/molecule-light4.svg"
        walletLight1="../asserts/wallet-light4.svg"
        userAltLight1="../asserts/user-alt-light4.svg"
        textColor="#434343"
        textColor1="#0ebd8d"
      />
    </div>
  );
};

export default StartToCreateOrder;
