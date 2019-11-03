import React from "react";
import TopMenu from "./TopMenu";
import LeftMenu from "./LeftMenu";
import { Grid, Paper } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  paper: { margin: "auto", padding: 20, maxWidth: 450 },
  root: {
    flexGrow: 1,
    padding: 25
  }
};

export default withStyles(styles)(function Mock2({ classes }) {
  return (
    <div>
      <TopMenu />
      <Grid container className={classes.root} spacing={2}>
        <LeftMenu />
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}>That's not the page you are looking for!</Paper>
        </Grid>
      </Grid>
    </div>
  );
});