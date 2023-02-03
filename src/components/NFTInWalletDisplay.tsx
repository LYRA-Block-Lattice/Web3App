import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import { IBalance } from "../app/wallet/walletReducer";
import "./NFTInWalletDisplay.css";

const NFTInWalletDisplay: FunctionComponent<{ tok: IBalance }> = ({ tok }) => {
  // keep the image url in state
  const [imageUrl, setImageUrl] = useState(
    "../asserts/lyralogoblueicon@2x.png"
  );

  useEffect(() => {
    // fetch metadata json from web by tok.Url, using axios
    const url = tok.Url!;
    axios.get(url).then((res) => {
      const json = res.data;
      // set image url to json.image
      //console.log(json.image);
      setImageUrl(json.image);
    });
  }, [tok]);

  // create a event handler when user click on the image, zoom it full screen
  const handleImageClick = () => {
    // get the image element
    const image = document.getElementById("image") as HTMLImageElement;
    // get the image url
    const url = image.src;
    // create a new image element
    const newImage = document.createElement("img");
    // set the image url to the new image element
    newImage.src = url;
    // set the image style to full screen
    newImage.style.width = "100%";
    //newImage.style.height = "100%";
    // create a new div element
    const div = document.createElement("div");
    // set the div style to full screen
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.zIndex = "100";
    div.style.backgroundColor = "black";
    // append the new image element to the div element
    div.appendChild(newImage);
    // append the div element to the body element
    document.body.appendChild(div);
    // add a event listener to the div element, when user click on the div, remove the div
    div.addEventListener("click", () => {
      document.body.removeChild(div);
    });
  };

  return (
    <div className="nft-showing-item3">
      <div className="lyralogoblueicon-wrapper1">
        <img
          id="image"
          className="lyralogoblueicon4"
          alt=""
          src={imageUrl}
          onClick={handleImageClick}
        />
      </div>
      <div className="content3">
        <div className="name-bm3">
          <div className="put-your-product3">{tok.Name}</div>
        </div>
      </div>
    </div>
  );
};

export default NFTInWalletDisplay;
