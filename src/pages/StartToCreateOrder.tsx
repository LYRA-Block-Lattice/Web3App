import {
  FunctionComponent,
  useCallback,
  LegacyRef,
  useRef,
  useState,
  useEffect
} from "react";
import { useNavigate } from "react-router-dom";
import TopNavigationBar from "../components/TopNavigationBar";
import CatalogSelection from "../components/CatalogSelection";
import PrimaryButton from "../components/PrimaryButton";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./StartToCreateOrder.css";
import Xarrow, { Xwrapper } from "react-xarrows";
import PrimaryAccountCard from "../components/PrimaryAccountCard";
import { useSelector } from "react-redux";
import { getAuthSelector } from "../app/selectors";

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
  const auth = useSelector(getAuthSelector);

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
    if (auth.hasKey)
      navigate(
        `/selltokentotoken?sell=${typeMap[start!]}&get=${typeMap[end!]}`
      );
    else navigate("/openwallet");
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
            <CatalogSelection
              key="sell"
              sellText="Sell"
              tokenActionClicked={onTokenAction}
            />
            <div className="catalog-section-child" />
            <CatalogSelection
              key="get"
              sellText="Get"
              tokenActionClicked={onTokenAction}
            />
          </Xwrapper>
        </div>
        <PrimaryButton
          disabled={isDisabled}
          onClick={onPrepareSellOrderButtonClick}
        >
          Specify Token
        </PrimaryButton>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default StartToCreateOrder;
