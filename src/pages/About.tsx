import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import Footer from "../components/Footer";
import styles from "./About.module.css";

const About: FunctionComponent = () => {
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
    <div className={styles.about}>
      <TopNavigationBar
        title="About"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className={styles.lyralogoParent}>
        <img className={styles.lyralogoIcon} alt="" src="../lyralogo.svg" />
        <b className={styles.lyraWeb3App}>Lyra Web3 App</b>
        <div className={styles.web3EcommerceOn}>
          Web3 eCommerce on Lyra blockchain. KYC-less secured transaction.
        </div>
        <div className={styles.networkParent}>
          <div className={styles.network}>Network:</div>
          <div className={styles.network}>Version:</div>
          <a
            className={styles.githubRepo}
            href="https://github.com/LYRA-Block-Lattice/Web3App"
            target="_blank"
          >
            Github Repo
          </a>
        </div>
        <div className={styles.web3EcommerceOn}>
          © Copyright 2023 Lyra Live Inc., All Rights Reserved.
        </div>
      </div>
      <Footer
        iconImageUrl="../box-alt-light.svg"
        moleculeImageUrl="../molecule-light.svg"
        walletImageUrl="../wallet-light.svg"
        userImageUrl="../user-alt-light.svg"
        propColor1="#434343"
      />
    </div>
  );
};

export default About;
