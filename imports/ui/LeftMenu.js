import React from "react";
import { Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { withTracker } from "meteor/react-meteor-data";
import { Link } from "react-router-dom";
import { MenuOpen } from "../api/menu.js";

const styles = {
  button: {
    margin: 10,
    width: "100%"
  },
  menu: {
    display: "flex",
    flexDirection: "column"
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
};

  class LeftMenu extends React.Component {

    render() {
      const { classes } = this.props;

      if (this.props.menu && this.props.menu.menuOpen) {
        return (
          <Grid item xs={12} sm={3} className={classes.menu}>
            <Link to="/" className={classes.link}>
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
              >
                Page 1
              </Button>
            </Link>
            <Link to="/mock2" className={classes.link}>
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
              >
                Page 2
              </Button>
            </Link>
            <Link to="/mock3" className={classes.link}>
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
              >
                Page 3
              </Button>
            </Link>
            <Link to="/todo" className={classes.link}>
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
              >
                TODO
              </Button>
            </Link>
          </Grid>
        );
      } else {
        return <p />;
      }
    }
  }

export default withStyles(styles)(withTracker(() => {
  return {
    menu: MenuOpen.find({}).fetch()[0]
  };
})(LeftMenu))
