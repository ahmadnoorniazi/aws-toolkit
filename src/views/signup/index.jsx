import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Background from '../../assets/img/Sky.jpeg'
import SaveIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import Account from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import { Link } from 'react-router-dom'
import InputAdornment from '@material-ui/core/InputAdornment';
import FileUpload from 'components/uploadFile/index'
import { addRecord} from '../../utils/index'
import { withSnackbar } from 'notistack';

const api = 'http://localhost:3003/user/signup'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    textAlign: '-webkit-center',
  },
  image: {
    background: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: "200px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignInSide({enqueueSnackbar}) {

  const [files, setFiles] = useState([])
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [shopname, setShopName] = useState("")
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const classes = useStyles();

  const submitData = async () => {
    try {
      console.log('fileeeessss', files.length > 0 &&  files[0].getFileEncodeBase64String())

      let imageFormObj = new FormData();
      imageFormObj.append("firstname",firstname);
      imageFormObj.append("lastname", lastname);
      imageFormObj.append('email',email);
      imageFormObj.append("password",password);
      imageFormObj.append("shopname",shopname);
      imageFormObj.append("image", files[0].file);

      const response = await addRecord('signup',imageFormObj)
      enqueueSnackbar('Account Created Successfully', { 
        variant: 'success',
    })
    } catch (error) {
      enqueueSnackbar('Error While Creating Account', { 
        variant: 'Error',
    })
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={12} className={classes.image}>
      <Grid item xs={12} sm={8} md={5} style={{borderRadius: "12px"}} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5"> 
            Sign Up
          </Typography>
          <form className={classes.form}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              id="firstname"
              label="First Name"
              name="firstname"
              autoFocus
              InputProps={{
                startAdornment: <InputAdornment position="start"><Account style={{color:'#f50057'}}/></InputAdornment>,
              }}
            />
            <TextField
            margin="normal"
            required
            fullWidth
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            label="Last Name"
            name="lastname"
            autoFocus
            InputProps={{
              startAdornment: <InputAdornment position="start"><Account style={{color:'#f50057'}}/></InputAdornment>,
            }}
          />
          <TextField
          margin="normal"
          required
          fullWidth
          id="shopname"
          value={shopname}
          onChange={(e) => setShopName(e.target.value)}
          label="Shop Name"
          name="shopname"
          autoFocus
          InputProps={{
            startAdornment: <InputAdornment position="start"><Account style={{color:'#f50057'}}/></InputAdornment>,
          }}
        />
          <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          name="email"
          autoFocus
          InputProps={{
            startAdornment: <InputAdornment position="start"><Account style={{color:'#f50057'}}/></InputAdornment>,
          }}
        />
        <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              id="password"
              InputProps={{
                startAdornment: <InputAdornment position="start"><Lock style={{color:'#f50057'}} /></InputAdornment>,
              }}
            />
           <FileUpload files={files} setFiles={setFiles} />
            <Button
              type="button"
              onClick={submitData}
              fullWidth
              variant="contained"
              style={{backgroundColor: '#f50057', color: "#FFF", borderRadius: "50px"}}
              startIcon={<SaveIcon />}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid style={{marginTop:"20px", marginBottom: "20px"}} container>
              <Grid item xs>
                <Link  to="/login" style={{color: '#f50057' }} >
                  Login
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