import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//Router
import { Link } from "react-router-dom";
//Icons
import { AiOutlineClose } from "react-icons/ai";
//Animation
import { burgerMenuAnim } from "./animation";

const BurgerMenu = ({ setBurgerMenu }) => {
  const closeBurgerMenuHandler = () => {
    setBurgerMenu(false);
  };

  return (
    <StyledBurgerMenu
      variants={burgerMenuAnim}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Circle></Circle>
      <AiOutlineClose className="close" onClick={closeBurgerMenuHandler} />
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        <Link to="/certificates">Certificates</Link>
      </h1>
      <h1>
        <Link to="/projects">Projects</Link>
      </h1>
    </StyledBurgerMenu>
  );
};

const StyledBurgerMenu = styled(motion.div)`
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: #262626;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;

  a {
    color: #eaeaea;
    text-decoration: none;
  }
  .close {
    position: absolute;
    top: 2%;
    right: 3%;
    color: #eaeaea;
    transform: scale(2);
    cursor: pointer;
  }
  h1 {
    z-index: 1;
  }
`;

const Circle = styled.div`
  position: absolute;
  background: #464646;
  width: 150rem;
  height: 150rem;
  border-radius: 50%;
`;

export default BurgerMenu;
