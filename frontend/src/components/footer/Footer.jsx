import React from "react";
import BilFacebook from "@meronex/icons/bi/BilFacebook";
import BilTwitter from "@meronex/icons/bi/BilTwitter";
import BilInstagramAlt from "@meronex/icons/bi/BilInstagramAlt";
import FiArrowUpCircle from "@meronex/icons/fi/FiArrowUpCircle";
import logoWildmovies from "../../assets/logo footer/wildmovies.svg";

function Footer() {
  return (
    <footer className="footerApp">
      <div className="footerContainer">
        <img src={logoWildmovies} alt="logoW" id="logoW" />
        <div className="textLogo">
          <div className="logos">
            <a
              href="https://www.facebook.com/profile.php?id=100086913807582"
              target="_blank"
              rel="noreferrer"
            >
              <BilFacebook />
            </a>
            <a
              href="https://twitter.com/Wild_M0vies"
              target="_blank"
              rel="noreferrer"
            >
              <BilTwitter />
            </a>
            <a
              href="https://www.instagram.com/wild_m0vies/"
              target="_blank"
              rel="noreferrer"
            >
              <BilInstagramAlt />
            </a>
          </div>
        </div>
        <button
          type="button"
          className="btnToTop"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <FiArrowUpCircle />
        </button>
      </div>
      <p className="text">© Team Movies. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
