import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Card } from "@material-ui/core";
import LayoutCard from "../LayoutCard";

const ConfigurationPage = () => (
  <Grid container direction="row" justify="flex-start" alignItems="stretch">
    <Grid
      item
      xs={3}
      style={{
        borderRight: "1px solid #e1e1e1",
        padding: "20px"
      }}
    >
      <Typography variant="h5" style={{ marginTop: "8px" }}>
        Components
      </Typography>
      <Divider />
      <Card
        style={{ height: "100px", marginTop: "20px", marginBottom: "20px" }}
      />
      <Card
        style={{ height: "100px", marginTop: "20px", marginBottom: "20px" }}
      />
      <Card
        style={{ height: "100px", marginTop: "20px", marginBottom: "20px" }}
      />
      <Card
        style={{ height: "100px", marginTop: "20px", marginBottom: "20px" }}
      />
      <Card
        style={{ height: "100px", marginTop: "20px", marginBottom: "20px" }}
      />
    </Grid>
    <Grid item xs={9}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        style={{ padding: "20px" }}
      >
        <Grid key={"title"} item>
          <Typography variant="h4">Configuration Screen</Typography>
          <Divider />
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={16}
          style={{ paddingTop: "20px" }}
        >
          <LayoutCard />
          <LayoutCard />
          <LayoutCard />
          <LayoutCard />
          <LayoutCard />
          <LayoutCard />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default ConfigurationPage;
