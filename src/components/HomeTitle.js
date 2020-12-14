import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//Images
import logo from "../img/guitar-logo.jpg";

const HomeTitle = () => {
  return (
    <StyledHomeTitle>
      <StyledLogo src={logo} alt="" />
      <h2>Michael Podolsky</h2>
      <h3>Front-End Software Developer</h3>
      <h4>Las Vegas, NV</h4>
      <Line />
    </StyledHomeTitle>
  );
};

export default HomeTitle;

const StyledHomeTitle = styled(motion.div)`
  background: #3f0000;
  height: 30vh;
  padding: 1rem 0rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
`;

const StyledLogo = styled(motion.img)`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 3px solid #b9b9b9;
`;

const Line = styled(motion.div)`
  width: 100%;
  height: 2px;
  background: #cacaca;
  position: absolute;
  bottom: 0;
  left: 0;
`;
