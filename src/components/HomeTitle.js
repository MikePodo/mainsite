import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//Images
import logo from "../img/guitar-logo.jpg";
//Icons
import { GoLocation } from "react-icons/go";
//Animation
import { slideUp, slideDown } from "./animation";

const HomeTitle = () => {
  return (
    <StyledHomeTitle>
      <StyledLogo
        variants={slideDown}
        initial="hidden"
        animate="show"
        src={logo}
        alt="logo"
      />
      <motion.h2 variants={slideUp} initial="hidden" animate="show">
        Michael Podolsky
      </motion.h2>
      <motion.h3 variants={slideUp} initial="hidden" animate="show">
        Front-End Software Developer
      </motion.h3>
      <motion.h4
        variants={slideUp}
        initial="hidden"
        animate="show"
        style={{ display: "flex", alignItems: "center" }}
      >
        <GoLocation style={{ margin: "0rem 0.5rem" }} />
        Las Vegas, NV
      </motion.h4>
      <Line />
    </StyledHomeTitle>
  );
};

const StyledHomeTitle = styled(motion.div)`
  background: #3f0000;
  min-height: 30vh;
  padding: 1rem 0rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;

  h2 {
    color: #eaeaea;
    font-size: 2.5rem;
  }
  h3 {
    color: #b9b9b9;
    font-size: 2rem;
  }
  h4 {
    color: #878787;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 2rem;
      text-align: center;
    }
    h3 {
      font-size: 1.5rem;
      text-align: center;
      padding: 0rem 0.5rem;
    }
    h4 {
      font-size: 1rem;
    }
  }
`;

const StyledLogo = styled(motion.img)`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 3px solid #b9b9b9;
  @media screen and (max-width: 600px) {
    width: 5rem;
    height: 5rem;
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

export default HomeTitle;
