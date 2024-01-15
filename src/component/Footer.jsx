import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerColumnFirst">India</div>
      <div className="footerColumnSecond">
        <div className="footerLinks">
          <a href="#about">About</a>
          <a href="#advertising">Advertising</a>
          <a href="#business">Business</a>
          <a href="#how-search-works">How Search Works</a>
        </div>
        <div className="footerLinksRight">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#settings">Settings</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
