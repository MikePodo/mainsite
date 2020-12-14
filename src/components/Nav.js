import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//Router
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <NavLogo>
        <h1>
          <Link to="/">MICHAEL PODOLSKY</Link>
        </h1>
      </NavLogo>
      <NavItems>
        <h4>
          <Link to="/">Home</Link>
        </h4>
        <h4>
          <Link to="/certificates">Certificates</Link>
        </h4>
        <h4>
          <Link to="/projects">Projects</Link>
        </h4>
      </NavItems>
      <Line />
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled(motion.nav)`
  position: relative;
  background: #262626;
  height: 5vh;
  color: #eaeaea;
  display: flex;
  align-items: center;
  padding: 0rem 5rem;
  justify-content: space-between;
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
  }
`;

const NavItems = styled(motion.div)`
  display: flex;
  width: 25%;
  justify-content: space-between;
  a {
    font-weight: 300;
    color: #eaeaea;
    text-decoration: none;
    font-size: 1.3rem;
  }
`;

const Line = styled(motion.div)`
  width: 100%;
  height: 2px;
  background: #cacaca;
  position: absolute;
  bottom: 0;
  left: 0;
`;
