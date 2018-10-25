import React from "react";
import Bar from "../Bar";
import Drawer from "../Drawer";

export default props => (
  <div className="layout">
    <Bar {...props} />
    <Drawer {...props} />
  </div>
);
