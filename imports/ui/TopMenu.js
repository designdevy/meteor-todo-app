import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import MenuIcon from "@material-ui/icons/Menu";
import { Typography, IconButton, AppBar, Toolbar } from "@material-ui/core";
import { MenuOpen } from "../api/menu.js";

class TopMenu extends React.Component {
  handleOpeningMenu() {
    MenuOpen.update(this.props.menu._id, {
      menuOpen: !this.props.menu.menuOpen
    });
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={this.handleOpeningMenu.bind(this)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Application for DUODEKA</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withTracker(() => {
  return {
    menu: MenuOpen.find({}).fetch()[0]
  };
})(TopMenu);
