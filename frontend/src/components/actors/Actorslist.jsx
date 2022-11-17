import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "@components/navbar/Navbar";
import ActorImg from "./ActorImg";
import ActorText from "./ActorText";

function Actorslist() {
  const [actors, setActors] = useState([]);
  const [credits, setCredits] = useState([]);

  const { id } = useParams();

  const effect = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      )
      .then((res) => {
        setActors(res.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      )
      .then((res) => {
        setCredits(res.data);
      });
  };

  useEffect(() => {
    effect();
  }, []);

  return (
    <>
      <Navbar />
      <div className="actorlist">
        {actors.length !== 0 && (
          <ActorImg
            actImg={actors.profile_path}
            actName={actors.name}
            biography={actors.biography}
            birthday={actors.birthday}
            gender={actors.gender}
            placeOfBirth={actors.place_of_birth}
            deathday={actors.deathday}
            homepage={actors.homepage}
          />
        )}

        {credits.length !== 0 && (
          <ActorText cast={credits.cast} crew={credits.crew} />
        )}
      </div>
    </>
  );
}

export default Actorslist;
