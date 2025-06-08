import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar";
import Slide from "../slide/Slide";
import "./HomePage.css";
import About from "../about/About";
import { Duo } from "../duo/Duo";
import Carousel from "../carousel/Carousel";
import Footer from "../footer/Footer";

const HomePage = () => {
  const [navOnHero, setNavOnHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.querySelector(".video_hero")?.offsetHeight || 0;
      setNavOnHero(window.scrollY < heroHeight - 60);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar navOnHero={navOnHero} />
      <div className="video_hero">
        <video
          src="https://generic-azuki-storage.b-cdn.net/Azuki%20AX%2025%20Campaign/AX%20Promo%20Video_GENERAL_16x9_Website.mp4"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="strip" />
      <Slide />
      <About />
      <Duo />
      <Carousel />
      <Footer />
      <div className="strip" />
    </>
  );
};

export default HomePage;
