import React from "react";
import TopMenu from "./TopMenu";
import LeftMenu from "./LeftMenu";
import BottomBar from "./BottomBar";
import { Grid, Paper, Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  paper: { margin: "auto", padding: 20, maxWidth: 550 },
  root: {
    flexGrow: 1,
    padding: 25
  },
  image: {width: "100%", marginBottom: 15}
};

export default withStyles(styles)(function Mock({ classes }) {
  return (
    <div>
      <TopMenu />
      <Grid container className={classes.root} spacing={2}>
        <LeftMenu />
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>
          <img className={classes.image} src="https://cdn.pixabay.com/photo/2017/06/05/10/15/landscape-2373649_960_720.jpg" alt="mountains" />
            <Typography variant="h4" align="center" gutterBottom>
              Welkom to the application!
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Cras mattis consectetur purus
              sit amet fermentum.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <BottomBar />
    </div>
  );
});
