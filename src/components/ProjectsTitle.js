import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//Images
import logo from "../img/guitar-logo.jpg";
//Animation
import { slideUpTitle, slideDown, purpleSlide } from "./animation";

const ProjectsTitle = () => {
  return (
    <StyledProjectsTitle>
      <ProjectsTitleBackground
        variants={purpleSlide}
        initial="hidden"
        animate="show"
      />
      <StyledLogo
        variants={slideDown}
        initial="hidden"
        animate="show"
        src={logo}
        alt="logo"
      />
      <motion.h2
        style={{ zIndex: 1 }}
        variants={slideUpTitle}
        initial="hidden"
        animate="show"
      >
        Projects
      </motion.h2>
      <Line />
    </StyledProjectsTitle>
  );
};

const ProjectsTitleBackground = styled(motion.div)`
  background: #27042a;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const StyledProjectsTitle = styled(motion.div)`
  background: transparent;
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
  z-index: 1;
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

export default ProjectsTitle;
