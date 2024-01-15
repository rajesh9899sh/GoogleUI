import React from "react";

const Navigation = () => {
  const linkStyle = {
    paddingLeft: "15px",
    textDecoration: "none",
    color: "black",
  };

  return (
    <div className="nav">
      <div className="navWrapper">
        <div className="elements">
          <a href="https://mail.google.com/" style={linkStyle} target="_blank">
            Gmail
          </a>
          <a href="#" style={linkStyle} target="_blank">
            Images
          </a>
          <a href="#" style={linkStyle}>
            Menu
          </a>
          <div style={{ paddingLeft: "15px" }}>
            <button className="signInButtonStyle">
              <span style={{ fontSize: "14px", fontWeight: "500" }}>
                Sign In
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
