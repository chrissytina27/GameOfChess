import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Game from "./Game";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/game" component={Game} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
