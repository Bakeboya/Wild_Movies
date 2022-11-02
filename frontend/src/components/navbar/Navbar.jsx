import React, { useState } from "react";
import UserIcon from "@components/navbar/UserIcon";
import Loupe from "./Loupe";
import WildMovies from "./WildMovies";

function Navbar() {
  const [fixed, setFixed] = useState(true);

  const handleScroll = () => {
    setFixed(!fixed);
  };

  return (
    <nav className={!fixed ? "Navbar" : "Navbar Bottom"}>
      <WildMovies />
      <Loupe />
      <UserIcon />
    </nav>
  );
}

export default Navbar;
