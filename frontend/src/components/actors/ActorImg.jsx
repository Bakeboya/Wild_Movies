import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function ActorImg({ actImg, actName, biography, birthday, gender, placeOfBirth, deathday, homepage }) {

    const imgAct = `http://image.tmdb.org/t/p/h632/${actImg}`;
    const [textShow, setTextShow] = useState(false);

    function getAge() {
        const dt = new Date(birthday)
        const deathTime = new Date(deathday)
        let diff = '';
        if (deathday === null) {
            diff = Date.now() - dt.getTime();
        } else {
            diff = deathTime - dt.getTime();
        }
        let age = new Date(diff);
        return Math.abs(age.getUTCFullYear() - 1970);
    };

    const biocut = biography.slice(0, 205);


    return (

        <div className="actorsInfos">

            <div className="imgNameInfos">
                <div className="picture">
                    <img className="actorImg" src={imgAct} alt={actName} />
                </div>

                <h2>{actName}</h2>

                <div className="moreInfos">


                    <div className="actorGender">

                        <p className="titles"> Genre </p>

                        {gender === 1 ? (
                            <p> Femme </p>
                        ) : (
                            <p> Homme </p>
                        )}
                    </div>

                    <div className="actorBirthday">
                        <p className="titles"> Date de naissance </p>
                        <p>{birthday}</p>
                    </div>

                    <div className="placeBirth">
                        <p className="titles"> Lieu de naissance </p>
                        <p>{placeOfBirth}</p>
                    </div>

                    <div className="deathday">

                        {deathday && (
                            <>
                                <p className="titles"> Date du décès </p>

                                <p>{deathday} à  {getAge()} ans</p>
                            </>
                        )
                        }

                    </div>

                    <div className="homepage">

                        {homepage && (
                            <>
                                <p className="titles"> Lien site web {homepage}</p>
                                <p>{homepage}</p>
                            </>
                        )
                        }
                    </div>
                </div>
            </div>

            <div className="actorBio">
                <h3> Biographie </h3>
                {textShow === false ? (
                    <>
                        <p>{`${biocut} (...)`}</p>
                        <button className="lire" onClick={() => { setTextShow(true) }}> Lire plus </button>
                    </>) : (
                    <>
                        <p> {biography}</p>
                        <button className="lire" onClick={() => { setTextShow(false) }}> Lire moins </button>
                    </>)
                }
            </div>
        </div>
    )
}


ActorImg.propTypes = {
    actImg: PropTypes.string.isRequired,
    actName: PropTypes.string.isRequired,
};
export default ActorImg;

