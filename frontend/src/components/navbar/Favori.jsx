import React from "react";
import FaWindowClose from "@meronex/icons/fa/FaWindowClose";
import wildmovies from "@assets/logo3_wildmovies.svg";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favori({ email, fav, closeFavori }) {

    const displayPath = "https://image.tmdb.org/t/p/w200";
    const [image, setImage] = useState([]);

    const getImage = () => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${fav}?api_key=${import.meta.env.VITE_API_KEY
                }&language=fr`
            )
            .then((res) => {
                setImage(res.data)
                console.log(res.data);
            });
    };

    useEffect(() => {
        getImage();
    }, []);

    return (
        <div className="divFavori">
            <div className="enteteForm">
                <img src={wildmovies} alt="title" id="userTitle" />
                <button type="submit" className="close" onClick={closeFavori}>
                    <FaWindowClose />
                </button>
            </div>
            <div className='favoriTitle'>
                <p className='user'>{email}</p>
                <div className='favori'>
                    <Link to={`/movie/${fav}`}>
                        <img
                            src={`${displayPath}${image.poster_path}`}
                            alt="Unable to load"
                            className="displayImage"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
Favori.propTypes = {
    email: PropTypes.func.isRequired,
    fav: PropTypes.func.isRequired,
    closeFavori: PropTypes.func.isRequired,
};
export default Favori;

