import { FunctionComponent, useCallback } from "react";
import { Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./ViewOrdersForm.css";

const ViewOrdersForm: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/selecttokentypetocreateorder");
  }, [navigate]);

  return (
    <div className="viewordersform">
      <div className="frame-div">
        <div className="view-orders">View Orders</div>
        <IconButton
          className="frame-iconbutton"
          color="primary"
          onClick={onFrameButtonClick}
        />
      </div>
      <div className="ordercard">
        <div className="great-nft">Great NFT</div>
        <div className="fiat-usd">Fiat USD</div>
        <div className="open">Open</div>
        <div className="div">$300</div>
        <div className="selling">Selling</div>
        <div className="biding">Biding</div>
        <div className="status">Status</div>
        <div className="price">Price</div>
      </div>
      <div className="ordercard">
        <div className="great-nft">Great NFT</div>
        <div className="fiat-usd">Fiat USD</div>
        <div className="open">Open</div>
        <div className="div">$300</div>
        <div className="selling">Selling</div>
        <div className="biding">Biding</div>
        <div className="status">Status</div>
        <div className="price">Price</div>
      </div>
      <div className="ordercard">
        <div className="great-nft">Great NFT</div>
        <div className="fiat-usd">Fiat USD</div>
        <div className="open">Open</div>
        <div className="div">$300</div>
        <div className="selling">Selling</div>
        <div className="biding">Biding</div>
        <div className="status">Status</div>
        <div className="price">Price</div>
      </div>
    </div>
  );
};

export default ViewOrdersForm;
