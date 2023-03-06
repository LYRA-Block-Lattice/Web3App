import { FunctionComponent } from "react";
import "./TimeTag.css";

type TimeTagType = {
  tag?: string;
};

const TimeTag: FunctionComponent<TimeTagType> = ({ tag }) => {
  return (
    <div className="chat-datetag">
      <div className="today">{tag}</div>
    </div>
  );
};

export default TimeTag;
