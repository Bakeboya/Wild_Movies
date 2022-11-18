import React, { useState } from "react";
import BisUser from "@meronex/icons/bi/BisUser";
import PropTypes from "prop-types";
import User from "../user/User";

function UserIcon({ setEmail, email, setConnected, connected, fav, setFav }) {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className="UserDiv">
      <button type="submit" className="User" onClick={handleActive}>
        <BisUser className="bisUser" />
      </button>
      {active && (
        <User
          handleActive={handleActive}
          setEmail={setEmail}
          email={email}
          setConnected={setConnected}
          connected={connected}
          fav={fav}
          setFav={setFav}
        />
      )}
    </div>
  );
}
UserIcon.propTypes = {
  setEmail: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  connected: PropTypes.string.isRequired,
  setConnected: PropTypes.string.isRequired,
  fav: PropTypes.string.isRequired,
  setFav: PropTypes.string.isRequired,
};
export default UserIcon;
