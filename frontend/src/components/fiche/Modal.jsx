import React, { useState, useEffect } from "react";
import FaWindowClose from "@meronex/icons/fa/FaWindowClose";
import PropTypes from "prop-types";

function Modal({ open, children, title, closeModal }) {
  if (!open) return null;

  return (
    <div className="modalLecteur">
      <div className="modalClose">
        <h3>{title}</h3>
        <div className="closeBtn2">
          <FaWindowClose onClick={closeModal} />
        </div>
      </div>
      <div className="modalContent">{children}</div>
    </div>
  );
}
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.bool.isRequired,
  children: PropTypes.shape(PropTypes.string, PropTypes.number).isRequired,
};
export default Modal;
