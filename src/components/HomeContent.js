import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//Animations
import {
  slideLeftContainerForm,
  slideLeftForm,
  slideUpContainer,
  slideUpContent,
  scrollRevealForm,
  scrollRevealAbout,
} from "./animation";
import { useScrollForm, useScrollAbout } from "../useScroll";

const HomeContent = ({ isDesktop }) => {
  const [elementForm, controlsForm] = useScrollForm();
  const [elementAbout, controlsAbout] = useScrollAbout();
  return (
    <StyledHomeContent>
      {isDesktop ? (
        <ContentLeft
          variants={slideUpContainer}
          initial="hidden"
          animate="show"
        >
          <ContentLeftTop>
            <motion.h2 variants={slideUpContent} className="aboutme">
              About Me
            </motion.h2>
            <motion.p variants={slideUpContent}>
              Michael Podolsky is a front-end software developer in training
              based in Las Vegas, Nevada. He will be attending UNLV in the fall
              of 2021 to study computer science. Michael has a passion for music
              and has been playing guitar for over half of his life.
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
      ) : (
        <ContentLeft
          variants={scrollRevealAbout}
          ref={elementAbout}
          initial="hidden"
          animate={controlsAbout}
          style={{ marginBottom: "2rem" }}
        >
          <ContentLeftTop>
            <motion.h2 className="aboutme">About Me</motion.h2>
            <motion.p>
              Michael Podolsky is a front-end software developer in training
              based in Las Vegas, Nevada. He will be attending UNLV in the fall
              of 2021 to study computer science. Michael has a passion for music
              and has been playing guitar for over half of his life.
            </motion.p>
          </ContentLeftTop>
          <ContentLeftBottom>
            <motion.h2>Experience in the following technologies:</motion.h2>
            <motion.ul>
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
      )}

      {isDesktop ? (
        <ContentRight
          variants={slideLeftContainerForm}
          initial="hidden"
          animate="show"
        >
          <motion.h2 variants={slideLeftForm}>Contact Me</motion.h2>
          <form
            data-error="Please fill out this form."
            className="form"
            name="contact"
            method="post"
          >
            <input type="hidden" name="form-name" value="contact"></input>
            <motion.label variants={slideLeftForm} htmlFor="name">
              Name:
            </motion.label>
            <br />
            <motion.input
              variants={slideLeftForm}
              required
              type="text"
              id="name"
              name="name"
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
              name="email"
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
              name="message"
            />
            <br />
            <motion.button variants={slideLeftForm} type="submit">
              Submit
            </motion.button>
          </form>
        </ContentRight>
      ) : (
        <ContentRight
          variants={scrollRevealForm}
          ref={elementForm}
          initial="hidden"
          animate={controlsForm}
          style={{ marginBottom: "7rem" }}
        >
          <motion.h2>Contact Me</motion.h2>
          <form
            style={{ marginTop: "2rem" }}
            className="form"
            name="contact"
            method="post"
          >
            <input type="hidden" name="form-name" value="contact"></input>
            <motion.label htmlFor="name">Name:</motion.label>
            <br />
            <motion.input required type="text" id="name" name="name" />
            <br />
            <motion.label htmlFor="email">Email:</motion.label>
            <br />
            <motion.input required type="email" id="email" name="email" />
            <br />
            <motion.label htmlFor="message">Message:</motion.label>
            <br />
            <motion.textarea
              className="textarea"
              required
              type="textarea"
              id="message"
              rows="7"
              cols="10"
              name="message"
            />
            <br />
            <motion.button type="submit">Submit</motion.button>
          </form>
        </ContentRight>
      )}
    </StyledHomeContent>
  );
};

const StyledHomeContent = styled(motion.div)`
  min-height: 62.5vh;
  background: #262626;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
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
  @media screen and (max-width: 800px) {
    h2 {
      font-size: 24px;
    }
    p,
    li {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 800px) {
    width: 90%;
    margin: auto;
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
      width: 60%;
      transition: all 0.3s ease;
      &:hover {
        border-bottom: 7px solid #878787;
      }
      &:focus {
        border-bottom: 7px solid #878787;
        outline: none;
      }

      @media screen and (max-width: 1500px) {
        width: 80%;
      }
      @media screen and (max-width: 1050px) {
        width: 100%;
      }
    }
    .textarea {
      background: transparent;
      border: none;
      border-bottom: 2px solid #878787;
      font-size: 24px;
      color: #878787;
      resize: none;
      font-family: "Poppins", sans-serif;
      width: 60%;
      transition: all 0.3s ease;
      &:hover {
        border-bottom: 7px solid #878787;
      }
      &:focus {
        border-bottom: 7px solid #878787;
        outline: none;
      }
      @media screen and (max-width: 1500px) {
        width: 80%;
      }
      @media screen and (max-width: 1050px) {
        width: 100%;
      }
    }
    button {
      cursor: pointer;
      font-size: 24px;
      margin-top: 2rem;
      padding: 0.5rem 3rem;
      background: transparent;
      border: 2px solid #878787;
      color: #eaeaea;
      transition: all 0.3s ease;
      &:hover {
        background: #3f0000;
        font-size: 26px;
      }
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
  @media screen and (max-width: 800px) {
    width: 90%;
    margin: auto;
    margin-bottom: 1rem;

    h2 {
      font-size: 24px;
    }
    .form {
      font-size: 16px;
    }
    input {
      font-size: 16px;
    }
  }
`;

export default HomeContent;
