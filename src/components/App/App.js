import React from "react";
import URI from "urijs";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "../Header";
import Main from "../Main";
import "./app.scss";

class App extends React.Component {
  componentDidMount() {
    let path = new URI().pathname().split("/")[1];
    if (path === "") {
      path = "layout";
    }
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
              <Grid key={"header"} item>
                <Header />
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
