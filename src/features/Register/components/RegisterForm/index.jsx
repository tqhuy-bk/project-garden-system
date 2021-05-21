import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputPassword from '../../../../components/from-controls/inputPassword';
import InputText from '../../../../components/from-controls/inputText';
import './styles.scss';
import PropTypes from "prop-types"

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2rem',
        maxWidth: '500px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '0 1rem'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '1rem',
    },
    avatar: {
        color: 'red',
        margin: '0 auto'
    },
    buttonSubmit: {
        marginTop: '1rem'
    }
}))





function RegisterForm({onSubmit}) {
    const schema = yup.object().shape({
        username: yup.string().min(2).required('Please enter username'),
        email: yup.string().required('Please enter email').email('Please enter email valid'),
        password: yup.string().required('Please enter your password'),
        retypePassword: yup.string().required('Please enter your password')
        .oneOf([yup.ref("password")], 'Password must match')
      });
    
    const classes = useStyles()
    const form = useForm({
        // defaultValues: {
        //     username: "",
        //     email: "",
        //     password: "",
        //     retypePassword: ""
        // },
        resolver: yupResolver(schema)
    });

    const handleOnSubmit = (values) => {
        if (onSubmit) {
            onSubmit(values)
        }
    }

    return (
        <form onSubmit = {form.handleSubmit(handleOnSubmit)} className={classes.root}>
        <h1 className={classes.title}>
            SIGN UP
        </h1>
        <Avatar className={classes.avatar}>
              <AddAPhotoIcon />
        </Avatar>
        <InputText form={form} name="username" label="User name" />
        <InputText form={form} name="email" label="Email" />
        <InputPassword form={form} name="password" label="Password" />
        <InputPassword form={form} name="retypePassword" label="Retype Password" />

        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.buttonSubmit}>
            SUBMIT
        </Button>
        </form>
    );
}

export default RegisterForm;


