import React from 'react';
import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import { Face } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

CustomerDetail.propTypes = {
    
};


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f4f5f7'
    },
    link: {
        textDecoration: 'none',
        padding: '0.8rem 1.5rem',
        fontSize: '1rem',
        color: 'white',
        borderRadius: '1rem',
        "&:last-child": {
            backgroundColor: 'blue',
        },
        "&:first-child": {
            color: 'blue',
        }
    },
    button: {
        textDecoration: 'none',
        color: 'white',
        padding: '10px 78px',
        backgroundColor: '#DE4C73',
        borderRadius: '0.5rem',
        fontSize: '14px',
        "&:hover": {
            textDecoration: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            color: 'red'
        }
    },
    feedback: {
        paddingTop: theme.spacing(4),
        maxWidth: '1000px',
        marginLeft: '250px',
    },

    feedbackLeft: {},

    feedbackRight: {},

    feedbackItem: {
        display: 'flex',
        padding: '1rem 5rems'
    },

    feedbackName: {
        fontWeight: 'bold',
        fontSize: '1rem'
    },

    feedbackJob: {
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem',
        fontSize: '1.5rem',
    },


    feedbackInfo: {
        flex: '1 1 0',
        marginLeft: '1rem',
    },

    container: {
        marginBottom: '1.5rem',
        marginTop: '3rem',
    },


    feedbackDesc: {
        
    },

    feedbackImage: {
        objectFit: 'cover',
        width: '15rem',
        height: '15rem',
        borderRadius: '50%',
        display: 'block'
    },
    header: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        // "&::after": {
        //     content: '""',
        //     width: "4.1%",
        //     borderRadius: '2rem',
        //     height: "5px",
        //     backgroundColor: '#DE4C73',
        //     position: 'absolute',
        //     bottom: '0',
        //     left: '50%',
        //     transform: 'translateX(-50%)'
        // }
    },
    desc: {
        fontSize: '1rem',
        },

    customerName: {
        marginTop: '1.5rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    iconList: {
        marginTop: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center'
    },

    iconItem: {
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '50%',
        backgroundColor: '#DE4C73',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "&:not(:last-child)": {
            marginRight: '0.5rem'
        }
    },

    image: {
        padding: '0 2rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    heading: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    rightHeader: {
        padding: '0 2.5rem'
    }


    
}))

function CustomerDetail(props) {
    const classes =useStyles()
    return (
        <Box className={classes.root}>
        <Container className={classes.feedback} >
            <Box className={classes.heading}>
                <Box className={classes.leftHeader}>
                <Typography  className={classes.header}>VIEW CUSTOMER</Typography>
                <Typography  className={classes.desc}>View and edit customer details</Typography>
                </Box>
                <Button variant="contained" color="primary" className={classes.rightHeader}>
                Edit
                </Button>
            </Box>

    
            <Grid container className={classes.container}>
            <Grid item lg={4} >
                <Box className={classes.image}> 
                    <img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                      className={classes.feedbackImage}/>
                </Box>
                <Typography className={classes.customerName}>Nora Freeman</Typography>
                <Box className={classes.iconList}>
                    <Box className={classes.iconItem}>
                    <EmailIcon />
                    </Box>
                    <Box className={classes.iconItem}>
                    <InstagramIcon/>
                    </Box>
                    <Box className={classes.iconItem}>
                    <FacebookIcon />
                    </Box>
                </Box>
            </Grid>


            <Grid item lg={4} className={classes.feedbackItem} >
            <Box item className={classes.feedbackInfo}>
                    <Typography variant="body2" className={classes.feedbackName}>Customer Code</Typography>
                    <Typography variant="body2" className={classes.feedbackJob}>160071329294</Typography>
                    <Typography variant="body2" className={classes.feedbackName}>Phone Number</Typography>
                    <Typography variant="body2" className={classes.feedbackJob}>090568358</Typography>
                    <Typography variant="body2" className={classes.feedbackName}>Birth of Date</Typography>
                    <Typography variant="body2" className={classes.feedbackJob}>14.04.2000</Typography>
            </Box>
            </Grid>
            <Grid item lg={4} className={classes.feedbackItem} >
            <Box item className={classes.feedbackInfo}>
                    <Typography variant="body2" className={classes.feedbackName}>Customer Code</Typography>
                    <Typography variant="body2" className={classes.feedbackJob}>160071329294</Typography>
                    <Typography variant="body2" className={classes.feedbackName}>Phone Number</Typography>
                    <Typography variant="body2" className={classes.feedbackJob}>090568358</Typography>
                    <Typography variant="body2" className={classes.feedbackName}>Birth of Date</Typography>
                    <Typography variant="body2" className={classes.feedbackJob}>14.04.2000</Typography>
            </Box>
            </Grid>
            </Grid>
        </Container>
    </Box>
    );
}

export default CustomerDetail;