import { FunctionComponent } from "react";
import "./CollateralCalculation.css";

type CollateralCalculationType = {
  eqprice?: string;
};

const CollateralCalculation: FunctionComponent<CollateralCalculationType> = ({
  eqprice = "0",
}) => {
  return (
    <div className="collateralcalculation">
      <div className="collateralsection">
        <div className="collateral-worth-label5">
          <div className="collateral-value-120">Collateral value: 120%</div>
          <div className="collateral-value-120">{eqprice}</div>
        </div>
        <div className="collateral-worth-label6">
          <div className="collateral-value-120">$ 103</div>
        </div>
      </div>
      <div className="collateralsection">
        <div className="collateral-worth-label5">
          <div className="collateral-value-120">DAO fee: 1%</div>
          <div className="collateral-value-120">1234 LYR</div>
        </div>
        <div className="collateral-worth-label6">
          <div className="collateral-value-120">$ 103</div>
        </div>
      </div>
      <div className="collateralsection">
        <div className="collateral-worth-label5">
          <div className="collateral-value-120">Network fee: 0.2%</div>
          <div className="collateral-value-120">1234 LYR</div>
        </div>
        <div className="collateral-worth-label6">
          <div className="collateral-value-120">$ 103</div>
        </div>
      </div>
      <div className="collateralcalculation-child" />
      <div className="collateralsection">
        <div className="collateral-worth-label11">
          <div className="collateral-value-120">1234 LYR</div>
        </div>
        <div className="collateral-worth-label12">
          <div className="collateral-value-120">Total:</div>
          <div className="div18">$ 103</div>
        </div>
      </div>
    </div>
  );
};

export default CollateralCalculation;
