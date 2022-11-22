import React from "react";
import C from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 375 },
    items: 5,
    slidesToSlide: 5,
  },
  mobile: {
    breakpoint: { max: 375, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function SecretHeader() {
  const Carousel = C.default ? C.default : C;

  return (
    <div className="secretHeader">
      <Carousel
        containerClass="secretHeader_carousel"
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={2000}
      >
        {sliderData.map((infos) => {
          return (
            <img
              key={infos.id}
              className="secretHeader_carousel_img"
              src={infos.picture}
              alt={infos.name}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default SecretHeader;
