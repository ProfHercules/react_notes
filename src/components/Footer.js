import React from "react";
const Footer = () => {
  const footerStyle = {
    color: "grey",
    fontStyle: "italic",
    fontSize: 15,
  };

  return (
    <div style={footerStyle}>
      <br />
      <em>React Notes App, FullStackOpen, 2020</em>
    </div>
  );
};
export default Footer;
