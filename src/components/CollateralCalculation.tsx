import { FunctionComponent, useEffect, useState } from "react";
import { IDao, LyraGlobal } from "../app/blockchain/blocks/block";
import "./CollateralCalculation.css";

type CollateralCalculationType = {
  selling: boolean;
  eqprice: number;
  eqdollar: number;
  amount: number;
  dao: IDao | null;
  onTotalChange: (total: number, daofee: number, netfee: number) => void;
};

const CollateralCalculation: FunctionComponent<CollateralCalculationType> = ({
  selling,
  eqprice,
  eqdollar,
  amount,
  dao,
  onTotalChange
}) => {
  const [collateraldollar, setCollateralDollar] = useState<number>(0);
  const [collaterallyr, setCollateralLYR] = useState<number>(0);
  const [daofeelyr, setDaoFeeLYR] = useState<number>(0);
  const [daofeedollar, setDaoFeeDollar] = useState<number>(0);
  const [netfeelyr, setNetFeeLYR] = useState<number>(0);
  const [netfeedollar, setNetFeeDollar] = useState<number>(0);

  const [totallyr, setTotalLYR] = useState<number>(0);
  const [totaldollar, setTotalDollar] = useState<number>(0);

  useEffect(() => {
    if (eqdollar > 0 && amount > 0 && dao != undefined && dao != null) {
      if (selling) {
        setCollateralDollar((eqdollar * amount * dao.SellerPar) / 100);
        setCollateralLYR((eqprice * amount * dao.SellerPar) / 100);
        setDaoFeeLYR(eqprice * amount * dao.SellerFeeRatio);
        setDaoFeeDollar(eqdollar * amount * dao.SellerFeeRatio);
        setNetFeeLYR(eqprice * amount * LyraGlobal.OfferingNetworkFeeRatio);
        setNetFeeDollar(eqdollar * amount * LyraGlobal.OfferingNetworkFeeRatio);
      } else {
        setCollateralDollar((eqdollar * amount * dao.BuyerPar) / 100);
        setCollateralLYR((eqprice * amount * dao.BuyerPar) / 100);
        setDaoFeeLYR(eqprice * amount * dao.BuyerFeeRatio);
        setDaoFeeDollar(eqdollar * amount * dao.BuyerFeeRatio);
        setNetFeeLYR(eqprice * amount * LyraGlobal.BidingNetworkFeeRatio);
        setNetFeeDollar(eqdollar * amount * LyraGlobal.BidingNetworkFeeRatio);
      }
    } else {
      setCollateralDollar(0);
      setCollateralLYR(0);
      setDaoFeeLYR(0);
      setDaoFeeDollar(0);
      setNetFeeLYR(0);
      setNetFeeDollar(0);
    }
  }, [eqdollar, amount, dao]);

  useEffect(() => {
    setTotalLYR(collaterallyr + daofeelyr + netfeelyr);
    setTotalDollar(collateraldollar + daofeedollar + netfeedollar);

    onTotalChange(collaterallyr + daofeelyr + netfeelyr, daofeelyr, netfeelyr);
  }, [
    collateraldollar,
    collaterallyr,
    daofeedollar,
    daofeelyr,
    netfeedollar,
    netfeelyr
  ]);

  return (
    <div className="collateralcalculation">
      <div className="collateralsection">
        <div className="collateral-worth-label5">
          <div className="collateral-value-120">
            Collateral value: {selling ? dao?.SellerPar : dao?.BuyerPar}%
          </div>
          <div className="collateral-value-120">
            {" "}
            {collaterallyr.toLocaleString(undefined, {
              maximumFractionDigits: 4
            })}{" "}
            LYR
          </div>
        </div>
        <div className="collateral-worth-label6">
          <div className="collateral-value-120">
            ${" "}
            {collateraldollar.toLocaleString(undefined, {
              maximumFractionDigits: 2
            })}
          </div>
        </div>
      </div>
      <div className="collateralsection">
        <div className="collateral-worth-label5">
          <div className="collateral-value-120">
            DAO fee:{" "}
            {(selling ? dao?.SellerFeeRatio ?? 0 : dao?.BuyerFeeRatio ?? 0) *
              100}
            %
          </div>
          <div className="collateral-value-120">
            {daofeelyr.toLocaleString(undefined, {
              maximumFractionDigits: 4
            })}{" "}
            LYR
          </div>
        </div>
        <div className="collateral-worth-label6">
          <div className="collateral-value-120">
            ${" "}
            {daofeedollar.toLocaleString(undefined, {
              maximumFractionDigits: 2
            })}
          </div>
        </div>
      </div>
      <div className="collateralsection">
        <div className="collateral-worth-label5">
          <div className="collateral-value-120">
            Network fee:{" "}
            {selling
              ? LyraGlobal.OfferingNetworkFeeRatio * 100
              : LyraGlobal.BidingNetworkFeeRatio * 100}
            %
          </div>
          <div className="collateral-value-120">
            {netfeelyr.toLocaleString(undefined, {
              maximumFractionDigits: 4
            })}{" "}
            LYR
          </div>
        </div>
        <div className="collateral-worth-label6">
          <div className="collateral-value-120">
            ${" "}
            {netfeedollar.toLocaleString(undefined, {
              maximumFractionDigits: 2
            })}
          </div>
        </div>
      </div>
      <div className="collateralcalculation-child" />
      <div className="collateralsection">
        <div className="collateral-worth-label11">
          <div className="collateral-value-120">
            {totallyr.toLocaleString(undefined, {
              maximumFractionDigits: 4
            })}{" "}
            LYR
          </div>
        </div>
        <div className="collateral-worth-label12">
          <div className="collateral-value-120">Total:</div>
          <div className="div18">
            ${" "}
            {totaldollar.toLocaleString(undefined, {
              maximumFractionDigits: 2
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollateralCalculation;
