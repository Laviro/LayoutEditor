import React from "react";
import Bar from "../Bar";
import Drawer from "../Drawer";

export default props => (
  <div className="header">
    <Bar {...props} />
    <Drawer {...props} />
  </div>
);
