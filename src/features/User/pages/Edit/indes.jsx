import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import PropTypes from "prop-types";
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputPassword from '../../../../components/from-controls/inputPassword';
import InputText from '../../../../components/from-controls/inputText';

Edit.propTypes = {
    onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '3rem',
        maxWidth: '450px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '0 1rem',
        transform: 'translateX(7rem)'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '2rem',
    },
    avatar: {
        color: 'red',
        margin: '0 auto'
    },
    buttonSubmit: {
        marginTop: '1rem',
        marginLeft: 'auto',
        padding: '1rem 2rem'
    }
}))



function Edit({onSubmit}) {
    const schema = yup.object().shape({
        name: yup.string().min(2, 'Please enter at least 2 words'),
        phone: yup.string().min(10, 'Please enter at least 10 words'),
        address: yup.string(),
        password: yup.string(),
        retypePassword: yup.string()
      });
    
    const classes = useStyles()
    const form = useForm({
        resolver: yupResolver(schema)
    });

    const handleOnSubmit = (values) => {
        if (onSubmit) {
            onSubmit(values)
        }
    }

    return (
        <form onSubmit = {form.handleSubmit(handleOnSubmit)} className={classes.root}>
        <Typography component="h3" variant="h5" className={classes.title}>
            EDIT USER
        </Typography>
        <InputText form={form} name="name" label="Name" />
        <InputText form={form} name="phone" label="Phone" />
        <InputText form={form} name="address" label="Address" />
        <InputPassword form={form} name="password" label="Password" />
        <InputPassword form={form} name="retypePassword" label="Retype Password" />

        <Button type="submit"  variant="contained" fullWidth color="primary" className={classes.buttonSubmit}>
            SAVE
        </Button>
        </form>
    );
}

export default Edit;


