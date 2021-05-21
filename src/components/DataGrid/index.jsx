import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

    root: {
        marginTop: theme.spacing(4),
        marginLeft: '270px',
        maxWidth: 'calc(100% - 300px)',        
    },

    feedbackItem: {
        display: 'flex',
        alignItems: 'center',

    },

    feedbackName: {
        fontSize: '1rem',
    },

    container: {
        padding: '1rem',
        marginBottom: '1.5rem',
        marginTop: '1rem',
        alignItems: 'center',
        backgroundColor: 'rgba(176,180,192, 0.5)',

    },

    feedbackTitle: {
        fontWeight: 'bold',
        fontSize: '1rem'
    },

    feedbackImage: {
        borderRadius: '50%',
        objectFit: 'cover',
        display: 'block',
        width:'2rem',
        height: '2rem',
        marginRight: '2.5rem'
    },

    header: {
        fontWeight: 'bold',
        fontSize: '2rem',
        textTransform: 'uppercase',
        },

    headerTable: {
        fontWeight: 'bold'
    },

    special: {
        marginBottom: '1.5rem',
        marginTop: '1rem',
        alignItems: 'center',    
        padding: '1rem',
        borderRadius: '10px'
    },

    desc: {
        fontSize: '0.8rem',
        marginBottom: '5rem'
    }
}))

export default function DataGridComponent() {
    const classes = useStyles()

  return (
    <Box className={classes.root}>
            <Typography component="h2" variant="h5" className={classes.header}>CUSTOMERS</Typography>
            <Typography component="h2" variant="h6" className={classes.desc}>Customer information</Typography>
            <Grid container className={classes.container}>
            <Grid item lg={3}>
                    <Typography component="span" className={classes.headerTable}>Name</Typography>
            </Grid>
            <Grid item lg={3} >
                <Typography component="body" className={classes.headerTable}>Email</Typography>
            </Grid>
            <Grid item lg={3} >
                    <Typography component="span" className={classes.headerTable}>Phone number</Typography>
            </Grid>
            <Grid item lg={3} >
                
                    <Typography component="span" className={classes.headerTable}>Acion</Typography>
            </Grid>
            </Grid>
            <Grid container className={classes.special}>
            <Grid item lg={3} className={classes.feedbackItem}>
                    <img src="https://images.unsplash.com/photo-1578616070222-50c4de9d5ade?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                       className={classes.feedbackImage}/>
                    <Typography variant="body2" className={classes.feedbackTitle}>Blossom Avena</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>Smanth@gmail.com</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>0905683258</Typography>
            </Grid>
            <Grid item lg={3}>
            <Button variant="contained" color="primary" disableElevation>
      Details
    </Button>

            </Grid>
            </Grid>
            <Grid container className={classes.special}>
            <Grid item lg={3} className={classes.feedbackItem}>
                    <img src="https://images.unsplash.com/photo-1514315384763-ba401779410f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                       className={classes.feedbackImage}/>
                    <Typography variant="body2" className={classes.feedbackTitle}>Blossom Avena</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>Smanth@gmail.com</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>0905683258</Typography>
            </Grid>
            <Grid item lg={3}>
                     <Button variant="contained" color="primary" disableElevation>
      Details
    </Button>
            </Grid>
            </Grid>
            <Grid container className={classes.special}>
            <Grid item lg={3} className={classes.feedbackItem}>
                    <img src="https://images.unsplash.com/flagged/photo-1574874897534-036671407eda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                       className={classes.feedbackImage}/>
                    <Typography variant="body2" className={classes.feedbackTitle}>Blossom Avena</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>Smanth@gmail.com</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>0905683258</Typography>
            </Grid>
            <Grid item lg={3}>
                     <Button variant="contained" color="primary" disableElevation>
      Details
    </Button>
            </Grid>
            </Grid>
            <Grid container className={classes.special}>
            <Grid item lg={3} className={classes.feedbackItem}>
                    <img src="https://images.unsplash.com/photo-1599842057874-37393e9342df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                       className={classes.feedbackImage}/>
                    <Typography variant="body2" className={classes.feedbackTitle}>Blossom Avena</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>Smanth@gmail.com</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>0905683258</Typography>
            </Grid>
            <Grid item lg={3}>
                     <Button variant="contained" color="primary" disableElevation>
      Details
    </Button>
            </Grid>
            </Grid>
            <Grid container className={classes.special}>
            <Grid item lg={3} className={classes.feedbackItem}>
                    <img src="https://images.unsplash.com/photo-1567784177951-6fa58317e16b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                       className={classes.feedbackImage}/>
                    <Typography variant="body2" className={classes.feedbackTitle}>Blossom Avena</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>Smanth@gmail.com</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>0905683258</Typography>
            </Grid>
            <Grid item lg={3}>
                     <Button variant="contained" color="primary" disableElevation>
      Details
    </Button>
            </Grid>
            </Grid>
            <Grid container className={classes.special}>
            <Grid item lg={3} className={classes.feedbackItem}>
                    <img src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                       className={classes.feedbackImage}/>
                    <Typography variant="body2" className={classes.feedbackTitle}>Blossom Avena</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>Smanth@gmail.com</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>0905683258</Typography>
            </Grid>
            <Grid item lg={3}>
                     <Button variant="contained" color="primary" disableElevation>
      Details
    </Button>
            </Grid>
            </Grid>
            <Grid container className={classes.special}>
            <Grid item lg={3} className={classes.feedbackItem}>
                    <img src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                       className={classes.feedbackImage}/>
                    <Typography variant="body2" className={classes.feedbackTitle}>Blossom Avena</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>Smanth@gmail.com</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>0905683258</Typography>
            </Grid>
            <Grid item lg={3}>
                     <Button variant="contained" color="primary" disableElevation>
      Details
    </Button>
            </Grid>
            </Grid>
            <Grid container className={classes.special}>
            <Grid item lg={3} className={classes.feedbackItem}>
                    <img src="https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                       className={classes.feedbackImage}/>
                    <Typography variant="body2" className={classes.feedbackTitle}>Blossom Avena</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>Smanth@gmail.com</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>0905683258</Typography>
            </Grid>
            <Grid item lg={3}>
                     <Button variant="contained" color="primary" disableElevation>
      Details
    </Button>
            </Grid>
            </Grid>
            <Grid container className={classes.special}>
            <Grid item lg={3} className={classes.feedbackItem}>
                    <img src="https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                       className={classes.feedbackImage}/>
                    <Typography variant="body2" className={classes.feedbackTitle}>Blossom Avena</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>Smanth@gmail.com</Typography>
            </Grid>
            <Grid item lg={3}>
                    <Typography variant="body2" className={classes.feedbackName}>0905683258</Typography>
            </Grid>
            <Grid item lg={3}>
                     <Button variant="contained" color="primary" disableElevation>
      Details
    </Button>
            </Grid>
            </Grid>
               </Box>

  );
}