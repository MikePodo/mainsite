import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//Animations
import {
  slideLeftContainerForm,
  slideLeftForm,
  slideUpContainer,
  slideUpContent,
} from "./animation";

const HomeContent = () => {
  return (
    <StyledHomeContent>
      <ContentLeft variants={slideUpContainer} initial="hidden" animate="show">
        <ContentLeftTop>
          <motion.h2 variants={slideUpContent} className="aboutme">
            About Me
          </motion.h2>
          <motion.p variants={slideUpContent}>
            Michael Podolsky is a front-end software developer in training based
            in Las Vegas, Nevada. He will be attending UNLV in the fall of 2021
            to study computer science. Michael has a passion for music and has
            been playing guitar for over half of his life.
          </motion.p>
        </ContentLeftTop>
        <ContentLeftBottom>
          <motion.h2 variants={slideUpContent}>
            Experience in the following technologies:
          </motion.h2>
          <motion.ul variants={slideUpContent}>
            <li>HTML</li>
            <li>(S)SCSS</li>
            <li>JavaScript(ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Figma</li>
            <li>Adobe Photoshop</li>
          </motion.ul>
        </ContentLeftBottom>
      </ContentLeft>
      <ContentRight
        variants={slideLeftContainerForm}
        initial="hidden"
        animate="show"
      >
        <motion.h2 variants={slideLeftForm}>Contact Me</motion.h2>
        <form className="form" netlify>
          <motion.label variants={slideLeftForm} htmlFor="name">
            Name:
          </motion.label>
          <br />
          <motion.input
            variants={slideLeftForm}
            required
            type="text"
            id="name"
          />
          <br />
          <motion.label variants={slideLeftForm} htmlFor="email">
            Email:
          </motion.label>
          <br />
          <motion.input
            variants={slideLeftForm}
            required
            type="email"
            id="email"
          />
          <br />
          <motion.label variants={slideLeftForm} htmlFor="message">
            Message:
          </motion.label>
          <br />
          <motion.textarea
            variants={slideLeftForm}
            className="textarea"
            required
            type="textarea"
            id="message"
            rows="7"
            cols="10"
          />
          <br />
          <motion.button variants={slideLeftForm} type="submit">
            Submit
          </motion.button>
        </form>
      </ContentRight>
    </StyledHomeContent>
  );
};

const StyledHomeContent = styled(motion.div)`
  min-height: 62.5vh;
  background: #262626;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ContentLeft = styled(motion.div)`
  margin-top: 1rem;
  width: 25%;
  margin-right: 1rem;
  .aboutme {
    text-align: center;
  }
  h2 {
    font-size: 32px;
    color: #b9b9b9;
    text-align: center;
  }
  p,
  li {
    font-size: 24px;
    color: #eaeaea;
  }
  ul {
    list-style-position: inside;
  }
  @media screen and (max-width: 1800px) {
    h2 {
      font-size: 28px;
    }
    p,
    li {
      font-size: 20px;
    }
  }
`;

const ContentLeftTop = styled(motion.div)``;
const ContentLeftBottom = styled(motion.div)`
  @media screen and (max-width: 1800px) {
    margin-top: 2rem;
  }
`;

const ContentRight = styled(motion.div)`
  width: 25%;
  margin-top: 1rem;
  margin-left: 1rem;
  h2 {
    font-size: 32px;
    color: #b9b9b9;
    text-align: center;
  }
  .form {
    color: #eaeaea;
    font-size: 24px;
    text-align: center;
    input {
      font-size: 24px;
      padding: 0.5rem 0rem;
      background: transparent;
      border: none;
      border-bottom: 2px solid #878787;
      color: #878787;
      margin-bottom: 1rem;
    }
    .textarea {
      background: transparent;
      border: none;
      border-bottom: 2px solid #878787;
      font-size: 24px;
      color: #878787;
      resize: none;
      font-family: "Poppins", sans-serif;
    }
    button {
      font-size: 24px;
      margin-top: 2rem;
      padding: 0.5rem 3rem;
      background: transparent;
      border: 2px solid #878787;
      color: #eaeaea;
    }
  }
  @media screen and (max-width: 1800px) {
    h2 {
      font-size: 28px;
    }
    .form {
      font-size: 20px;
    }
    input {
      font-size: 20px;
    }
  }
`;

export default HomeContent;