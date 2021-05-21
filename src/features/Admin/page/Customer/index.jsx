import { makeStyles } from '@material-ui/core';
import React from 'react';
import DataGridComponent from '../../../../components/DataGrid';

Customer.propTypes = {
    
};

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '17rem',
        marginTop: '1rem'
    },
}))


function Customer(props) {
    const classes = useStyles()
    return (
        <div>
            <DataGridComponent/>
    </div>
    );
}

export default Customer;