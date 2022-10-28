import React, { useState, useEffect } from "react";
import alien from "@assets/header/alien.jpg";
import dune from "@assets/header/dune.jpg";
import future from "@assets/header/future.jpg";
import interstellar from "@assets/header/interstellar.jpg";
import matrix from "@assets/header/matrix.jpg";
import terminator from "@assets/header/terminator.jpg";

const sliderData = [
  {
    image: alien,
  },
  {
    image: dune,
  },
  {
    image: interstellar,
  },
  {
    image: matrix,
  },
  {
    image: future,
  },
  {
    image: terminator,
  },
];

function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  const intervalTime = 6000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);

  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <header className="header">
      <div className="slider">
        {sliderData.map((slide, index) => {
          const id = `caroussel-${index}`;
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={id}
            >
              {index === currentSlide && (
                <img src={slide.image} alt="slide" className="image" />
              )}
            </div>
          );
        })}
      </div>
      <div className="smartBox">
        <div className="wildMovies">
          <h1>
            Wild<span>Movies</span>
          </h1>
        </div>

        <div>
          <p>Le meilleur moteur de recherche de films et de séries</p>
        </div>

        <div>
          <button type="button" className="searchButton">
            RECHERCHER
          </button>
        </div>

        <div className="searchBarBox">
          <input className="searchBar" placeholder="Commencer ma recherche" />
          <button type="button" className="searchButtonDesktop">
            RECHERCHER
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
