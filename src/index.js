import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./components/dashboard";
import Gifs from "./components/gifs";
import TopGif from "./components/top-gif";

import App from "./App";

const ViewApp = (

    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Gifs} />
          <Route exact path="/gifs" component={Gifs} />
          <Route exact path="/top-gif" component={TopGif} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>

        <App />
      </BrowserRouter>
    </div>

);

ReactDOM.render(ViewApp, document.getElementById("root"));
