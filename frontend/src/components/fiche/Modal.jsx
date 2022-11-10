import React, { useState, useEffect } from "react";
import FaWindowClose from "@meronex/icons/fa/FaWindowClose";
import PropTypes from "prop-types";

function Modal({ open, children, onClose, title }) {
  if (!open) return null;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="modalLecteur">
      <div className="container2">
        {loading ? (
          <div className="loader-container2">
            <div className="spinner2" />
          </div>
        ) : (
          <>
            <div className="modalClose">
              <h3>{title}</h3>
              <div className="closeBtn2">
                <FaWindowClose onClick={onClose} />
              </div>
            </div>
            <div className="modalContent">{children}</div>
          </>
        )}
      </div>
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
