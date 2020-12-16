import React, { useState, useEffect } from "react";
//Components
import Certificates from "./pages/Certificates";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const location = useLocation();

  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <GlobalStyle burgerMenu={burgerMenu} />

      <Switch location={location}>
        <Route path="/" exact>
          <Home
            isDesktop={isDesktop}
            setBurgerMenu={setBurgerMenu}
            burgerMenu={burgerMenu}
          />
        </Route>
        <Route path="/certificates" exact>
          <Certificates setBurgerMenu={setBurgerMenu} burgerMenu={burgerMenu} />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
