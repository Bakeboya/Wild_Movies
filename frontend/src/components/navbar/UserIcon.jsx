import React, { useState } from "react";
import BisUser from "@meronex/icons/bi/BisUser";
import User from "../user/User";

function UserIcon() {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className="UserDiv">
      <button type="submit" className="User" onClick={handleActive}>
        <BisUser className="bisUser" />
      </button>
      {active && <User handleClose={handleActive} />}
    </div>
  );
}

export default UserIcon;
