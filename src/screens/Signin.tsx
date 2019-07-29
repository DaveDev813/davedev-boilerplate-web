import React, { ReactElement } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const SignIn: React.FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate={true}>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth={true}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus={true}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth={true}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Grid container={true} justify="space-between">
            <Grid item={true}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item={true}>
              <Grid container={true} spacing={1}>
                <Grid item={true}>
                  <Button
                    type="button"
                    fullWidth={true}
                    variant="contained"
                    color="secondary"
                  >
                    Sign up
                  </Button>
                </Grid>
                <Grid item={true}>
                  <Button
                    type="submit"
                    fullWidth={true}
                    variant="contained"
                    color="primary"
                  >
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
