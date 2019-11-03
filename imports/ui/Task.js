import React, { Component } from "react";
import { Tasks } from "../api/tasks.js";
import {
  Checkbox,
  ListItem,
  InputBase,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
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
    toggleChecked() {
      // Set the checked property to the opposite of its current value
      Tasks.update(this.props.task._id, {
        $set: { checked: !this.props.task.checked }
      });
    }

    deleteThisTask() {
      Tasks.remove(this.props.task._id);
    }

    render() {
      const { classes } = this.props

      return (
        <ListItem key={this.props.key} dense button onClick={this.toggleChecked.bind(this)}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple
              checked={!!this.props.task.checked}
            />
          </ListItemIcon>
          <form
            // onSubmit={handleEdit(id, toDos, titleEdited.title)}
            className={classes.form}
          >
            <InputBase
              name="title"
              value={this.props.task.text}
              // onChange={handleEditChange(id)}
            />
            {/* {titleEdited.id === id ? (
              <Button type="submit" color="primary" variant="outlined">
                Edit
              </Button>
            ) : (
              <p />
            )} */}
          </form>
          <ListItemSecondaryAction>
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
