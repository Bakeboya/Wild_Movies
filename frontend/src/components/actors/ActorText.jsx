import React from "react";
import PropTypes from "prop-types";

function ActorText({ cast, crew }) {
  return (
    <table className="displayText">
      <thead className="thead">
        <th>Interprétations </th>
      </thead>
      <tbody>
        {cast.map((element) => (
          <tr>
            <td className="credits">
              {element.title || element.name} interprétant {element.character}
            </td>
            <td>
              {element.first_air_date === undefined
                ? element.release_date.split("-")[0]
                : element.first_air_date.split("-")[0]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ActorText;
