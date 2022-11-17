import React from "react";
import logoWildmovies from "../../assets/logo footer/wildmovies.svg";
import BilFacebook from '@meronex/icons/bi/BilFacebook';
import BilTwitter from '@meronex/icons/bi/BilTwitter';
import BilInstagramAlt from '@meronex/icons/bi/BilInstagramAlt';

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
        <p className="text">© Team Movies. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
