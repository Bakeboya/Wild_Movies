import React, { useEffect, useState } from "react";
import axios from "axios";
import DirectorProfile from "./DirectorProfile";
import DirectorMovies from "./DirectorMovies";

function DirectorPage() {
  const [directorInfo, setDirectorInfo] = useState({});

  const idDirector = 19429;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${idDirector}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      )
      .then((res) => {
        setDirectorInfo(res.data);
      });
  }, []);

  return (
    <div className="directorPage">
      <div>
        {directorInfo !== 0 && (
          <DirectorProfile
            picture={directorInfo.profile_path}
            name={directorInfo.name}
            birthday={directorInfo.birthday}
            deathday={directorInfo.deathday}
            alias={directorInfo.also_known_as}
            city={directorInfo.place_of_birth}
            bio={directorInfo.biography}
          />
        )}
      </div>

      <div>
        <DirectorMovies idDirector={idDirector} />
      </div>
    </div>
  );
}

export default DirectorPage;
