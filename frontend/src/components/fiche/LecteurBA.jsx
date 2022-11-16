import React, { useState } from "react";
import componentLecteur from "@assets/fiche/ComponentLecteur.svg";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import Modal from "./Modal";

function LecteurBA({ preview, title }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCloseModal = (e) => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <a href={`https://www.youtube.com/watch?v=${preview[0].key}`}>
        {" "}
        <div className="lecteurBAMobile">
          <img
            className="logoLecteurMobile"
            src={componentLecteur}
            alt="logo lecteur bande-annonce"
          />
          <button className="popupLecteurBAMobile" type="button">
            Bande-annonce
          </button>
        </div>
      </a>
      <button type="button" className="lecteurBA" onClick={openCloseModal}>
        <img
          className="logoLecteur"
          src={componentLecteur}
          alt="logo lecteur bande-annonce"
        />
        <div className="popupLecteurBA">Bande-annonce</div>
      </button>
      <Modal open={isOpen} closeModal={openCloseModal} title={title}>
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
