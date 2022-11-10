import React, { useState } from "react";
import componentLecteur from "@assets/fiche/ComponentLecteur.svg";
import componentLecteur2 from "@assets/fiche/ComponentLecteur2.svg";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import Modal from "./Modal";

function LecteurBA({ preview, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="lecteurBA">
        <img
          className="logoLecteur"
          src={componentLecteur}
          alt="logo lecteur bande-annonce"
        />
        <button
          className="popupLecteurBA"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          Bande-annonce
        </button>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} title={title}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${preview[0].key}`}
        />
      </Modal>
    </div>
  );
}
LecteurBA.propTypes = {
  preview: PropTypes.shape(PropTypes.string, PropTypes.number).isRequired,
  title: PropTypes.string.isRequired,
};

export default LecteurBA;
