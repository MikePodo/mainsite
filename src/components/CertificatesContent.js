import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
//Img
import HTMLCert from "../img/html.jpg";
import JSCert from "../img/javascript.jpg";
import ReactCert from "../img/react.jpg";
import RNCert from "../img/react-native-1.jpg";
import RN2Cert from "../img/react-native-2.jpg";
//Animation
import { imageAnim, slideLeftContainer } from "./animation";
const CertificatesContent = () => {
  return (
    <StyledContent
      variants={slideLeftContainer}
      initial="hidden"
      animate="show"
    >
      <motion.img
        variants={imageAnim}
        className="image"
        src={HTMLCert}
        alt="html"
      />
      <motion.img
        variants={imageAnim}
        className="image"
        src={JSCert}
        alt="javascript"
      />
      <motion.img
        variants={imageAnim}
        className="image"
        src={ReactCert}
        alt="react"
      />
      <motion.img
        variants={imageAnim}
        className="image"
        src={RNCert}
        alt="react-native"
      />
      <motion.img
        variants={imageAnim}
        className="image"
        src={RN2Cert}
        alt="react-native-2"
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
