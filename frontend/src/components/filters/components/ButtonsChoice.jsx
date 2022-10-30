import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function ButtonsChoice({ movies, series }) {
    const [toggleType, setToggleType] = useState(1);
    const typeButton = (index) => {
        setToggleType(index);
    };

    return (
        <div className="choiceContainer">
            <div className="typeChoice">
                <button
                    className={toggleType === 1 ? "selected" : ""}
                    type="button"
                    onClick={() => typeButton(1)}
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w300${movies?.[0]?.backdrop_path}), linear-gradient(0deg, #e66d38, #e66d38)`,
                    }}
                >
                    Films
                </button>
                <button
                    className={toggleType === 2 ? "selected" : ""}
                    type="button"
                    onClick={() => typeButton(2)}
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w300${series?.[0]?.backdrop_path}), linear-gradient(0deg, #e66d38, #e66d38)`,
                    }}
                >
                    Séries
                </button>
            </div>
            {toggleType === 1 && (
                <nav>
                    <NavLink>Populaires</NavLink>
                    <NavLink>Les mieux notés</NavLink>
                    <NavLink>A venir</NavLink>
                </nav>
            )}
            {toggleType === 2 && (
                <nav>
                    <NavLink>Populaires</NavLink>
                    <NavLink>Les mieux notées</NavLink>
                    <NavLink>En cours de diffusion</NavLink>
                </nav>
            )}
        </div>
    );
}

export default ButtonsChoice;

ButtonsChoice.propTypes = {
    movies: PropTypes.objectOf(
        PropTypes.shape([
            PropTypes.bool,
            PropTypes.string,
            PropTypes.array,
            PropTypes.number,
            PropTypes.string,
            PropTypes.string,
            PropTypes.string,
            PropTypes.number,
            PropTypes.string,
            PropTypes.string,
            PropTypes.string,
            PropTypes.bool,
            PropTypes.number,
            PropTypes.number,
        ])
    ).isRequired,
    series: PropTypes.objectOf(
        PropTypes.shape([
            PropTypes.string,
            PropTypes.string,
            PropTypes.array,
            PropTypes.number,
            PropTypes.string,
            PropTypes.array,
            PropTypes.string,
            PropTypes.string,
            PropTypes.string,
            PropTypes.number,
            PropTypes.string,
            PropTypes.number,
            PropTypes.number,
        ])
    ).isRequired,
};
