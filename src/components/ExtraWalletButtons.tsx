import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ExtraWalletButtons.css";

type ExtraWalletButtonsType = {
  onClose?: () => void;
};

const ExtraWalletButtons: FunctionComponent<ExtraWalletButtonsType> = ({
  onClose,
}) => {
  const navigate = useNavigate();

  const onSwapButtonClick = useCallback(() => {
    navigate("/market");
  }, [navigate]);

  const onSendButtonClick = useCallback(() => {
    navigate("/sendtokenform");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="extrawalletbuttons" data-animate-on-scroll>
      <div className="iconssection1">
        <div className="swap-button-group">
          <button className="swap-button2" onClick={onSwapButtonClick}>
            <img
              className="home-icon-interlocution5"
              alt=""
              src="../asserts/home--icon--interlocution5.svg"
            />
            <div className="ranking5">DEX</div>
          </button>
          <button className="swap-button2">
            <img
              className="home-icon-interlocution5"
              alt=""
              src="../asserts/home--icon--interlocution6.svg"
            />
            <div className="ranking5">DAO</div>
          </button>
          <button className="swap-button2" onClick={onSendButtonClick}>
            <img
              className="home-icon-interlocution5"
              alt=""
              src="../asserts/home--icon--interlocution7.svg"
            />
            <div className="ranking5">Staking</div>
          </button>
          <button className="swap-button2">
            <img
              className="home-icon-interlocution5"
              alt=""
              src="../asserts/home--icon--interlocution8.svg"
            />
            <div className="ranking5">Mint</div>
          </button>
          <div className="more-func-button1">
            <img
              className="home-icon-interlocution5"
              alt=""
              src="../asserts/home--icon--interlocution9.svg"
            />
            <div className="ranking9">Burn</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraWalletButtons;
