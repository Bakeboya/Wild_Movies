import React from 'react';
import famille from '@assets/100.svg';
import douze from '@assets/200.svg';
import dix from '@assets/500.svg'
import seize from '@assets/300.svg';
import adult from '@assets/400.svg';

function Pegi({ pegi }) {

    const newPegi = pegi &&
        pegi
            .filter(
                (pegis) =>
                    pegis.iso_3166_1.includes("FR")).map(x => x.release_dates);

    const pegiChoice = (num) => {
        if (num[0].certification === "U") {
            return famille;
        } else if (num[0].certification === "10") {
            return dix;
        } else if (num[0].certification === "12") {
            return douze;
        } else if (num[0].certification === "16") {
            return seize;
        } else if (num[0].certification === "18") {
            return adult;
        } else {
            return famille;

        };
    }


        return (
            <div className="pegi">
                <img src={pegiChoice(newPegi[0])} alt="logo pegi" />
            </div>
        );
    }

    export default Pegi;