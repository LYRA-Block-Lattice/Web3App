import { FunctionComponent } from "react";
import styles from "./PhoneContainer.module.css";

type PhoneContainerType = {
  contactInfo?: string;
  contactPhone?: string;
};

const PhoneContainer: FunctionComponent<PhoneContainerType> = ({
  contactInfo,
  contactPhone,
}) => {
  return (
    <div className={styles.form}>
      <div className={styles.formCardTitle}>
        <div className={styles.text}>CardTitle</div>
      </div>
      <div className={styles.slotList}>
        <div className={styles.formItemSelect}>
          <div className={styles.label}>{contactInfo}</div>
          <div className={styles.placeholder}>{contactPhone}</div>
          <img className={styles.iconright} alt="" src="../iconright.svg" />
        </div>
      </div>
    </div>
  );
};

export default PhoneContainer;
