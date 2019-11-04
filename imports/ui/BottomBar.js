import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  appBar: {
    top: 'auto',
    bottom: 0,
  },
}

export default withStyles(styles)(function BottomBar(props) {
  const { classes } = props;
  return (
    <AppBar
      position="fixed"
      color="primary"
      className={classes.appBar}
    >
      <Typography variant="subtitle1" align="center">Made by Nataliia Evchenko</Typography>
    </AppBar>
  );
});