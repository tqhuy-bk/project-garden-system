import { makeStyles } from '@material-ui/core';
import React from 'react';
import GardenCard from '../../../../components/GardenCard';

GardenUser.propTypes = {
    
};

const useStyles = makeStyles((theme) => ({
    root: {
            display: 'flex',
            flexWrap: 'wrap',
            // marginLeft: '-1.5rem',
            alignItems: 'flex-start',
            maxWidth: 'calc(100% - 15rem)',
            marginLeft: 'auto',
            "& > *": {
                width: 'calc((100%/3) - 1.5rem)',
                marginLeft: '1.5rem',
            },
            backgroundColor: 'f4f5f7',
            padding: '1rem 1rem 0 0',
            // "& > *": {
                // marginBottom: '1rem'
            // }
    }
}))

function GardenUser(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
        <GardenCard url="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2FyZGVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
          <GardenCard  url="https://images.unsplash.com/photo-1580600301354-0ce8faef576c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FyZGVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
          <GardenCard  url ="https://images.unsplash.com/photo-1578302758063-0ef3e048ca89?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdhcmRlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
          <GardenCard url ="https://images.unsplash.com/photo-1544727219-d2ff78f0f148?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2FyZGVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
          <GardenCard  url="https://images.unsplash.com/photo-1566926082274-5a7074e4f048?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhcmRlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
        </div>
    );
}

export default GardenUser;