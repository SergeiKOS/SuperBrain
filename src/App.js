import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Game from "./pages/Game/Game";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/games/:gameName">
          <Game />
        </Route>

        <Route path="/not-found">
          <NotFound />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
