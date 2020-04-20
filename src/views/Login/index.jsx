import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Background from "../../assets/img/Sky.jpeg";
import SaveIcon from "@material-ui/icons/SupervisedUserCircleSharp";
import Account from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";
import { addRecord } from "../../utils/index";
import { MyContext } from "../../stateContext";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withSnackbar } from "notistack";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    textAlign: "-webkit-center"
  },
  image: {
    background: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "200px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

// eslint-disable-next-line react/prop-types
function SignInSide({ enqueueSnackbar }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const { setUser } = useContext(MyContext);

  const checkUser = async () => {
    try {
      const userDetails = await addRecord("signin", { email, password });
      setUser(userDetails.data);
      enqueueSnackbar("Loged In Successfully", {
        variant: "success"
      });
      setIsLogin(true);
    } catch (error) {
      enqueueSnackbar("Wrong email & password", {
        variant: "error"
      });
    }
  };

  if (isLogin) {
    return <Redirect to="admin/dashboard" />;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={12} className={classes.image}>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          style={{ borderRadius: "12px" }}
          component={Paper}
          elevation={6}
          square
        >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form}>
              <TextField
                margin="normal"
                required
                fullWidth
                value={email}
                onChange={e => setEmail(e.target.value)}
                id="email"
                label="Email"
                name="email"
                autoFocus
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Account style={{ color: "#f50057" }} />
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={password}
                onChange={e => setPassword(e.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock style={{ color: "#f50057" }} />
                    </InputAdornment>
                  )
                }}
              />

              <Button
                type="button"
                fullWidth
                onClick={checkUser}
                variant="contained"
                style={{
                  backgroundColor: "#f50057",
                  color: "#FFF",
                  borderRadius: "50px"
                }}
                startIcon={<SaveIcon />}
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid
                style={{ marginTop: "20px", marginBottom: "20px" }}
                container
              >
                <Grid item xs>
                  <Link to="/forgot-password" style={{ color: "#f50057" }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" style={{ color: "#f50057" }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withSnackbar(SignInSide);
