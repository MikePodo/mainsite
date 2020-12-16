import React from "react";
//Animation
import { AnimatePresence } from "framer-motion";
//Components
import BurgerMenu from "../components/BurgerMenu";
import CertificatesContent from "../components/CertificatesContent";
import CertificatesTitle from "../components/CertificatesTitle";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Certificates = ({ setBurgerMenu, burgerMenu }) => {
  return (
    <>
      <AnimatePresence>
        {burgerMenu ? <BurgerMenu setBurgerMenu={setBurgerMenu} /> : ""}
      </AnimatePresence>
      <Nav setBurgerMenu={setBurgerMenu} />
      <CertificatesTitle />
      <CertificatesContent />
      <Footer />
    </>
  );
};

export default Certificates;
