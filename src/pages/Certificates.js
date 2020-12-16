import React from "react";
//Animation
import { AnimatePresence } from "framer-motion";
//Components
import BurgerMenu from "../components/BurgerMenu";
import CertificatesTitle from "../components/CertificatesTitle";
import Nav from "../components/Nav";

const Certificates = ({ setBurgerMenu, burgerMenu }) => {
  return (
    <>
      <AnimatePresence>
        {burgerMenu ? <BurgerMenu setBurgerMenu={setBurgerMenu} /> : ""}
      </AnimatePresence>
      <Nav setBurgerMenu={setBurgerMenu} />
      <CertificatesTitle />
    </>
  );
};

export default Certificates;
