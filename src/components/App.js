import React from "react";
import { Route, Switch } from "react-router-dom";
import MainNavbar from "./MainNavBar";
import Play from "./Play";
import Results from "./Results";

const App = () => {
  return (
    <div>
      <MainNavbar />
      <hr className="m-0" />
      <Switch>
        <Route path="/" exact component={Play} />
        <Route path="/results" component={Results} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  );
};

export default App;
