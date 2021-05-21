import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Box, Button, makeStyles, Typography } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import PropTypes from "prop-types";
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputPassword from '../../../../components/from-controls/inputPassword';
import InputText from '../../../../components/from-controls/inputText';
import ImageLogin from "../../../../asset/image/login.png"
import './styles.scss';

SignupForm.propTypes = {
    onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '1000px',
        margin: '5rem auto',
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '2.5rem',
        marginBottom: '1rem'
    },
    avatar: {
        color: 'red',
        margin: '0 auto'
    },
    buttonSubmit: {
        marginTop: '1rem',
        padding: '0.5rem 1.5rem',
        marginRight: 'auto',
    },
    img: {
        display: 'block',
        width: '25rem',
        height: '25rem',
        marginBottom: '4rem'
    },
    // form: {
    //     maxWidth: '800px',
    //     alignItems: 'center',
    //     margin: '0 auto',
    //     textAlign: 'center',
    //     justifyContent: 'space-between',
    // },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: '-1rem',
        "& > *:not(:last-child)": {
            width: 'calc(50% - 1rem)',
            marginRight: '1rem'
        }
    }
}))





function SignupForm({onSubmit}) {
    const schema = yup.object().shape({
        name: yup.string().required('Please enter your name').min(2, 'Please enter at least 2 words'),
        phone: yup.string().required('Please enter your phone').min(10, 'Please enter at least 10 words'),
        address: yup.string().required('Please enter your address'),
        email: yup.string().required('Please enter email').email('Please enter email valid'),
        password: yup.string().required('Please enter your password'),
        retypePassword: yup.string().required('Please enter your retype password')
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
        <div className={classes.root}>
            <img src={ImageLogin} alt="" className={classes.img} />
            <div>
            <h1 className={classes.title}> SIGN UP </h1>
            <form onSubmit = {form.handleSubmit(handleOnSubmit)} className={classes.form}>  
                <Box className={classes.container}>
                <InputText form={form} name="name" label="Name"/>
                <InputText form={form} name="phone" label="Phone" />
                <InputText form={form} name="address" label="Address" />
                <InputText form={form} name="email" label="Email" />
                <InputPassword form={form} name="password" label="Password" />
                <InputPassword form={form} name="retypePassword" label="Retype Password" />
                <Button type="submit" variant="contained" color="primary" className={classes.buttonSubmit}>
                    SUBMIT
                </Button>
                </Box>
            </form>
            </div>

        </div>
        
    );
}

export default SignupForm;




