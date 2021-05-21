import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React from 'react';
import { Link } from 'react-router-dom';
import BackGroundImage from "../../asset/image/back-ground.svg";
import Image1 from "../../asset/image/image-1.png";
import Image2 from "../../asset/image/image-2.png";
import Image3 from "../../asset/image/image-3.svg";
import Image4 from "../../asset/image/image-5.png";
import './styles.scss';

BackGround.propTypes = {
    
};

const useStyles = makeStyles((theme) => ({
    root: {

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
    heading: {
        textDecoration: 'none',
        fontSize: '2rem',
        // backgroundImage: "linear-gradient(.5turn, #485563, #29323c)",
        // backgroundImage: "linear-gradient(180deg, rgba(145, 202, 248, 0) 12.81%, rgba(145, 202, 248, 0.25) 67.16%, #91CAF8 141.2%)",
        backgroundImage: "linear-gradient(.5turn, #00b4db, #0083b0)",
        '&::-webkit-background-clip': 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },

    feedback: {
        marginTop: theme.spacing(4),
        maxWidth: '1000px'
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
        fontStyle: 'italic',
        position: 'relative',
        paddingBottom: '0.5rem',
        marginBottom: '0.5rem',
        '&::after': {
            content: '""',
            width: "10%",
            borderRadius: '2rem',
            height: "5px",
            backgroundColor: '#DE4C73',
            position: 'absolute',
            bottom: '0',
            left: '0'
        }
    },


    feedbackInfo: {
        flex: '1 1 0',
        marginLeft: '1rem',
    },

    container: {
        marginBottom: '1.5rem',
        marginTop: '1rem'
    },


    feedbackDesc: {
        
    },

    feedbackImage: {
        borderRadius: '50%',
        objectFit: 'cover',
        display: 'block',
        width:'4rem',
        height: '4rem',
    },
    header: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        transform: 'translateY(-100%)',
        position: 'relative',
        paddingBottom: '0.5rem',
        marginBottom: '2rem',
        "&::after": {
            content: '""',
            width: "4.1%",
            borderRadius: '2rem',
            height: "5px",
            backgroundColor: '#DE4C73',
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)'
        }
    }
}))

function BackGround(props) {
    const classes = useStyles()
    return (
        <div className="background">
            <div className="background-header">
                <h1 className="background-heading">
                <Link to="/" className={classes.heading}>SMART GARDEN</Link>
                    </h1>
                <div className="background-link">
                    <Link to="/auth/signup" className={classes.link}>Sign up</Link>
                    <Link to="/auth/login" className={classes.link}>LOGIN</Link>
                </div>
            </div>
            <div className="background-content">
                <img src={BackGroundImage}/>
                <div className="background-memo">
                    <span className="background-title">Welcome to smart garden</span>
                    <p className="background-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link to="/auth/signup" className={classes.button}>Sign up</Link>
                </div>
            </div>
            <div className="background-title background-title--medium">How it works</div>
            <div className="background-list">
                <div className="background-item">
                    <img src={Image1} className="background-image background-image--smaller" />
                    <span className="background-title background-title--smaller">Graining ideas</span>
                    <p className="background-desc background-desc--adjust">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="background-item">
                    <img src={Image2} className="background-image background-image--smaller" />
                    <span className="background-title background-title--smaller">Collaborate</span>
                    <p className="background-desc background-desc--adjust">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="background-item">
                    <img src={Image3} alt="" className="background-image background-image--smaller" />
                    <span className="background-title background-title--smaller">Security</span>
                    <p className="background-desc background-desc--adjust">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className="background-body">
                <div className="background-signup">
                    <span className="background-title background-title--smaller">Start gaining your ideas today</span>
                    <p className="background-desc background-desc--adjusts">Sign up for a free account</p>
                    <Link to="/auth/signup" className={classes.button}>Sign up</Link>
                </div>
                <img src={Image4} alt="" className="background-image background-image--large" />
            </div>
            <Box>
            <Container className={classes.feedback} >
                <Typography component="h2" variant="h5" className={classes.header}>What people say</Typography>
                <Grid container className={classes.container}>
                <Grid item lg={6} className={classes.feedbackItem} >
                        <Box> 
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                           className={classes.feedbackImage}/>
                        </Box>
                    <Box item className={classes.feedbackInfo}>
                        <Typography variant="body2" className={classes.feedbackName}>Nguyen Huu Hung</Typography>
                        <Typography variant="body2" className={classes.feedbackJob}>Web developer</Typography>
                        <Rating value={4}
                        name="simple-controlled"
                        />
                        <Typography variant="body2" className={classes.feedbackDesc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem possimus consequatur doloribus, harum vero dolor facilis nobis perferendis.</Typography>
                    </Box>
                </Grid>
                <Grid item lg={6} className={classes.feedbackItem} >
                        <Box>
                        <img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                        className={classes.feedbackImage}/>
                        </Box>
                    <Box item className={classes.feedbackInfo}>
                        <Typography variant="body2" className={classes.feedbackName}>Nguyen Huu Hung</Typography>
                        <Typography variant="body2" className={classes.feedbackJob}>Web developer</Typography>
                        <Rating value={5}
                            name="simple-controlled"
                         />
                        <Typography variant="body2" className={classes.feedbackDesc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem possimus consequatur doloribus, harum vero dolor facilis nobis perferendis.</Typography>
                    </Box>
                </Grid>
                </Grid>
                <Grid container>
                <Grid item lg={6} className={classes.feedbackItem} >
                        <Box> 
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                           className={classes.feedbackImage}/>
                        </Box>
                    <Box item className={classes.feedbackInfo}>
                        <Typography variant="body2" className={classes.feedbackName}>Nguyen Huu Hung</Typography>
                        <Typography variant="body2" className={classes.feedbackJob}>Web developer</Typography>
                        <Rating value={5}
                        name="simple-controlled"
                        />
                        <Typography variant="body2" className={classes.feedbackDesc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem possimus consequatur doloribus, harum vero dolor facilis nobis perferendis.</Typography>
                    </Box>
                </Grid>
                <Grid item lg={6} className={classes.feedbackItem} >
                        <Box>
                        <img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" 
                        className={classes.feedbackImage}/>
                        </Box>
                    <Box item className={classes.feedbackInfo}>
                        <Typography variant="body2" className={classes.feedbackName}>Nguyen Huu Hung</Typography>
                        <Typography variant="body2" className={classes.feedbackJob}>Web developer</Typography>
                        <Rating value={4}
                        name="simple-controlled"
                        />
                        <Typography variant="body2" className={classes.feedbackDesc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem possimus consequatur doloribus, harum vero dolor facilis nobis perferendis.</Typography>
                    </Box>
                </Grid>
                </Grid>
               
            </Container>
        </Box>
            <span className="background-footer">&copy;2021 All Right Reserved</span>
        


        </div>
    );
}

export default BackGround;