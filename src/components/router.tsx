import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/";
import Header from "./Header";
import Footer from "./Footer";
function Router() {
  return (
    <div style={{height:"100vh"}}>
    <body className="d-flex h-100 text-center text-white bg-secondary">
      <div className="d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </HashRouter>
      <Footer />
      </div>
    </body>
    </div>
  );
}

export default Router;
