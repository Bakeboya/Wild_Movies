import React from "react";
import PropTypes from "prop-types";

function Streaming({ logoPath, providerName }) {
  return (
    <div className="streaming">
      <img src={`https://image.tmdb.org/t/p/w500${logoPath}`} alt="logo" />
      <p className="textStream">Disponible en streaming sur {providerName}</p>
    </div>
  );
}

Streaming.propTypes = {
  logoPath: PropTypes.string.isRequired,
  providerName: PropTypes.string.isRequired,
};

export default Streaming;
