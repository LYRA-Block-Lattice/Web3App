import { FunctionComponent, useEffect } from "react";
import UtilityButton from "../components/UtilityButton";
import "./SignTradeSecretDialog.css";

type SignTradeSecretDialogType = {
  onClose?: () => void;
};

const SignTradeSecretDialog: FunctionComponent<SignTradeSecretDialogType> = ({
  onClose
}) => {
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
        threshold: 0.15
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
    <div className="signtradesecretdialog" data-animate-on-scroll>
      <div className="sign-trade-secret1">Sign Trade Secret</div>
      <div className="to-protect-privacy1">
        To protect privacy, Lyra blockchain never record trade secret. What the
        blockchain needed is a digital signature of the trade secret.
      </div>
      <textarea
        className="tot-description1"
        placeholder={`Please pay to my bank account number:

Bank of America
1234 1234 1234 1234`}
      />
      <UtilityButton />
    </div>
  );
};

export default SignTradeSecretDialog;
