import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HeaderContainer from "./containers/header";
import { FooterContainer } from "./containers/footer";
import Home from "./containers/home/home";
import CurrentGame from "./games/CurrentGame";
import NotFound from "./pages/notFound/";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Switch>
        <Route path="/games/:gameName">
          <CurrentGame />
        </Route>

        <Route path="/not-found">
          <NotFound />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Redirect to="/not-found" />
      </Switch>
      <FooterContainer />
    </div>
  );
}

export default App;
