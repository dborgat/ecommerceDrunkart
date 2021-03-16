import React,  { useContext } from "react";
import { useInput } from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/reducers/userReducer";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../index";
import { log, success, error } from "../utils/logs";
import axios from 'axios';
import {
  Button,
  Avatar,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles/loginStyles";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import LoginError from "./LoginError";
import LoginSuccess from "./LoginSuccess";
import { auth } from "../firebase";


export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const email = useInput("email");
  const password = useInput("password");
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  //Firebase Login Auth
  // const login = e => {
  //   e.preventDefault();
  //   auth.signInWithEmailAndPassword(email.value, password.value)
  //   .then( auth => console.log("User Loged Firebase Auth"))
  //   .catch(e => console.log(e.message))
    
    
  // }

  const handleSubmit =  async(e) => {
    e.preventDefault();
    log("login attempt...");
    try {
      // POST user credentials
      const { data } = await axios.post("/api/user/login", {
        email: email.value,
        password: password.value,
      });
      // Set new state
      setUser(data);
      success(`logged user ${data.email}`);
      // Redirect to secret route!
      history.push("/");
    } catch ({ response }) {
      // something's not right...
      setUser({error:'not valid'})
      error(response.status, response.statusText);
    }
  };
  
    return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LocalBarIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              {...email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              {...password}
              autoComplete="current-password"
            />
            {user.error && user.error? <LoginError /> : null}
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/register" variant="body2">
                  {" "}
                  {/* ESTO SE CAMBIA PARA MANDAR MAIL ????*/}
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" className="text-reset">
                  Don't have an account? Register here
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
