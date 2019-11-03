import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import App from "../imports/ui/App.js";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

Meteor.startup(() => {
  render(
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById("render-target")
  );
});
