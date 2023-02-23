import { FunctionComponent, useEffect } from "react";
import styles from "./SignTradeSecretPopup.module.css";

type SignTradeSecretPopupType = {
  onClose?: () => void;
};

const SignTradeSecretPopup: FunctionComponent<SignTradeSecretPopupType> = ({
  onClose,
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
            targetElement.classList.add(styles.animate);
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
    <div className={styles.signtradesecretpopup} data-animate-on-scroll>
      <div className={styles.signTradeSecret}>Sign Trade Secret</div>
      <div className={styles.toProtectPrivacy}>
        To protect privacy, Lyra blockchain never record trade secret. What the
        blockchain needed is a digital signature of the trade secret.
      </div>
      <textarea
        className={styles.totDescription}
        placeholder={`Please pay to my bank account number:

Bank of America
1234 1234 1234 1234`}
      />
      <button className={styles.prepareSellOrderButton} onClick={onClose}>
        <div className={styles.utilityButton}>Sign and return</div>
      </button>
    </div>
  );
};

export default SignTradeSecretPopup;
