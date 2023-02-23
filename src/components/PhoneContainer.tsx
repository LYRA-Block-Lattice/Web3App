import { FunctionComponent } from "react";
import "./PhoneContainer.css";

type PhoneContainerType = {
  contactInfo?: string;
  contactPhone?: string;
};

const PhoneContainer: FunctionComponent<PhoneContainerType> = ({
  contactInfo,
  contactPhone,
}) => {
  return (
    <div className="form1">
      <div className="form-card-title">
        <div className="text15">CardTitle</div>
      </div>
      <div className="slot-list">
        <div className="form-item-select">
          <div className="label4">{contactInfo}</div>
          <div className="placeholder9">{contactPhone}</div>
          <img className="iconright3" alt="" src="../iconright.svg" />
        </div>
      </div>
    </div>
  );
};

export default PhoneContainer;
