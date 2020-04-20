import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// const drawerWidth = 240;

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "-webkit-fill-available",
    background: "red"
  },
  sidebar: {
    height: " 100%",
    "z-index": 1,
    "overflow-x": "hidden",
    textAlign: "center",
    borderRight: "1px solid black",
    marginRight: "5px"
  },
  section: {
    padding: "50px",
    height: "100px"
  },
  main: {
    width: "150px",
    "z-index": 1,
    "overflow-x": "hidden",
    padding: "8px 0",
    height: "auto"
  },
  linko: {
    fontSize: "100px",
    fontWeight: 500
  },
  list: {
    textAlign: "center",
    "&:hover": {
      background: "#4caf50"
    },
    fontSize: "100px",
    fontWeight: 400,
    borderBottom: "1px solid black"
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const items = [
    { name: "home", label: "Home" },
    { name: "billing", label: "Billing" },
    { name: "settings", label: "Settings" },
    { name: "settings", label: "Settings" },

    { name: "settings", label: "Settings" },
    { name: "settings", label: "Settings" },
    { name: "settings", label: "Settings" },
    { name: "settings", label: "Settings" },
    { name: "settings", label: "Settings" },
    { name: "settings", label: "Settings" }
  ];
  return (
    <div className={classes.sidebar} tabIndex="-1">
      <List disablePadding dense tabindex="-1">
        {items.map(({ label, name, ...rest }) => (
          <ListItem
            tabindex="-1"
            className={classes.list}
            key={name}
            button
            {...rest}
          >
            <ListItemText className={classes.linko} tabindex="-1">
              <p tabIndex="-1">{label}</p>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
