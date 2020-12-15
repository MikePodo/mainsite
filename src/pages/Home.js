import React from "react";
//Components
import BurgerMenu from "../components/BurgerMenu";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";
import HomeTitle from "../components/HomeTitle";
import Nav from "../components/Nav";
//Animation
import { AnimatePresence } from "framer-motion";

const Home = ({ setBurgerMenu, burgerMenu, isDesktop }) => {
  return (
    <>
      <AnimatePresence>
        {burgerMenu ? <BurgerMenu setBurgerMenu={setBurgerMenu} /> : ""}
      </AnimatePresence>
      <Nav setBurgerMenu={setBurgerMenu} />
      <HomeTitle />
      <HomeContent isDesktop={isDesktop} />
      <Footer />
    </>
  );
};

export default Home;
