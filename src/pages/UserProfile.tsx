import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhoneContainer from "../components/PhoneContainer";
import Footer from "../components/Footer";
import styles from "./UserProfile.module.css";

const UserProfile: FunctionComponent = () => {
  const onNavBackButtonClick = useCallback(() => {
    //TODO: nav back. none for home (wallet, market, profile, etc.)
  }, []);

  const onTitleClick = useCallback(() => {
    //TODO: scroll top
  }, []);

  const onContextMenuButtonClick = useCallback(() => {
    //TODO: context menu
  }, []);

  return (
    <div className={styles.userprofile}>
      <TopNavigationBar
        title="User Profile"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className={styles.form}>
        <div className={styles.card}>
          <div className={styles.item}>
            <div className={styles.label}>Avatar</div>
            <img className={styles.avatarIcon} alt="" src="../avatar@2x.png" />
            <img className={styles.iconright} alt="" src="../iconright.svg" />
          </div>
          <div className={styles.divider}>
            <div className={styles.line} />
          </div>
          <div className={styles.item1}>
            <div className={styles.label1}>ID</div>
            <div className={styles.placeholder}>805610947</div>
          </div>
          <div className={styles.divider}>
            <div className={styles.line} />
          </div>
          <div className={styles.item1}>
            <div className={styles.inputItem}>
              <div className={styles.label}>Nick Name</div>
              <div className={styles.placeholder}>YingMing</div>
              <img className={styles.iconright} alt="" src="../iconright.svg" />
            </div>
          </div>
          <div className={styles.divider}>
            <div className={styles.line} />
          </div>
          <div className={styles.item3}>
            <div className={styles.label1}>Region</div>
            <div className={styles.placeholder}>浙江省杭州市拱墅区</div>
            <img className={styles.iconright} alt="" src="../iconright.svg" />
          </div>
        </div>
        <PhoneContainer contactInfo="Phone" contactPhone="177*********98" />
        <PhoneContainer
          contactInfo="Email"
          contactPhone="KUA92390897@163.com"
        />
        <div className={styles.card1}>
          <div className={styles.wrapper}>
            <div className={styles.div}>邮寄地址</div>
          </div>
          <div className={styles.list}>
            <div className={styles.item4}>
              <div className={styles.frameParent}>
                <div className={styles.placeholderParent}>
                  <i className={styles.placeholder3}>张俊</i>
                  <div className={styles.placeholder4}>13988781732</div>
                </div>
                <div className={styles.buttonGroup}>
                  <div className={styles.button}>
                    <div className={styles.title}>删除</div>
                  </div>
                  <div className={styles.button}>
                    <div className={styles.title}>修改</div>
                  </div>
                </div>
              </div>
              <div className={styles.label1}>
                浙江省杭州市拱墅区三塘小区******
              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.line} />
            </div>
            <div className={styles.item4}>
              <div className={styles.frameParent}>
                <div className={styles.placeholderParent}>
                  <i className={styles.placeholder3}>孙悦婷</i>
                  <div className={styles.placeholder4}>13988781732</div>
                </div>
                <div className={styles.buttonGroup}>
                  <div className={styles.button}>
                    <div className={styles.title}>删除</div>
                  </div>
                  <div className={styles.button}>
                    <div className={styles.title}>修改</div>
                  </div>
                </div>
              </div>
              <div className={styles.label1}>
                浙江省杭州市拱墅区三塘小区******
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.button4}>
                <img
                  className={styles.iconaddOne}
                  alt=""
                  src="../iconaddone.svg"
                />
                <div className={styles.label1}>新增地址</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        iconImageUrl="../box-alt-light.svg"
        moleculeImageUrl="../molecule-light.svg"
        walletImageUrl="../wallet-light.svg"
        userImageUrl="../user-alt-light.svg"
        propColor1="#434343"
        propColor2="#0ebd8d"
      />
    </div>
  );
};

export default UserProfile;
