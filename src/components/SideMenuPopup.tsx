import { FunctionComponent, useEffect } from "react";
import styles from "./SideMenuPopup.module.css";

type SideMenuPopupType = {
  onClose?: () => void;
};

const SideMenuPopup: FunctionComponent<SideMenuPopupType> = ({ onClose }) => {
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
    <div className={styles.sidemenupopup} data-animate-on-scroll>
      <div className={styles.frameParent}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="../vector8.svg" />
          <div className={styles.lyraWeb3Ecommerce}>Lyra Web3 eCommerce</div>
        </div>
        <div className={styles.administration}>
          <div className={styles.component2variant3}>
            <div className={styles.navItem}>
              <div className={styles.administration}>
                <div className={styles.left}>
                  <div className={styles.administration1}>
                    <img
                      className={styles.administration1Icon}
                      alt=""
                      src="../administration-1@2x.png"
                    />
                  </div>
                  <div className={styles.promotion}>Token Mint</div>
                </div>
              </div>
              <img
                className={styles.arrowChevronDownIcon}
                alt=""
                src="../arrowchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.administration}>
          <div className={styles.component2variant3}>
            <div className={styles.navItem}>
              <div className={styles.administration}>
                <div className={styles.left}>
                  <div className={styles.administration1}>
                    <img
                      className={styles.administration1Icon}
                      alt=""
                      src="../promotion-1@2x.png"
                    />
                  </div>
                  <div className={styles.promotion}>Promotion</div>
                </div>
              </div>
              <img
                className={styles.arrowChevronDownIcon}
                alt=""
                src="../arrowchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.administration}>
          <div className={styles.component2variant3}>
            <div className={styles.navItem}>
              <div className={styles.administration}>
                <div className={styles.left}>
                  <div className={styles.administration1}>
                    <img
                      className={styles.administration1Icon}
                      alt=""
                      src="../customerloyalty-1@2x.png"
                    />
                  </div>
                  <div className={styles.promotion}>Loyalty</div>
                </div>
              </div>
              <img
                className={styles.arrowChevronDownIcon}
                alt=""
                src="../arrowchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.administration}>
          <div className={styles.component2variant3}>
            <div className={styles.navItem}>
              <div className={styles.administration}>
                <div className={styles.left}>
                  <div className={styles.administration1}>
                    <img
                      className={styles.administration1Icon}
                      alt=""
                      src="../productmanagement-1@2x.png"
                    />
                  </div>
                  <div className={styles.promotion}>Product Management</div>
                </div>
              </div>
              <img
                className={styles.arrowChevronDownIcon}
                alt=""
                src="../arrowchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.administration}>
          <div className={styles.administration}>
            <div className={styles.component2variant3}>
              <div className={styles.navItem}>
                <div className={styles.administration}>
                  <div className={styles.left}>
                    <div className={styles.administration1}>
                      <img
                        className={styles.administration1Icon}
                        alt=""
                        src="../sale-2-1@2x.png"
                      />
                    </div>
                    <div className={styles.promotion}>Sales</div>
                  </div>
                </div>
                <img
                  className={styles.arrowChevronDownIcon}
                  alt=""
                  src="../arrowchevrondown.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.administration}>
          <div className={styles.administration}>
            <div className={styles.administration}>
              <div className={styles.component2variant3}>
                <div className={styles.navItem}>
                  <div className={styles.administration}>
                    <div className={styles.left}>
                      <div className={styles.administration1}>
                        <img
                          className={styles.administration1Icon}
                          alt=""
                          src="../order-2@2x.png"
                        />
                      </div>
                      <div className={styles.promotion}>Orders</div>
                    </div>
                  </div>
                  <img
                    className={styles.arrowChevronDownIcon}
                    alt=""
                    src="../arrowchevrondown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.administration}>
          <div className={styles.component2variant3}>
            <div className={styles.navItem}>
              <div className={styles.administration}>
                <div className={styles.left}>
                  <div className={styles.administration1}>
                    <img
                      className={styles.administration1Icon}
                      alt=""
                      src="../supplychainmanagement-2@2x.png"
                    />
                  </div>
                  <div className={styles.promotion}>Supply Chain</div>
                </div>
              </div>
              <img
                className={styles.arrowChevronDownIcon}
                alt=""
                src="../arrowchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.administration}>
          <div className={styles.administration}>
            <div className={styles.component2variant3}>
              <div className={styles.navItem}>
                <div className={styles.administration}>
                  <div className={styles.left}>
                    <div className={styles.administration1}>
                      <img
                        className={styles.administration1Icon}
                        alt=""
                        src="../security-1@2x.png"
                      />
                    </div>
                    <div className={styles.promotion}>Security</div>
                  </div>
                </div>
                <img
                  className={styles.arrowChevronDownIcon}
                  alt=""
                  src="../arrowchevrondown.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuPopup;
