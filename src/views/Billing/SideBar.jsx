import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: "-webkit-fill-available",
    "background": "red"

  },
  sidebar: {
    height:" 100%",
    "z-index": 1,
    "overflow-x": "hidden",
    textAlign: "center",
    borderRight: "1px solid black",
    marginRight: "5px"
  },
  section: {
    padding: "50px",
    height: "100px",
  },
  main: {
    width: "150px",
    "z-index": 1,
    "overflow-x": "hidden",
    padding: "8px 0",
    height: "auto",

  },
 linko: {
    fontSize: "100px",
    fontWeight: 500,

  },
  list:{
    textAlign: "center",
    '&:hover':{
      background: '#4caf50'
    },
    fontSize: "100px",
    fontWeight: 400,
    borderBottom: "1px solid black"
  },
 
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const items = [
    { name: 'home', label: 'Home' },
    { name: 'billing', label: 'Billing' },
    { name: 'settings', label: 'Settings' },
    { name: 'settings', label: 'Settings' },

    { name: 'settings', label: 'Settings' },
    { name: 'settings', label: 'Settings' },
    { name: 'settings', label: 'Settings' },
    { name: 'settings', label: 'Settings' },
    { name: 'settings', label: 'Settings' },
    { name: 'settings', label: 'Settings' },

  ]
  return (
    <div className={classes.sidebar} tabindex="-1"> 
    <List disablePadding dense tabindex="-1" >
      {items.map(({ label, name, ...rest }) => (
        <ListItem tabindex="-1" className={classes.list} key={name} button {...rest}>
          <ListItemText className={classes.linko} tabindex="-1">
            <p tabindex="-1">
            {label}
            </p>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  </div>
  );
}