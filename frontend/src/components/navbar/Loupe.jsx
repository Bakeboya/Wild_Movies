import React from "react";
import GoSearch from "@meronex/icons/go/GoSearch";
import { Link } from "react-router-dom";

function Loupe() {
  return (
    <div className="LoupeDiv">
      <Link to="/search" className="Loupe">
        <GoSearch className="GoSearch" />
      </Link>
    </div>
  );
}

export default Loupe;
