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

  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

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
    <div className="starttocreateorder">
      <TopNavigationBar
        title="Select Catalog"
        onMiniProgramsButtonsClick={onMiniProgramsButtonsClick}
        onTitleClick={onTitleClick}
      />
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
