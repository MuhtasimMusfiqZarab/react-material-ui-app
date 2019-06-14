import React from "react";
import { Grid } from "@material-ui/core";
import LeftPanel from "./Layout/LeftPanel";
import RightPanel from "./Layout/LeftPanel";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

const Content = () => {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPanel styles={styles} />
      </Grid>
      <Grid item sm>
        <RightPanel styles={styles} />
      </Grid>
    </Grid>
  );
};

export default Content;
