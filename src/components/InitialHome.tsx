import React, { ReactElement } from 'react';
import { makeStyles, Typography, Grid, Avatar, Link } from '@material-ui/core';
import './css/initialHomeStyle.css';
import avatarImg from './images/avatar.jpeg';

const useStyles = makeStyles({
  bg: {
    minWidth: '100vw',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #4e4376, #2b5876);',
    padding: '5%',
  },
  header: {
    color: '#87ccde',
    fontWeight: 'bold',
  },
  avatar: {
    width: '80px',
    height: '80px',
    marginBottom: '2em',
  },
});

const InitialHome: React.FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <Grid
        container={true}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Grid item={true} sm={12}>
          <Avatar
            alt="Rodave Bobadilla"
            src={avatarImg}
            className={classes.avatar}
          />
        </Grid>
        <Grid item={true} sm={12}>
          <Typography
            className={classes.header}
            variant="h2"
            component="h1"
            gutterBottom={true}
          >
            <Link
              href="https://github.com/DaveDev813/davedev-boilerplate-web"
              className={classes.header}
            >
              DaveDev Boilerplate Template
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <div className="logo">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default InitialHome;
