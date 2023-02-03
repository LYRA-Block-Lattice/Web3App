import { FunctionComponent } from "react";
import "./GeneralPopup.css";
import MintFiatToken from "../pages/MintFiatToken";
import CreateTokenForm from "../pages/CreateTokenForm";
import CreateTOTForm from "../pages/CreateTOTForm";
import CreateNFTForm from "../pages/CreateNFTForm";
import NFTFullScreenDisplay from "../dup/NFTFullScreenDisplay";

type GeneralPopupType = {
  onClose?: (ticker?: string) => void;
  children?: React.ReactNode;
  tag?: string;
};

const GeneralPopup: FunctionComponent<GeneralPopupType> = (props) => {
  const components: { [index: string]: any } = {
    Token: CreateTokenForm,
    Fiat: MintFiatToken,
    NFT: CreateNFTForm,
    TOT: CreateTOTForm,
    Goods: CreateTOTForm,
    Service: CreateTOTForm,
    NFTFD: NFTFullScreenDisplay
  };

  const TagName = components[props.tag || "Token"];

  return (
    <div className="generalpopup">
      {props.children}
      {props.tag ? <TagName onClose={props.onClose} /> : <></>}
    </div>
  );
};

export default GeneralPopup;
