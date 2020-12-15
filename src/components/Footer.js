import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { slideUpContainer, slideUp } from "./animation";
//Icons
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <StyledFooter variants={slideUp} initial="hidden" animate="show">
      <Line />
      <h3>&copy; 2020 Michael Podolsky</h3>
      <motion.div
        variants={slideUpContainer}
        initial="hidden"
        animate="show"
        className="socials"
      >
        <motion.a
          variants={slideUp}
          target="_blank"
          className="social"
          href="https://github.com/MikePodo"
        >
          <AiFillGithub className="icon" />
        </motion.a>
        <motion.a
          variants={slideUp}
          target="_blank"
          className="social"
          href="https://twitter.com/MikePodolskyy"
        >
          <FaTwitter className="icon" />
        </motion.a>
        <motion.a
          variants={slideUp}
          target="_blank"
          className="social"
          href="https://www.instagram.com/michael.podolsky/"
        >
          <AiOutlineInstagram className="icon" />
        </motion.a>
        <motion.a
          variants={slideUp}
          target="_blank"
          className="social"
          href="mailto: michaelspodolsky@gmail.com"
        >
          <CgMail className="icon" />
        </motion.a>
      </motion.div>
    </StyledFooter>
  );
};

const StyledFooter = styled(motion.footer)`
  height: 2.5vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 5rem;
  color: #878787;
  overflow: hidden;
  h3 {
    font-weight: 200;
    font-size: 1rem;
    @media screen and (max-width: 400px) {
      font-size: 0.8rem;
    }
  }
  .socials {
    display: flex;
    justify-content: space-between;
    width: 20%;
    height: 100%;
    .social {
      display: block;
      height: 100%;
      .icon {
        height: 100%;
        width: 100%;
        color: #878787;
        transform: scale(0.8);
      }
    }
    @media screen and (max-width: 800px) {
      width: 40%;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 0rem 1rem;
  }
`;
const Line = styled(motion.div)`
  width: 100%;
  height: 2px;
  background: #878787;
  position: absolute;
  top: 0px;
  left: 0;
`;

export default Footer;
