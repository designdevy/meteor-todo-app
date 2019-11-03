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

export default withStyles(styles)(function Mock3({ classes }) {
  return (
    <div>
      <TopMenu />
      <Grid container className={classes.root} spacing={2}>
        <LeftMenu />
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}>That is also not the page with ToDos!</Paper>
        </Grid>
      </Grid>
    </div>
  );
});