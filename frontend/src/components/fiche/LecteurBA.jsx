import React, { useState } from "react";
import componentLecteur from "@assets/ComponentLecteur.svg";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import Modal from "./Modal";

function LecteurBA({ preview, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="lecteurBA">
        <button
          className="popupLecteurBA"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <img
            id="logoLecteur"
            src={componentLecteur}
            alt="logo lecteur bande-annonce"
          />
          Bande-annonce
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} title={title}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${preview[0].key}`}
          />
        </Modal>
      </div>
      <div className="lecteurBa2">
        <div className="mobileLecteur2">
          <a href={`https://www.youtube.com/watch?v=${preview[0].key}`}>
            <img
              id="logoLecteur2"
              src={componentLecteur}
              alt="logo lecteur bande-annonce"
            />
            <p>Bande-annonce</p>
          </a>
        </div>
      </div>
    </div>
  );
}
LecteurBA.propTypes = {
  preview: PropTypes.shape(PropTypes.string, PropTypes.number).isRequired,
  title: PropTypes.string.isRequired,
};

export default LecteurBA;
