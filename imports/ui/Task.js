import React, { Component } from "react";
import { Tasks } from "../api/tasks.js";
import {
  Checkbox,
  ListItem,
  TextField,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
  Typography
} from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  paper: { margin: "auto", padding: 20, maxWidth: 450 },
  form: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-evenly"
  }
};

// Task component - represents a single todo item
export default withStyles(styles)(
  class Task extends Component {
    state = {
      titleEdited: this.props.task.text,
      edited: false
    };

    toggleChecked() {
      Tasks.update(this.props.task._id, {
        $set: { checked: !this.props.task.checked }
      });
    }

    deleteThisTask() {
      Tasks.remove(this.props.task._id);
    }

    handleStartEditing() {
      this.setState({ edited: true });
    }

    handleEditChange({ target: { value } }) {
      this.setState({ titleEdited: value });
    }

    handleEdit(e) {
      e.preventDefault();
      Tasks.update(this.props.task._id, {
        text: this.state.titleEdited
      });
      this.setState({ edited: false });
    }

    render() {
      const { classes, key, task } = this.props;

      return (
        <ListItem
          key={key}
          dense
          button
          onClick={this.toggleChecked.bind(this)}
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple
              checked={!!task.checked}
            />
          </ListItemIcon>
          {this.state.edited ? (
            <form
              onSubmit={this.handleEdit.bind(this)}
              className={classes.form}
            >
              <TextField
                name="title"
                value={this.state.titleEdited}
                onChange={this.handleEditChange.bind(this)}
              />
            </form>
          ) : (
            <Typography variant="subtitle1" gutterBottom>
              {this.props.task.text}
            </Typography>
          )}
          <ListItemSecondaryAction>
            <IconButton
              color="primary"
              edge="end"
              onClick={this.handleStartEditing.bind(this)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="primary"
              edge="end"
              onClick={this.deleteThisTask.bind(this)}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      );
    }
  }
);
