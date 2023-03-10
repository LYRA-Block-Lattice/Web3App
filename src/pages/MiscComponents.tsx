import { FunctionComponent, useState, useCallback } from "react";
import GeneralPopup from "../components/GeneralPopup";
import PortalPopup from "../components/PortalPopup";
import ItemContainer from "../components/ItemContainer";
import ProductContainer from "../components/ProductContainer";
import OrderCard from "../components/OrderCard";
import TradeCard from "../components/TradeCard";
import SendCard from "../components/SendCard";
import ReceiveCard from "../components/ReceiveCard";
import MarketOrder from "../components/MarketOrder";
import MintFiatDialog from "../components/MintFiatDialog";
import CreateTokenDialog from "../components/CreateTokenDialog";
import SignTradeSecretDialog from "../components/SignTradeSecretDialog";
import CreateNFTDialog from "../components/CreateNFTDialog";
import CreateTOTDialog from "../components/CreateTOTDialog";
import StepProgressReportDialog from "../components/StepProgressReportDialog";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import UtilityButton from "../components/UtilityButton";
import MiniButton from "../components/MiniButton";
import PrimaryIconButton from "../components/PrimaryIconButton";
import "./MiscComponents.css";

const MiscComponents: FunctionComponent = () => {
  const [isGeneralPopupOpen, setGeneralPopupOpen] = useState(false);
  const [isGeneralPopup1Open, setGeneralPopup1Open] = useState(false);

  const openGeneralPopup = useCallback(() => {
    setGeneralPopupOpen(true);
  }, []);

  const closeGeneralPopup = useCallback(() => {
    setGeneralPopupOpen(false);
  }, []);

  const openGeneralPopup1 = useCallback(() => {
    setGeneralPopup1Open(true);
  }, []);

  const closeGeneralPopup1 = useCallback(() => {
    setGeneralPopup1Open(false);
  }, []);

  const onBannerImageClick = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  const onBannerImage1Click = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  const onBannerImage4Click = useCallback(() => {
    //TODO: toggle the bellow table
  }, []);

  return (
    <>
      <div className="misccomponents">
        <div className="frame-container">
          <div className="nft-showing-item-parent">
            <ItemContainer />
            <ItemContainer />
          </div>
          <div className="nft-showing-item-parent">
            <ProductContainer openGeneralPopup={openGeneralPopup} />
            <ProductContainer openGeneralPopup={openGeneralPopup1} />
          </div>
          {/* <OrderCard />
          <TradeCard />
          <SendCard txType="Send" />
          <ReceiveCard txType="Receive" />
          <MarketOrder /> */}
        </div>
        <div className="mintfiatdialog-parent">
          <MintFiatDialog />
          <CreateTokenDialog />
          <SignTradeSecretDialog />
          <CreateNFTDialog />
          <CreateTOTDialog />
          {/* <StepProgressReportDialog /> */}
        </div>
        <div className="buttons-group">
          <PrimaryButton />
          <SecondaryButton />
          <UtilityButton />
          <MiniButton />
          <PrimaryIconButton icon="../asserts/evapricetagsoutline.svg" />
        </div>
      </div>
      {isGeneralPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGeneralPopup}
        >
          <GeneralPopup onClose={closeGeneralPopup} />
        </PortalPopup>
      )}
      {isGeneralPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGeneralPopup1}
        >
          <GeneralPopup onClose={closeGeneralPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default MiscComponents;
