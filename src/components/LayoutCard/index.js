import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

const LayoutCard = ({ link = "#" }) => (
  <Grid item xs={4}>
    <Link to={link}>
      <Card style={{ height: "200px" }} />
    </Link>
  </Grid>
);

export default LayoutCard;
