import React from "react";
import { Route } from "react-router-dom";

const Main = () => (
  <div className="main">
    <Route path="/" exact component={() => <h1>Layout Screen</h1>} />
    <Route
      path="/configuration"
      component={() => <h1>Configuration Screen</h1>}
    />
  </div>
);

export default Main;
