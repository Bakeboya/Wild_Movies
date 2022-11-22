import React from "react";
import Navbar from "@components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import SecretHeader from "./SecretHeader";
import SecretActress from "./SecretActress";

function SecretPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <SecretHeader />

      <div className="secretPage">
        <button
          type="button"
          className="goBackBtn"
          onClick={() => {
            navigate("/");
          }}
        >
          X
        </button>

        <div className="secretPage_actress">
          <SecretActress />
        </div>
      </div>
    </div>
  );
}

export default SecretPage;
