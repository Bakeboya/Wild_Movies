import React from "react";

function Streaming({ logo_path, provider_name }) {
  return (
    <div className="streaming">
      <img src={`https://image.tmdb.org/t/p/w500${logo_path}`} alt="logo" />
      <p className="textStream">Disponible en streaming sur {provider_name}</p>
    </div>
  );
}

export default Streaming;
