import React from "react";
//Components
import HomeTitle from "../components/HomeTitle";
import Nav from "../components/Nav";
import BurgerMenu from "../components/BurgerMenu";
//Animation
import { AnimatePresence } from "framer-motion";

const Home = ({ setBurgerMenu, burgerMenu }) => {
  return (
    <>
      <AnimatePresence>
        {burgerMenu ? <BurgerMenu setBurgerMenu={setBurgerMenu} /> : ""}
      </AnimatePresence>
      <Nav setBurgerMenu={setBurgerMenu} />
      <HomeTitle />
    </>
  );
};

export default Home;
