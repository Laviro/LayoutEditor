import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import LayoutCard from "../LayoutCard";

const LayoutPage = () => (
  <Grid
    container
    direction="column"
    justify="flex-start"
    alignItems="stretch"
    style={{ padding: "20px" }}
  >
    <Grid key={"title"} item>
      <Typography variant="h4">Layouts Screen</Typography>
      <Divider />
    </Grid>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      spacing={16}
      style={{ padding: "20px" }}
    >
      <LayoutCard link="/configuration" />
      <LayoutCard />
      <LayoutCard />
      <LayoutCard />
      <LayoutCard />
      <LayoutCard />
    </Grid>
  </Grid>
);

export default LayoutPage;
