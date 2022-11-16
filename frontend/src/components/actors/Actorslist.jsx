import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ActorImg from "./ActorImg";
import ActorText from "./ActorText";

function Actorslist() {
  const [actors, setActors] = useState([]);
  const [credits, setCredits] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=fr`
      )
      .then((res) => {
        setActors(res.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=fr`
      )
      .then((res) => {
        setCredits(res.data);
      });
  }, []);
  console.log(id);
  console.log(actors);
  console.log(credits);

  return (
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
  );
}

export default Actorslist;
