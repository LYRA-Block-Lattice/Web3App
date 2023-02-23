import { FunctionComponent, useCallback } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "./About.css";

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
    <div className="about">
      <TopNavigationBar
        title="About"
        onNavBackButtonClick={onNavBackButtonClick}
        onTitleClick={onTitleClick}
        onContextMenuButtonClick={onContextMenuButtonClick}
      />
      <div className="lyralogo-parent">
        <img className="lyralogo-icon" alt="" src="../asserts/lyralogo.svg" />
        <b className="lyra-web3-app">Lyra Web3 App</b>
        <div className="web3-ecommerce-on">
          Web3 eCommerce on Lyra blockchain. KYC-less secured transaction.
        </div>
        <div className="network-parent">
          <div className="network">Network:</div>
          <div className="network">Version:</div>
          <a
            className="github-repo"
            href="https://github.com/LYRA-Block-Lattice/Web3App"
            target="_blank"
          >
            Github Repo
          </a>
        </div>
        <div className="web3-ecommerce-on">
          © Copyright 2023 Lyra Live Inc., All Rights Reserved.
        </div>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default About;
