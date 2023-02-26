import { FunctionComponent, useEffect } from "react";
import "./SideMenuPopup.css";

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
    <div className="sidemenupopup" data-animate-on-scroll>
      <div className="frame-container">
        <div className="vector-parent">
          <img className="vector-icon8" alt="" src="../asserts/vector10.svg" />
          <div className="lyra-web3-ecommerce">Lyra Web3 eCommerce</div>
        </div>
        <div className="administration">
          <div className="component-2variant3">
            <div className="nav-item">
              <div className="administration">
                <div className="left">
                  <div className="administration-1">
                    <img
                      className="administration-1-icon"
                      alt=""
                      src="../asserts/administration-1@2x.png"
                    />
                  </div>
                  <div className="promotion">Token Mint</div>
                </div>
              </div>
              <img
                className="arrow-chevron-down-icon"
                alt=""
                src="../asserts/arrowchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className="administration">
          <div className="component-2variant3">
            <div className="nav-item">
              <div className="administration">
                <div className="left">
                  <div className="administration-1">
                    <img
                      className="administration-1-icon"
                      alt=""
                      src="../asserts/promotion-1@2x.png"
                    />
                  </div>
                  <div className="promotion">Promotion</div>
                </div>
              </div>
              <img
                className="arrow-chevron-down-icon"
                alt=""
                src="../asserts/arrowchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className="administration">
          <div className="component-2variant3">
            <div className="nav-item">
              <div className="administration">
                <div className="left">
                  <div className="administration-1">
                    <img
                      className="administration-1-icon"
                      alt=""
                      src="../asserts/customerloyalty-1@2x.png"
                    />
                  </div>
                  <div className="promotion">Loyalty</div>
                </div>
              </div>
              <img
                className="arrow-chevron-down-icon"
                alt=""
                src="../asserts/arrowchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className="administration">
          <div className="component-2variant3">
            <div className="nav-item">
              <div className="administration">
                <div className="left">
                  <div className="administration-1">
                    <img
                      className="administration-1-icon"
                      alt=""
                      src="../asserts/productmanagement-1@2x.png"
                    />
                  </div>
                  <div className="promotion">Product Management</div>
                </div>
              </div>
              <img
                className="arrow-chevron-down-icon"
                alt=""
                src="../asserts/arrowchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className="administration">
          <div className="administration">
            <div className="component-2variant3">
              <div className="nav-item">
                <div className="administration">
                  <div className="left">
                    <div className="administration-1">
                      <img
                        className="administration-1-icon"
                        alt=""
                        src="../asserts/sale-2-1@2x.png"
                      />
                    </div>
                    <div className="promotion">Sales</div>
                  </div>
                </div>
                <img
                  className="arrow-chevron-down-icon"
                  alt=""
                  src="../asserts/arrowchevrondown.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="administration">
          <div className="administration">
            <div className="administration">
              <div className="component-2variant3">
                <div className="nav-item">
                  <div className="administration">
                    <div className="left">
                      <div className="administration-1">
                        <img
                          className="administration-1-icon"
                          alt=""
                          src="../asserts/order-2@2x.png"
                        />
                      </div>
                      <div className="promotion">Orders</div>
                    </div>
                  </div>
                  <img
                    className="arrow-chevron-down-icon"
                    alt=""
                    src="../asserts/arrowchevrondown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="administration">
          <div className="component-2variant3">
            <div className="nav-item">
              <div className="administration">
                <div className="left">
                  <div className="administration-1">
                    <img
                      className="administration-1-icon"
                      alt=""
                      src="../asserts/supplychainmanagement-2@2x.png"
                    />
                  </div>
                  <div className="promotion">Supply Chain</div>
                </div>
              </div>
              <img
                className="arrow-chevron-down-icon"
                alt=""
                src="../asserts/arrowchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className="administration">
          <div className="administration">
            <div className="component-2variant3">
              <div className="nav-item">
                <div className="administration">
                  <div className="left">
                    <div className="administration-1">
                      <img
                        className="administration-1-icon"
                        alt=""
                        src="../asserts/security-1@2x.png"
                      />
                    </div>
                    <div className="promotion">Security</div>
                  </div>
                </div>
                <img
                  className="arrow-chevron-down-icon"
                  alt=""
                  src="../asserts/arrowchevrondown.svg"
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
