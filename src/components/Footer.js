import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//Icons
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <StyledFooter>
      <h3>&copy; 2020 Michael Podolsky</h3>
    </StyledFooter>
  );
};

const StyledFooter = styled(motion.footer)`
  border-top: 2px solid #878787;
  height: 2.5vh;
  display: flex;
  align-items: center;
  color: #878787;
  h3 {
    font-weight: 200;
  }
`;

export default Footer;
