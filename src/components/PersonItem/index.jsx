import { makeStyles } from '@material-ui/core';
import React from 'react';

PersonItem.propTypes = {
    
};

const useStyles = makeStyles({
    root: {

    },
    name: {},
    phone: {},
    address: {},
    image: {},
    email: {}


})

function PersonItem(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <img src="" alt="" className={classes.image} />
        </div>
    );
}

export default PersonItem;