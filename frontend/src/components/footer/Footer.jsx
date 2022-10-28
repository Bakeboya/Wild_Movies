import React from "react";
import logoWildmovies from "../../assets/logo footer/wildmovies.svg";
import logoFacebook from "../../assets/logo footer/facebook.svg";
import logoTwitter from "../../assets/logo footer/twitter.svg";
import logoInstagram from "../../assets/logo footer/instagram.svg";

function Footer() {
  return (
    <div className="footerApp">
      <img src={logoWildmovies} alt="logoW" id="logoW" />
      <div className="textLogo">
        <div className="logos">
          <a href="https://fr-fr.facebook.com/">
            <img src={logoFacebook} alt="logoF" />
          </a>
          <a href="https://twitter.com/?lang=fr">
            <img src={logoTwitter} alt="logoT" />
          </a>
          <a href="https://www.instagram.com/?hl=fr">
            <img src={logoInstagram} alt="logoI" />
          </a>
        </div>
        <p className="text">
          Relicta ora maritima in Lycaoniam adnexam Isauriae intersaepientes
          itinera qrgfqergesrg <br />
          et Serenianus dignus exsecratione cunctorum, innoxius, modo non{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
