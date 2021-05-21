import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { AppBar, Box, Button, ButtonGroup, Card, CardContent, Container, IconButton, Toolbar, Typography } from '@material-ui/core';
import { CameraAltOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  toolbar: {
    // justifyContent: 'space-between'
  },

  appbar: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.success.dark
  },

  buttonGroup: {
    marginLeft: 'auto',
    "& > *": {
      marginRight: '1rem'
    }
  },

  heading: {
    fontSize: '1rem',
    marginLeft: '4rem'
  },

  title: {
    color: 'red'
  },

  desc: {
    margin: '2rem 0 3rem'
  },

  buttonGroupheader: {
    marginBottom: '2rem',
    '& > *:first-child': {
      marginRight: '4rem'
    }
  },

  container: {
    backgroundColor: 'black',
    marginTop: '2rem'
  },

  paper: {
    height: '100%',
    padding: theme.spacing(2)
  },

  img: {
    display: 'block',
    width: '100%',
    height: '100%'
  }

}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <CameraAltOutlined/>
        </IconButton>
        <Typography component="div" className={classes.heading}>
          Album layout
        </Typography>
        <ButtonGroup className={classes.buttonGroup}>
          <Button variant="contained" size="medium" color="secondary">Sign up</Button>
          <Button variant="outlined" color="inherit" >Sign in</Button>
        </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Box bgcolor="#ccc">
        <Box maxWidth="520px" mx="auto" textAlign="center" color="white" >
        <Typography variant="h2">
        Album layout
      </Typography>
      <Typography className={classes.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex consequatur aliquam, laudantium perferendis adipisci consequuntur molestias explicabo ea suscipit voluptate dolore magnam expedita omnis quae nisi itaque, beatae tempore nesciunt?
      </Typography>
      <ButtonGroup className={classes.buttonGroupheader}> 
        <Button variant="contained" color="primary">MAIN CALL TO ACTION</Button>
        <Button variant="outlined" color="secondary">SECONDARY ACTION</Button>
      </ButtonGroup>
        </Box>
      </Box>

      <Container className={classes.container} maxWidth="md">
        <Grid container xs={12} spacing={2} alignItems="stretch">
          <Grid item xs={6} sm={4} md={3}>
            <Paper elevation={0} className={classes.paper}>
              <Card>
                <CardContent>
                  Heading
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Paper elevation={0} className={classes.paper}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae debitis, temporibus possimus explicabo velit sint iste cupiditate ab consequatur, quia fugiat eveniet. Deserunt dolores itaque voluptate, sed nobis veritatis quisquam.</Paper>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Paper elevation={0} className={classes.paper}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta rem animi doloribus totam, rerum amet, obcaecati eaque consequuntur saepe nesciunt voluptas voluptatem itaque? Facere explicabo vel tenetur ratione temporibus!</Paper>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Paper elevation={0} className={classes.paper}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorem est possimus et reprehenderit officia enim obcaecati, ratione officiis temporibus voluptatem culpa laboriosam a! Ab hic eum doloribus laudantium quas.</Paper>
          </Grid>
          <Grid item xs={6} sm={4} md={6}>
            <Paper elevation={0} className={classes.paper}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore neque beatae sint repudiandae at laudantium architecto, recusandae corporis, adipisci sequi id sapiente unde eum cum reprehenderit repellat quos debitis doloribus?</Paper>
          </Grid>
          <Grid item xs={6} sm={4} md={12} container>
              <Grid item md={6}>
              <img src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""  className={classes.img}/>
              </Grid>
                <Grid item md={6} container>
                  <Grid item container md={3} direction="column" justify="space-between">
                    <Grid item>
                    <Paper>
                    <Typography>Hello</Typography>
                    <Typography>What are you doding</Typography>
                    <Typography>ID: 1812496</Typography>
                    </Paper>
                    </Grid>
                    <Grid item>
                    <Paper>
                    <Button variant="contained" color ="primary">Submit</Button>
                    </Paper>
                  </Grid>
                </Grid>
                <Grid item md>
                    <Paper>123</Paper>
                </Grid>
                </Grid>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}
