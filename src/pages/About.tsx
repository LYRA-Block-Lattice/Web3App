import { FunctionComponent } from "react";
import "./About.css";

const About: FunctionComponent = () => {
  return (
    <div className="about">
      <b className="lyra-web3-app">Lyra Web3 App</b>
      <div className="web3-ecommerce-on">
        Web3 eCommerce on Lyra blockchain. KYC-less secured transaction.
      </div>
      <div className="network-parent">
        <div className="web3-ecommerce-on">Network:</div>
        <div className="web3-ecommerce-on">Version:</div>
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
  );
};

export default About;
