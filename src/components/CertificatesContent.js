import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
//Img
import Cert1 from "../img/html.jpg";
import Cert2 from "../img/javascript.jpg";
import Cert3 from "../img/react.jpg";
//Animation
import { imageAnim } from "./animation";
const CertificatesContent = ({ isDesktop }) => {
  return (
    <StyledContent>
      <motion.img
        variants={imageAnim}
        initial="hidden"
        animate="show"
        className="image"
        src={Cert1}
        alt="html"
      />
      <motion.img
        variants={imageAnim}
        initial="hidden"
        animate="show"
        className="image"
        src={Cert2}
        alt="javascript"
      />
      <motion.img
        variants={imageAnim}
        initial="hidden"
        animate="show"
        className="image"
        src={Cert3}
        alt="react"
      />
    </StyledContent>
  );
};

export default CertificatesContent;

const StyledContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .image {
    width: 50rem;
    height: 40rem;
    margin: 2rem;
    @media screen and (max-width: 900px) {
      width: 40rem;
      height: 30rem;
    }
    @media screen and (max-width: 700px) {
      width: 30rem;
      height: 25rem;
    }
    @media screen and (max-width: 550px) {
      width: 20rem;
      height: 15rem;
    }
  }
`;
