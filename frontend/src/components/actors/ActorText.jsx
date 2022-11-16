import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function ActorText({ cast }) {


  return (
    <table className="displayText">
      <thead className="thead">
        <th className="ii">Interprétations </th>
      </thead>
      <tbody>
        {cast.sort((a, b) =>
          (b.first_air_date === undefined ? b.release_date : b.first_air_date).split('/').join()
            .localeCompare((a.first_air_date === undefined ? a.release_date : a.first_air_date).split('/').join())
        ).map((element) => (

          element.character !== "" &&
          <Link className="link" to={`/${element.media_type}/${element.id}`} >
            <tr>
              <td className="credits">
                {element.title || element.name} interprétant {element.character}
              </td>
              <td>
                {element.first_air_date === undefined ? (
                  element.release_date.split("-")[0]
                ) : (
                  element.first_air_date.split("-")[0]
                )}
              </td>
            </tr>
          </Link>


        ))}
      </tbody>
    </table>
  );
}

ActorText.propTypes = {
  cast: PropTypes.string.isRequired,
};

export default ActorText;
