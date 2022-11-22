import React from "react";
import { Link } from "react-router-dom";

const sliderData = [
  {
    id: 17647,
    name: "Michelle Rodriguez",
    picture: "https://image.tmdb.org/t/p/h632/xSvkVrLz6xas1mCeOR9i4QtmhnQ.jpg",
  },
  {
    id: 59192,
    name: "Emmanuelle Chriqui",
    picture: "https://image.tmdb.org/t/p/h632/cYZ6PSRdRv2igaEB3p2PKnW05vC.jpg",
  },
  {
    id: 1223786,
    name: "Emilia Clarke",
    picture: "https://image.tmdb.org/t/p/h632/86jeYFV40KctQMDQIWhJ5oviNGj.jpg",
  },
  {
    id: 37153,
    name: "Zoë Kravitz",
    picture: "https://image.tmdb.org/t/p/h632/tiQ3TBSvU4YAyrWMmVk6MTrKBAi.jpg",
  },
  {
    id: 1339,
    name: "Zhang Ziyi",
    picture: "https://image.tmdb.org/t/p/h632/6DUCAJzpw06VoAA9VWrvB2g4dpq.jpg",
  },
  {
    id: 159962,
    name: "Kat Graham",
    picture: "https://image.tmdb.org/t/p/h632/9AvpU8NAcPJRcioeNm5kVo4rPZg.jpg",
  },
  {
    id: 21045,
    name: "Maggie Q",
    picture: "https://image.tmdb.org/t/p/h632/1Z0A8axunWqZrskGkfANv6W5qCl.jpg",
  },
  {
    id: 524,
    name: "Natalie Portman",
    picture: "https://image.tmdb.org/t/p/h632/luLok04KiKqu3zq5rvKQhpiEDmx.jpg",
  },
  {
    id: 8691,
    name: "Zoe Saldaña",
    picture: "https://image.tmdb.org/t/p/h632/iOVbUH20il632nj2v01NCtYYeSg.jpg",
  },
  {
    id: 4587,
    name: "Halle Berry",
    picture: "https://image.tmdb.org/t/p/h632/d4NpMztZ9XiL5qtTFpERRtfPDpa.jpg",
  },
];

function SecretActress() {
  return (
    <div className="secretActress">
      {sliderData.map((infos) => {
        return (
          <Link to={`/actor/${infos.id}`}>
            <div className="secretActress_card">
              <img
                key={infos.id}
                className="secretActress_card_img"
                src={infos.picture}
                alt={infos.name}
              />
              <p className="secretActress_card_name">{infos.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SecretActress;
