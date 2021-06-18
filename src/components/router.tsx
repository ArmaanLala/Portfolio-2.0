import React from "react";
import { HashRouter,Switch,Route } from "react-router-dom";
import Home from "../pages/Home/Home";

function Router() {
    return (
      <HashRouter>
          <Switch>
              <Route exact path="/" component={Home}>
              </Route>
          </Switch>
      </HashRouter>
    );
}

export default Router;