import React, { useState } from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import { urls } from "../routes";
import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Home from "./Home";
import "./App.css";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey, blue, red } from "@material-ui/core/colors";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[200],
    },
    secondary: {
      main: red[500],
    },
  },
});
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    height: "100%",
    background: "linear-gradient(#bbdefb, #9198e5);",
    padding: "0 5px",
    maxWidth: "100%",
  },
  footer: {
    padding: "2%",
    marginTop: "auto",
    marginLeft: "auto",
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Container className={classes.root}>
          <Router history={history}>
            <Header history={history} />
            <Route path={urls[0]} exact component={Home} />
            <Route path={urls[1]} exact component={Projects} />
            <Route path={urls[2]} exact component={Skills} />
            <Route path={urls[3]} exact component={Contact} />

            <footer className={classes.footer}>
              <Footer />
            </footer>
          </Router>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
