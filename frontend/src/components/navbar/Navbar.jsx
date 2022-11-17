import React, { useState } from "react";
import UserIcon from "@components/navbar/UserIcon";
import PropTypes from "prop-types";
import Loupe from "./Loupe";
import WildMovies from "./WildMovies";

function Navbar({ setResults }) {
  const [fixed, setFixed] = useState(true);
  const [connected, setConnected] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <nav className={!fixed ? "Navbar" : "Navbar Bottom"}>
      <WildMovies setResults={setResults} />
      <Loupe />
      <div className="LoginDiv">
        <div className="Login">
          {connected && <p>{email}</p>}
          <UserIcon
            setEmail={setEmail}
            email={email}
            setConnected={setConnected}
            connected={connected}
          />
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  setResults: PropTypes.func.isRequired,
};
export default Navbar;
