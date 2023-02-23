import axios from "axios";
import { FunctionComponent, useState, useCallback, useEffect } from "react";
import GeneralPopup from "../components/GeneralPopup";
import PortalPopup from "../components/PortalPopup";
import { IBalance } from "../app/wallet/walletReducer";
import "./NFTInWalletDisplay.css";
import NFTFullScreenDisplay from "../dup/NFTFullScreenDisplay";

const NFTInWalletDisplay: FunctionComponent<{ tok: IBalance }> = ({ tok }) => {
  const [isGeneralPopupOpen, setGeneralPopupOpen] = useState(false);

  const openGeneralPopup = useCallback(() => {
    setGeneralPopupOpen(true);
  }, []);

  const closeGeneralPopup = useCallback(() => {
    setGeneralPopupOpen(false);
  }, []);

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

  return (
    <>
      <button className="nft-showing-item3" onClick={openGeneralPopup}>
        <div className="lyralogoblueicon-wrapper1">
          <img
            id="nftimg"
            className="lyralogoblueicon4"
            alt=""
            src={imageUrl}
            onClick={openGeneralPopup}
          />
        </div>
        <div className="content3">
          <div className="name-bm3">
            <div className="put-your-product3">{tok.Name}</div>
          </div>
        </div>
      </button>
      {isGeneralPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGeneralPopup}
        >
          <GeneralPopup onClose={closeGeneralPopup}>
            <NFTFullScreenDisplay url={imageUrl} />
          </GeneralPopup>
        </PortalPopup>
      )}
    </>
  );
};

export default NFTInWalletDisplay;
