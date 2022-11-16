import React from "react";
import PropTypes from "prop-types";

function Streaming({ logoPath, providerName }) {
  const linkChoice = (streamer) => {
    let temp = "";
    if (streamer === undefined) {
      temp = "";
    } else if (streamer.includes("Netflix")) {
      temp = "https://www.netflix.com/fr/";
    } else if (streamer.includes("Amazon")) {
      temp =
        "https://www.primevideo.com/?ref_=dvm_pds_amz_FR_lb_s_g_mkw_s3Oj3NhSb-dc_pcrid_620160435350&mrntrk=slid__pgrid_47089274879_pgeo_1006273_x__ptid_kwd-297838409645";
    } else if (streamer.includes("Canal+")) {
      temp = "https://www.canalplus.com/";
    } else if (streamer.includes("Disney")) {
      temp = "https://www.disneyplus.com/fr-fr";
    }
    return temp;
  };

  return (
    <div className="streaming">
      <a href={linkChoice(providerName)}>
        <img src={`https://image.tmdb.org/t/p/w500${logoPath}`} alt="logo" />
        <p className="textStream">Disponible en streaming sur {providerName}</p>
      </a>
    </div>
  );
}

Streaming.propTypes = {
  logoPath: PropTypes.string.isRequired,
  providerName: PropTypes.string.isRequired,
};

export default Streaming;
