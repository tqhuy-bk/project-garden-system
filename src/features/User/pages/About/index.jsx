import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import Userinfo from "../../../../components/UserInfo/index"

About.propTypes = {
    
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        // marginLeft: '-1.5rem',
        alignItems: 'flex-start',
        maxWidth: 'calc(100% - 25rem)',
        marginLeft: 'auto',
        marginTop: '5rem'
    },
}))


function About(props) {
    const classes = useStyles()
    return (
        <div>
        <Box className={classes.root}>
            <Userinfo/>
      </Box>
    </div>
    );
}

export default About;