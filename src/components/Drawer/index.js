import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  list: {
    width: 250,
    textDecoration: "none"
  },
  fullList: {
    width: "auto"
  },
  link: {
    textDecoration: "unset"
  }
};

const AppDrawer = ({ classes, updateRoute, toggleDrawer, open }) => {
  const sideList = (
    <div className={classes.list}>
      <List>
        <Link className={classes.link} to="/">
          <ListItem button key={"Layout"} onClick={() => updateRoute("layout")}>
            <ListItemText primary={"Layout"} />
          </ListItem>
        </Link>
        <Link className={classes.link} to="/configuration">
          <ListItem
            button
            key={"Configuration"}
            onClick={() => updateRoute("configuration")}
          >
            <ListItemText primary={"Configuration"} />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <Drawer open={open} onClose={toggleDrawer}>
      <div
        tabIndex={0}
        role="button"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        {sideList}
      </div>
    </Drawer>
  );
};

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppDrawer);
