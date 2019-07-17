import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

const Footer = ({ muscles, handleChange, catagory }) => {
  //getting index according to catagory
  const index = catagory ? muscles.findIndex(cat => cat === catagory) + 1 : 0;

  //if we select a tab
  const onIndexSelect = (e, index) => {
    handleChange(index === 0 ? "" : muscles[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(muscle => (
          <Tab label={muscle} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default Footer;
