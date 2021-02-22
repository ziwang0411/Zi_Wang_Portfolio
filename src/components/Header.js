import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import CodeIcon from "@material-ui/icons/Code";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Grid from "@material-ui/core/Grid";

import { grey, blue, red } from "@material-ui/core/colors";

import { urls } from "../routes";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: blue[200],
    color: "#263238",
    maxWidth: "100%",
  },
}));

export default function SimpleTabs(props) {
  console.log(props);
  const classes = useStyles(props.theme);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.history.replace(urls[newValue]);
  };

  return (
    <Grid item xs={12}>
      <AppBar position="static" className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Navigation Tabs"
        >
          <Tab
            label="Home"
            {...a11yProps(0)}
            icon={<HomeOutlinedIcon fontSize="small" />}
          />
          <Tab
            label="Projects"
            {...a11yProps(1)}
            icon={<FolderOpenIcon fontSize="small" />}
          />
          <Tab
            label="Skills"
            {...a11yProps(2)}
            icon={<CodeIcon fontSize="small" />}
          />
          <Tab
            label="Contact"
            {...a11yProps(3)}
            icon={<MailOutlineIcon fontSize="small" />}
          />
        </Tabs>
      </AppBar>
    </Grid>
  );
}
