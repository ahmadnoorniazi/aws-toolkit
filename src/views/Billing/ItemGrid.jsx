import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  paper: {
    // padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grids: {
    '&:hover':{
      border: '2px solid black'
    },
    
  },
  wrapper:{
    background: "none",
    color: "inherit",
    border: "none",
    padding: 0,
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
  }
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid className={classes.grids} item xs={2} onClick={() => console.log('clickeddd')} tabIndex="0">
        <Paper className={classes.paper}>
        <button className={classes.wrapper} />

        item
        </Paper>

        </Grid>

        <Grid className={classes.grids} item >
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid className={classes.grids} item xs={2} >
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid className={classes.grids} item xs={2} >
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={2}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
      <Grid item xs={2}>
      <Paper className={classes.paper}>item</Paper>
    </Grid>
    <Grid item xs={2}>
    <Paper className={classes.paper}>item</Paper>
  </Grid>
  <Grid item xs={2}>
  <Paper className={classes.paper}>item</Paper>
</Grid>
<Grid item xs={2}>
<Paper className={classes.paper}>item</Paper>
</Grid>
<Grid item xs={2}>
<Paper className={classes.paper}>item</Paper>
</Grid>
<Grid item xs={2}>
<Paper className={classes.paper}>item</Paper>
</Grid>
<Grid item xs={2}>
<Paper className={classes.paper}>item</Paper>
</Grid>
<Grid item xs={2}>
<Paper className={classes.paper}>item</Paper>
</Grid>
<Grid item xs={2}>
<Paper className={classes.paper}>item</Paper>
</Grid>
<Grid item xs={2}>
<Paper className={classes.paper}>item</Paper>
</Grid>
<Grid item xs={2}>
<Paper className={classes.paper}>item</Paper>
</Grid>
<Grid item xs={2}>
<Paper className={classes.paper}>item</Paper>
</Grid>
<Grid item xs={2}>
<Paper className={classes.paper}>item</Paper>
</Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={12}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}