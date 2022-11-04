import FicheFilm from "@components/fiche/FicheFilm";
import Filters from "@components/filters/Filters";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import Navbar from "@components/navbar/Navbar";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Filters />
      {/* <FicheFilm /> */}
      <Footer />
    </>
  );
}
