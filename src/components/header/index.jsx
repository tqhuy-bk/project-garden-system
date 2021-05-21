import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from "react-router-dom";

Header.propTypes = {
    
};

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
  }));




  
function Header(props) {
    const classes = useStyles();
    // const check = localStorage.getItem('user')
    // const handleOnClickLogout = () => {
    //   const history = useHistory()
    //   localStorage.clear()
    //   history.push("/login")
    // }
  
      
    return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>SMART GARDEN</Link>
          </Typography>
            <Button >
            <Link to="/signup" className={classes.link}>SIGN UP</Link>
        </Button>
        <Button >
            <Link to="/login" className={classes.link}>LOGIN</Link>
        </Button>

        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header;