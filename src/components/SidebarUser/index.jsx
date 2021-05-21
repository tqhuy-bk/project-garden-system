import { ListItemIcon } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DeckIcon from '@material-ui/icons/Deck';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Link } from 'react-router-dom';
import AvatarImg from "../../asset/image/avatar.png";
import './styles.scss';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'black'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: 'white'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'white',
    padding: '0'

  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
    color: 'black'
  },
  link: {
      textDecoration: 'none',
      color: 'black',
      fontSize: '1rem'
  },
  text: {
      fontSize: '5rem'
  },
  card: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: '-1.5rem',
      alignItems: 'flex-start'
  },
  listItem: {
    borderRight: '2px solid transparent',
    "&:hover": {
      borderRightColor: 'blue'
    }
  },
  list: {
    // marginTop: "auto",
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    "& > *:first-child": {
      marginTop: '3rem'
    },
    "& > *:last-child": {
      marginTop: 'auto'
    }
  },
  divider: {
    margin: '4rem 0 3rem'
  },
  img: {
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    marginLeft: '50%',
    transform: 'translateX(-25%)'
  },
  heading: {
    textDecoration: 'none',
    fontSize: '1.5rem',
    // backgroundImage: "linear-gradient(.5turn, #485563, #29323c)",
    // backgroundImage: "linear-gradient(180deg, rgba(145, 202, 248, 0) 12.81%, rgba(145, 202, 248, 0.25) 67.16%, #91CAF8 141.2%)",
    backgroundImage: "linear-gradient(.5turn, #00b4db, #0083b0)",
    '&::-webkit-background-clip': 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginLeft: '2rem'
},
  listIcon: {
    
  }
}));

export default function SideBarUser() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <div className="icon-header" >
            <h3 className="icon-heading">
                <Link to="/" className={classes.heading}>SMART GARDEN</Link>
            </h3>
            <div className="icon-list">
              <div className="icon-item">
                 <SearchIcon/>
              </div>
              <div className="icon-item">
                 <NotificationsActiveIcon/>
              </div>
              <div className="icon-item">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" className="icon-img" />
              </div>
            </div>
      </div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        <img src={AvatarImg} alt=""
          className={classes.img} />
        </div>
        <List className={classes.list}>
            <div>
            <ListItem className={classes.listItem}>
              <ListItemIcon><HomeIcon/> </ListItemIcon>
              <Link to="/user/home" className={classes.link} >
              <ListItemText primary="Home" className={classes.text}/>
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
            <ListItemIcon><InfoIcon/> </ListItemIcon>
              <Link to="/user/info" className={classes.link} >
              <ListItemText primary="About" className={classes.text}/>
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
            <ListItemIcon><DeckIcon/> </ListItemIcon>
              <Link to="/user/garden" className={classes.link} >
              <ListItemText primary="My garden" className={classes.text}/>
              </Link>
            </ListItem>
            </div>
            <div>
            <ListItem className={classes.listItem}>
            <ListItemIcon><DeckIcon/> </ListItemIcon>
              <Link to="/user/setting" className={classes.link} >
              <ListItemText primary="Settings" className={classes.text}/>
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
            <ListItemIcon><ExitToAppIcon/> </ListItemIcon>
              <Link to="/logout" className={classes.link} >
              <ListItemText primary="Logout" className={classes.text}/>
              </Link>
            </ListItem>
            </div>
           
        </List>
      </Drawer>
      </div>
  );
}
