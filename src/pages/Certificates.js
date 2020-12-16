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
      <Nav setBurgerMenu={setBurgerMenu} />
      <AnimatePresence>
        {burgerMenu ? <BurgerMenu setBurgerMenu={setBurgerMenu} /> : ""}
      </AnimatePresence>

      <CertificatesTitle />
    </>
  );
};

export default Certificates;
