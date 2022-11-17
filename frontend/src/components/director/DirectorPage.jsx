import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "@components/navbar/Navbar";
import DirectorProfile from "./DirectorProfile";
import DirectorMovies from "./DirectorMovies";

function DirectorPage() {
  const [directorInfo, setDirectorInfo] = useState(null);

  const { id } = useParams();

  const getDirectorInfo = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      )
      .then((res) => {
        setDirectorInfo(res.data);
      });
  };

  useEffect(() => {
    getDirectorInfo();
  }, [id]);

  return (
    <div>
      <Navbar />

      <div className="directorPage">
        <div>
          {directorInfo && (
            <DirectorProfile
              pic={directorInfo.profile_path}
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
          <p className="directorProfile_casting">
            {directorInfo && directorInfo.name} est célèbre pour :
          </p>
        </div>

        <div className="directorPage_movies">
          {directorInfo && <DirectorMovies idDirector={id} />}
        </div>
      </div>
    </div>
  );
}

export default DirectorPage;
