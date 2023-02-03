// load an image from url, display it centered in a div, keep aspect ratio

import { FunctionComponent, useState, useEffect } from "react";
import "./NFTFullScreenDisplay.css";

const NFTFullScreenDisplay: FunctionComponent<{ url: string }> = ({ url }) => {
  return (
    <div className="full-page-image">
      <img src={url} />
    </div>
  );
};

export default NFTFullScreenDisplay;
