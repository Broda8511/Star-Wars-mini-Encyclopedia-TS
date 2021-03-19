import React from "react";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  return (
    <footer className="footer">
      <div>&copy; Copyright {currentYear}, by Adam Megger</div>
    </footer>
  );
};

export default Footer;
