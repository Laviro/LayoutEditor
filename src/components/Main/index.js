import React from "react";
import { Route } from "react-router-dom";
import LayoutPage from "../LayoutPage";
import ConfigurationPage from "../ConfigurationPage";

const Main = () => (
  <div className="main">
    <Route path="/" exact component={() => <LayoutPage />} />
    <Route path="/configuration" component={() => <ConfigurationPage />} />
  </div>
);

export default Main;
