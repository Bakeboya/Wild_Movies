import React from "react";
import logoWildmovies from "../../assets/logo footer/wildmovies.svg";
import logoFacebook from "../../assets/logo footer/facebook.svg";
import logoTwitter from "../../assets/logo footer/twitter.svg";
import logoInstagram from "../../assets/logo footer/instagram.svg";

function Footer() {
  return (
    <footer className="footerApp">
      <img src={logoWildmovies} alt="logoW" id="logoW" />
      <div className="textLogo">
        <div className="logos">
          <a
            href="https://www.facebook.com/profile.php?id=100086913807582"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logoFacebook} alt="logoF" />
          </a>
          <a
            href="https://twitter.com/Wild_M0vies"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logoTwitter} alt="logoT" />
          </a>
          <a
            href="https://www.instagram.com/wild_m0vies/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logoInstagram} alt="logoI" />
          </a>
        </div>
        <p className="text">
          © Team Movies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
