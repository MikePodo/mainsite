import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
//Img
import capture from "../img/capture.jpg";
import coolors from "../img/coolors.jpg";
import ignite from "../img/ignite.jpg";
import twitter from "../img/twitter.jpg";
import waves from "../img/waves.jpg";
//Animation
import { scrollRevealImage } from "./animation";
import { useScrollForm } from "../useScroll";

const ProjectsContent = () => {
  const [elementForm, controlsForm] = useScrollForm();
  const [elementForm2, controlsForm2] = useScrollForm();
  const [elementForm3, controlsForm3] = useScrollForm();
  const [elementForm4, controlsForm4] = useScrollForm();
  const [elementForm5, controlsForm5] = useScrollForm();
  return (
    <StyledContent>
      <motion.a
        variants={scrollRevealImage}
        ref={elementForm}
        initial="hidden"
        animate={controlsForm}
        target="_blank"
        href="https://twitterclone.mikepodo.net"
      >
        <div className="info">
          <h1>Technologies Used:</h1>
          <ul>
            <li>React</li>
            <li>Sass</li>
            <li>Framer Motion</li>
            <li>Firebase Cloud Firestore</li>
          </ul>
        </div>
        <motion.h2>
          <span>Twitterclone:</span> <br />a semi-functioning clone of Twitter
        </motion.h2>
        <img className="image" src={twitter} alt="project"></img>
      </motion.a>
      <motion.a
        variants={scrollRevealImage}
        ref={elementForm2}
        initial="hidden"
        animate={controlsForm2}
        target="_blank"
        href="https://mikepodo-ignite.netlify.app/"
      >
        <div className="info">
          <h1>Technologies Used:</h1>
          <ul>
            <li>React</li>
            <li>React-Router</li>
            <li>Styled-Components</li>
            <li>Framer Motion</li>
            <li>Redux</li>
            <li>Axios</li>
          </ul>
        </div>
        <motion.h2>
          <span>Ignite:</span> <br />a site utilizing an API to display
          categorized games
        </motion.h2>
        <img className="image" src={ignite} alt="project" />
      </motion.a>
      <motion.a
        variants={scrollRevealImage}
        ref={elementForm3}
        initial="hidden"
        animate={controlsForm3}
        target="_blank"
        href="https://mikepodo-capture.netlify.app/"
      >
        <div className="info">
          <h1>Technologies Used:</h1>
          <ul>
            <li>React</li>
            <li>React-Router</li>
            <li>Styled-Components</li>
            <li>Framer Motion</li>
          </ul>
        </div>
        <motion.h2>
          <span>Capture:</span> <br />a template website for any general
          buisness
        </motion.h2>
        <img className="image" src={capture} alt="project" />
      </motion.a>
      <motion.a
        variants={scrollRevealImage}
        ref={elementForm4}
        initial="hidden"
        animate={controlsForm4}
        target="_blank"
        href="https://mikepodo-waves.netlify.app/"
      >
        <div className="info">
          <h1>Technologies Used:</h1>
          <ul>
            <li>React</li>
            <li>Sass</li>
          </ul>
        </div>
        <motion.h2>
          <span>Waves:</span> <br />a React media player
        </motion.h2>
        <img className="image" src={waves} alt="project" />
      </motion.a>
      <motion.a
        variants={scrollRevealImage}
        ref={elementForm5}
        initial="hidden"
        animate={controlsForm5}
        target="_blank"
        href="https://mikepodo-coolors.netlify.app/"
      >
        <div className="info">
          <h1>Technologies Used:</h1>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>Sass</li>
          </ul>
        </div>
        <motion.h2>
          <span>Coolors:</span> <br />a color picking toolkit for web developers
        </motion.h2>
        <img className="image" src={coolors} alt="project" />
      </motion.a>
    </StyledContent>
  );
};

export default ProjectsContent;

const StyledContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a {
    margin: 2rem;
    color: #b9b9b9;
    text-decoration: none;
    width: 50rem;
    position: relative;
    @media screen and (max-width: 900px) {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    &:hover {
      .info {
        opacity: 1;
      }
    }
    .info {
      transition: all 0.5s ease;
      position: absolute;
      width: 50rem;
      height: 35rem;
      bottom: 7px;
      background: rgba(1, 1, 1, 0.8);
      opacity: 0;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 900px) {
        width: 40rem;
        height: 25rem;
        bottom: 0;
      }
      @media screen and (max-width: 680px) {
        width: 35rem;
        height: 25rem;
      }
      @media screen and (max-width: 600px) {
        width: 30rem;
        height: 20rem;
      }
      @media screen and (max-width: 500px) {
        width: 25rem;
        height: 18rem;
      }
      @media screen and (max-width: 425px) {
        width: 22rem;
        height: 17rem;
      }
      @media screen and (max-width: 374px) {
        width: 20rem;
        height: 15rem;
      }
      @media screen and (max-width: 340px) {
        width: 17rem;
        height: 12rem;
      }
      h1 {
        color: white;
        font-size: 3rem;
        @media screen and (max-width: 600px) {
          font-size: 2rem;
        }
      }
      li {
        color: white;
        font-size: 2rem;
        @media screen and (max-width: 600px) {
          font-size: 1rem;
        }
      }
    }
  }
  h2 {
    text-align: center;
    @media screen and (max-width: 425px) {
      font-size: 1rem;
    }
  }
  span {
    color: #eaeaea;
  }
  .image {
    width: 50rem;
    height: 35rem;
    @media screen and (max-width: 900px) {
      width: 40rem;
      height: 25rem;
    }
    @media screen and (max-width: 680px) {
      width: 35rem;
      height: 25rem;
    }
    @media screen and (max-width: 600px) {
      width: 30rem;
      height: 20rem;
    }
    @media screen and (max-width: 500px) {
      width: 25rem;
      height: 18rem;
    }
    @media screen and (max-width: 425px) {
      width: 22rem;
      height: 17rem;
    }
    @media screen and (max-width: 374px) {
      width: 20rem;
      height: 15rem;
    }
    @media screen and (max-width: 340px) {
      width: 17rem;
      height: 12rem;
    }
  }
`;
