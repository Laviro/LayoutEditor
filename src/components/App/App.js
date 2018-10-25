import React from "react";
import URI from "urijs";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Layout from "../Layout";
import Main from "../Main";

class App extends React.Component {
  componentDidMount() {
    const path = new URI().pathname() === "/" ? "layout" : "configuration";
    this.props.updateRoute(path);
  }
  render() {
    const theme = createMuiTheme({
      typography: {
        useNextVariants: true
      }
    });
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="stretch"
            >
              <Grid key={"layout"} item>
                <Layout />
              </Grid>
              <Grid key={"main"} item>
                <Main />
              </Grid>
            </Grid>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
