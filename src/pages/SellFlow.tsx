import { FunctionComponent } from "react";
import styles from "./SellFlow.module.css";

const SellFlow: FunctionComponent = () => {
  return (
    <div className={styles.sellflow}>
      <div className={styles.group}>
        <div className={styles.rectangle} />
        <div className={styles.text}>My Wallet</div>
      </div>
      <div className={styles.group1}>
        <img className={styles.vectorIcon} alt="" src="../vector.svg" />
        <div className={styles.text1}>DAO</div>
      </div>
      <div className={styles.group2}>
        <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
        <div className={styles.text2}>Sell Order</div>
      </div>
      <div className={styles.group3}>
        <img className={styles.vectorIcon2} alt="" src="../vector2.svg" />
        <div className={styles.text3}>Buyer</div>
      </div>
      <div className={styles.group4}>
        <img className={styles.vectorIcon2} alt="" src="../vector2.svg" />
        <div className={styles.text3}>Buyer</div>
      </div>
      <div className={styles.group5}>
        <img className={styles.vectorIcon2} alt="" src="../vector2.svg" />
        <div className={styles.text3}>...</div>
      </div>
      <img
        className={styles.rectangleVector}
        alt=""
        src="../rectangle--vector.svg"
      />
      <img className={styles.vectorVector} alt="" src="../vector--vector.svg" />
      <div className={styles.group6}>
        <div className={styles.rectangle1} />
        <div className={styles.text6}>My Wallet</div>
      </div>
      <div className={styles.offeringlabel}>10 test/BTC</div>
      <div className={styles.sellforlabel}>
        <div className={styles.bidinglabel}>1000 tether/USDT</div>
      </div>
      <div className={styles.ordercollateral}>1024 LYR</div>
      <div className={styles.returncollateral}>1000 LYR</div>
      <div className={styles.prepareSellOrderButtonParent}>
        <button className={styles.prepareSellOrderButton}>
          <div className={styles.primaryButton}>Back</div>
        </button>
        <button className={styles.prepareSellOrderButton1}>
          <div className={styles.primaryButton1}>Place sell order</div>
        </button>
      </div>
      <div className={styles.group7}>
        <img className={styles.vectorIcon5} alt="" src="../vector5.svg" />
        <div className={styles.text7}>Trade</div>
      </div>
      <div className={styles.group8}>
        <img className={styles.vectorIcon5} alt="" src="../vector5.svg" />
        <div className={styles.text7}>...</div>
      </div>
      <div className={styles.group9}>
        <img className={styles.vectorIcon5} alt="" src="../vector5.svg" />
        <div className={styles.text7}>Trade</div>
      </div>
      <img
        className={styles.vectorVector1}
        alt=""
        src="../vector--vector1.svg"
      />
      <img
        className={styles.vectorVector2}
        alt=""
        src="../vector--vector2.svg"
      />
      <img
        className={styles.vectorVector3}
        alt=""
        src="../vector--vector3.svg"
      />
      <img
        className={styles.vectorVector4}
        alt=""
        src="../vector--vector4.svg"
      />
      <img
        className={styles.vectorVector5}
        alt=""
        src="../vector--vector4.svg"
      />
      <img
        className={styles.vectorVector6}
        alt=""
        src="../vector--vector4.svg"
      />
      <img
        className={styles.vectorRectangle}
        alt=""
        src="../vector--rectangle.svg"
      />
      <img
        className={styles.vectorRectangle1}
        alt=""
        src="../vector--rectangle1.svg"
      />
      <img
        className={styles.vectorRectangle2}
        alt=""
        src="../vector--rectangle2.svg"
      />
    </div>
  );
};

export default SellFlow;
