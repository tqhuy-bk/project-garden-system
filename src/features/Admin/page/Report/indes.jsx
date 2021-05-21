import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

Report.propTypes = {
    
};

const useStyles = makeStyles((theme) => ({

    root: {
        marginTop: theme.spacing(4),
        marginLeft: '250px',
        maxWidth: 'calc(100% - 250px)',        
    },

    feedbackLeft: {},

    feedbackRight: {},

    feedbackItem: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: '25px',
        margin: 'auto',
        borderRadius: '3px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;'

    },

    feedbackName: {
        fontWeight: 'bold',
        fontSize: '1rem',
        color: 'rgb(102,112,126)'
    },

    feedbackDate: {
        color: 'rgb(190,194,201)',
        position: 'relative',
        paddingRight: '1rem',
        marginRight: '0.7rem',
        '&::after': {
            content: '""',
            color: 'rgb(190,194,201)',
            width: '0.3rem',
            height: '0.3rem',
            borderRadius: '50%',
            backgroundColor: '#bbb',
            position: 'absolute',
            bottom: '0',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)'
        }
    },


    feedbackInfo: {
        flex: '1 1 0',
        marginLeft: '1rem',
    },

    container: {
        marginBottom: '1.5rem',
        marginTop: '1rem',
    },

    feedbackTitle: {
        fontWeight: 'bold',
        marginTop: '1rem',
        position: 'relative',
    },

    feedbackImage: {
        borderRadius: '50%',
        objectFit: 'cover',
        display: 'block',
        width:'4rem',
        height: '4rem',
    },
    feedbackTime: {
        color: 'rgb(190,194,201)'
    },
    header: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingBottom: '0.5rem',
        marginBottom: '2rem',
        },
}))


function Report(props) {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Typography component="h2" variant="h5" className={classes.header}>PUBLIC REPORTS</Typography>
            <Grid container className={classes.container}>
            <Grid item lg={4} className={classes.feedbackItem}>
                    <Box> 
                    <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                       className={classes.feedbackImage}/>
                    </Box>
                <Box item className={classes.feedbackInfo}>
                    <Typography variant="body2" className={classes.feedbackName}>Chris Kruger</Typography>
                    <Typography variant="span" className={classes.feedbackDate}>08/22/2020</Typography>
                    <Typography component="span" className={classes.feedbackTime}>4:33 pm</Typography>
                </Box>
                <Box>
                <Typography component="body" className={classes.feedbackTitle}>Focus Time</Typography>
                    <Typography variant="body2" className={classes.feedbackDesc}>Hi guys, I would like to suggest that we set a fixed focus time within the company where you can work</Typography>
                </Box>
            </Grid>
            <Grid item lg={4} className={classes.feedbackItem} >
                    <Box> 
                    <img src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                       className={classes.feedbackImage}/>
                    </Box>
                    <Box item className={classes.feedbackInfo}>
                    <Typography variant="body2" className={classes.feedbackName}>Laura Schellen</Typography>
                    <Typography variant="span" className={classes.feedbackDate}>08/26/2020</Typography>
                    <Typography component="span" className={classes.feedbackTime}>2:46 pm</Typography>
                </Box>
                <Box>
                <Typography component="body" className={classes.feedbackTitle}>Coffee Machine Instructions</Typography>
                    <Typography variant="body2" className={classes.feedbackDesc}>I wanted to point out to you that in the future please make sure to keep the doors closed</Typography>
                </Box>
            </Grid>
            <Grid item lg={4} className={classes.feedbackItem} >
                    <Box> 
                    <img src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                       className={classes.feedbackImage}/>
                    </Box>
                 <Box item className={classes.feedbackInfo}>
                    <Typography variant="body2" className={classes.feedbackName}>Julian Herbst</Typography>
                    <Typography variant="span" className={classes.feedbackDate}>08/24/2020</Typography>
                    <Typography component="span" className={classes.feedbackTime}>10:33 am</Typography>
                </Box>
                <Box>
                <Typography component="body" className={classes.feedbackTitle}>Dog in the office</Typography>
                    <Typography variant="body2" className={classes.feedbackDesc}>Next week i will bring my dog Barker to the office. I've packed some treats in case you want to make friends</Typography>
                </Box>
            </Grid>
            </Grid>
            <Grid container className={classes.container}>
            <Grid item lg={4} className={classes.feedbackItem} >
                    <Box> 
                    <img src="https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                       className={classes.feedbackImage}/>
                    </Box>
                 <Box item className={classes.feedbackInfo}>
                    <Typography variant="body2" className={classes.feedbackName}>Laura Schllen</Typography>
                    <Typography variant="span" className={classes.feedbackDate}>08/21/2020</Typography>
                    <Typography component="span" className={classes.feedbackTime}>1:12 pm</Typography>
                </Box>
                <Box>
                <Typography component="body" className={classes.feedbackTitle}>Coffee Machine Instructions</Typography>
                    <Typography variant="body2" className={classes.feedbackDesc}>The coffee machine must be cleaned once a day. The cleaning tablets can be found in the drawer next to the mach</Typography>
                </Box>
            </Grid>
            <Grid item lg={4} className={classes.feedbackItem} >
                    <Box> 
                    <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                       className={classes.feedbackImage}/>
                    </Box>
                 <Box item className={classes.feedbackInfo}>
                    <Typography variant="body2" className={classes.feedbackName}>Lena Nattke</Typography>
                    <Typography variant="span" className={classes.feedbackDate}>08/20/2020</Typography>
                    <Typography component="span" className={classes.feedbackTime}>1:12 pm</Typography>
                </Box>
                <Box>
                <Typography component="body" className={classes.feedbackTitle}>Please close the door</Typography>
                    <Typography variant="body2" className={classes.feedbackDesc}>I wanted to point out to you that in the future please make sure to keep the doors closed</Typography>
                </Box>
            </Grid>
            <Grid item lg={4} className={classes.feedbackItem} >
                    <Box> 
                    <img src="https://images.unsplash.com/photo-1578616070222-50c4de9d5ade?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                       className={classes.feedbackImage}/>
                    </Box>
                 <Box item className={classes.feedbackInfo}>
                    <Typography variant="body2" className={classes.feedbackName}>Diana Palavandishvill</Typography>
                    <Typography variant="span" className={classes.feedbackDate}>08/18/2020</Typography>
                    <Typography component="span" className={classes.feedbackTime}>9:33 am</Typography>
                </Box>
                <Box>
                <Typography component="body" className={classes.feedbackTitle}>Focus Time</Typography>
                    <Typography variant="body2" className={classes.feedbackDesc}>Hi guys, I would like to suggest that we set a fixed focus time within the company where you can work</Typography>
                </Box>
            </Grid>
            </Grid>
           
               </Box>
    );
}

export default Report;