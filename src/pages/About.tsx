// React component to show an About page, display app name and version.

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <div className="about-title-text">
          {process.env.REACT_APP_NETWORK_ID}
        </div>
        <div className="about-title-text">{process.env.REACT_APP_NAME}</div>
        <div className="about-title-text">{process.env.REACT_APP_VERSION}</div>
      </div>
      <div className="about-content">
        <div className="about-content-text">
          This is a Web3 eCommerce application for the Lyra blockchain.
        </div>
      </div>
    </div>
  );
};

export default About;
