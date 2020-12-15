import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//Router
import { Link, useLocation } from "react-router-dom";
//Animations
import {
  slideRight,
  slideLeft,
  slideLeftContainer,
  slideLeftBurger,
} from "./animation";
//Icons
import { FiMenu } from "react-icons/fi";

const Nav = ({ setBurgerMenu }) => {
  const openBurgerMenuHandler = () => {
    setBurgerMenu(true);
  };
  const location = useLocation();
  return (
    <StyledNav>
      <NavLogo variants={slideRight} initial="hidden" animate="show">
        <h1>
          <Link to="/">MICHAEL PODOLSKY</Link>
        </h1>
      </NavLogo>
      <NavItems variants={slideLeftContainer} initial="hidden" animate="show">
        <motion.h4
          className={location.pathname === "/" ? "selected" : ""}
          variants={slideLeft}
        >
          <Link to="/">Home</Link>
        </motion.h4>
        <motion.h4
          className={location.pathname === "/certificates" ? "selected" : ""}
          variants={slideLeft}
        >
          <Link to="/certificates">Certificates</Link>
        </motion.h4>
        <motion.h4
          className={location.pathname === "/projects" ? "selected" : ""}
          variants={slideLeft}
        >
          <Link to="/projects">Projects</Link>
        </motion.h4>
      </NavItems>
      <NavItemsBurger>
        <motion.div variants={slideLeftBurger} initial="hidden" animate="show">
          <FiMenu className="burger" onClick={openBurgerMenuHandler} />
        </motion.div>
      </NavItemsBurger>
      <Line />
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  position: relative;
  background: #262626;
  min-height: 5vh;
  color: #eaeaea;
  display: flex;
  align-items: center;
  padding: 0rem 5rem;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    padding: 0rem 1rem;
  }
`;

const NavLogo = styled(motion.div)`
  h1 {
    font-size: 1.5rem;
    font-family: "JetBrains Mono", sans-serif;
    letter-spacing: 0.5rem;
    a {
      text-decoration: none;
      color: #eaeaea;
    }
    @media screen and (max-width: 1000px) {
      font-size: 1rem;
    }
  }
`;

const NavItems = styled(motion.div)`
  display: flex;
  position: relative;
  align-items: center;
  width: 30%;
  .burger {
    display: none;
  }
  justify-content: space-between;
  a {
    font-weight: 300;
    color: #eaeaea;
    text-decoration: none;
    font-size: 1.3rem;
  }
  h4 {
    padding: 0rem 1rem;
  }
  .selected {
    border-left: 1px solid #eaeaea;
    border-right: 1px solid #eaeaea;
  }
  @media screen and (max-width: 1650px) {
    width: 40%;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const NavItemsBurger = styled(motion.div)`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  .burger {
    transform: scale(2);
    color: #eaeaea;
    cursor: pointer;
  }
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

const Line = styled(motion.div)`
  width: 100%;
  height: 2px;
  background: #878787;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default Nav;
