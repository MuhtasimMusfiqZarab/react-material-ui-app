import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

const Content = ({ exercises }) => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([exercise, exercises]) => (
            <Fragment>
              <Typography
                variant="body1"
                style={{ textTransform: "capitalize" }}
              >
                {exercise}
              </Typography>
              <List component="ul">
                {exercises.map(exercise => (
                  <ListItem button>
                    <ListItemText primary={exercise.title} />
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ))}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="display1">Welcome!</Typography>
          <Typography variant="subtitle1" style={{ marginTop: 20 }}>
            Please select an exercise from the list on the left.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Content;
