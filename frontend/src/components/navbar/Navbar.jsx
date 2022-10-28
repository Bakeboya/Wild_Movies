import React from "react";
import Loupe from "./Loupe";
import User from "./User";
import WildMovies from "./WildMovies";

function Navbar() {
  const [fixed, setFixed] = React.useState(true);

  const handleScroll = () => {
    setFixed(!fixed);
  };

  return (
    <navbar className={!fixed ? "Navbar" : "Navbar Bottom"}>
      <WildMovies />
      <Loupe />
      <User />
      {/* <button className="Button" onClick={handleScroll}>Clic</button> */}
    </navbar>
  );
}

export default Navbar;
