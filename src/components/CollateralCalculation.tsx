import { FunctionComponent } from "react";
import "./CollateralCalculation.css";

const CollateralCalculation: FunctionComponent = () => {
  return (
    <div className="collateralcalculation">
      <div className="collateralsection">
        <div className="collateral-worth-label">
          <div className="total">Collateral value: 120%</div>
          <div className="total">1234 LYR</div>
        </div>
        <div className="collateral-worth-label1">
          <div className="total">$ 103</div>
        </div>
      </div>
      <div className="collateralsection">
        <div className="collateral-worth-label">
          <div className="total">DAO fee: 1%</div>
          <div className="total">1234 LYR</div>
        </div>
        <div className="collateral-worth-label1">
          <div className="total">$ 103</div>
        </div>
      </div>
      <div className="collateralsection">
        <div className="collateral-worth-label">
          <div className="total">Network fee: 0.2%</div>
          <div className="total">1234 LYR</div>
        </div>
        <div className="collateral-worth-label1">
          <div className="total">$ 103</div>
        </div>
      </div>
      <div className="collateralcalculation-child" />
      <div className="collateralsection">
        <div className="collateral-worth-label6">
          <div className="total">1234 LYR</div>
        </div>
        <div className="collateral-worth-label7">
          <div className="total">Total:</div>
          <div className="div15">$ 103</div>
        </div>
      </div>
    </div>
  );
};

export default CollateralCalculation;
