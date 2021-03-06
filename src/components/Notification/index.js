// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { useCallback } from "react";
// import Button from "@material-ui/core/Button";
// import Snackbar from "@material-ui/core/Snackbar";
// import Slide from "@material-ui/core/Slide";
// import MuiAlert from "@material-ui/lab/Alert";
// import { makeStyles } from "@material-ui/core/styles";

// function Alert(props) {
//   return (
//     <MuiAlert
//       style={{ top: 60, right: 0, position: "fixed" }}
//       elevation={6}
//       variant="filled"
//       {...props}
//     />
//   );
// }

// const useStyles = makeStyles(() => ({
//   root: {
//     width: "100%",
//     "& > * + *": {}
//   },
//   alert: {
//     left: "auto",
//     top: 20,
//     right: 40,
//     bottom: "auto",
//     position: "fixed",
//     transform: "none"
//   }
// }));

// export default function DirectionSnackbar({ open, setOpen, message }) {
//   const [transition, setTransition] = React.useState(undefined);

//   const handleClose = useCallback(
//     () => {
//       if (open) {
//         setOpen(false);
//       }
//     },
//     [open],
//     setOpen
//   );

//   const classes = useStyles();

//   return (
//     <div>
//       <Snackbar
//         className={classes.alert}
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={() => (
//           <Alert onClose={handleClose} severity="success">
//             {message}
//           </Alert>
//         )}
//         message="I love snacks"
//       />
//     </div>
//   );
// }
