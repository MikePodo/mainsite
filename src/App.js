import React, { useState } from "react";
//Components
import BurgerMenu from "./components/BurgerMenu";
import Certificates from "./pages/Certificates";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
//Router
import { Switch, Route } from "react-router-dom";

function App() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />

      <Switch>
        <Route path="/" exact>
          <Home setBurgerMenu={setBurgerMenu} burgerMenu={burgerMenu} />
        </Route>
        <Route path="/certificates" exact>
          <Certificates />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
