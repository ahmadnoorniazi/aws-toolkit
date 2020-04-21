import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
// import { MyContext } from "../../stateContext";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  large: {
    width: 200,
    height: 200
  }
}));

export default function ImageAvatars() {
  const classes = useStyles();
  // const { user } = useContext(MyContext);
  // const image = (user && user.user && user.user.image) || "";

  return (
    <>
      <div className={classes.root}>
        <Avatar
          alt="Remy Sharp"
          src={`https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg`}
          className={classes.large}
        />
      </div>
      <h4 style={{ color: "#FFF", fontWeight: "bold", marginLeft: "10px" }}>
        {" Welcome, Muhammad Shafauullah"}
      </h4>
    </>
  );
}
