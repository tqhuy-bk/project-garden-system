import { makeStyles } from '@material-ui/core';
import React from 'react';
import Garden from '../../../../components/Garden';

GardenDetail.propTypes = {
    
};

const useStyle = makeStyles({
    root: {
        margin: '10rem auto'
    }
})

function GardenDetail(props) {
    const classes= useStyle()
    return (
        <div className={classes.root}>
            <Garden/>
            <Garden/>
        </div>
    );
}

export default GardenDetail;