/* eslint-disable react/prop-types */
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  search: {
    height: "50px",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    },
    marginTop: "100px"
  },
  searchIcon: {
    width: theme.spacing(7),
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));
const SearchInput = ({ value, handleFilter }) => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={value}
          onChange={handleFilter}
          startAdornment={<SearchIcon />}
          labelWidth={60}
        />
      </FormControl>
    </div>
  );
};
// <div className={classes.search}>
//   <SearchIcon />
//   <TextField
//     id='outlined-full-width'
//     label='Label'
//     style={{ marginRight: 60, marginTop: 100, width: '100%' }}
//     placeholder='Placeholder'
//     helperText='Full width!'
//     fullWidth
//     margin='normal'
//     InputLabelProps={{
//       shrink: true
//     }}
//     variant='outlined'
//   />
// </div>
export default SearchInput;
// <div className={classes.search}>
//       <div className={classes.searchIcon}>
//         <SearchIcon />
//       </div>
//       <InputBase
//         placeholder='Search…'
//         classes={{
//           root: classes.inputRoot,
//           input: classes.inputInput
//         }}
//         inputProps={{ 'aria-label': 'search' }}
//       />
//     </div>
