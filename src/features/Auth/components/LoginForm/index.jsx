import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import PropTypes from "prop-types";
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from "yup";
import InputPassword from '../../../../components/from-controls/inputPassword';
import InputText from '../../../../components/from-controls/inputText';
import './styles.scss';
import  ImageLogin from "../../../../asset/image/login.png"

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '400px',
        margin: '10rem auto',
        textAlign: 'center',
        marginTop: '2rem'
    },
    header: {
        fontWeight: 'bold',
        fontSize: '2.5rem',
        marginBottom: '1.5rem'
    },
    avatar: {
        color: 'red',
        margin: '0 auto'
    },
    buttonSubmit: {
        fontSize: '1rem',
        padding: '0.5rem 1.5rem'
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '1rem'
    },
    link: {
        textDecoration: 'none',
        marginLeft: '0.5rem'
    },
    img: {
        objectFit: 'cover',
        width: '100%',
        height: '15rem'
    },
    text: {
        
    }
}))


function LoginForm({onSubmit}) {
    const schema = yup.object().shape({
        email: yup.string().required('Please enter email').email('Please enter email valid'),
        password: yup.string().required('Please enter your password'),
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
        <h1 className={classes.header}>LOG IN</h1>
        <img src={ImageLogin} alt="" className={classes.img} />
        <InputText form={form} name="email" label="Email" />
        <InputPassword form={form} name="password" label="Password"/>

        <Box className={classes.box}>
        <p className={classes.text}>
        Haven't had an account?<Link to="/auth/signup" className={classes.link} >Sign Up</Link>
        </p>
        <Button type="submit" variant="contained" color="primary" className={classes.buttonSubmit}>
            SUBMIT
        </Button>
        </Box>
        
        </form>
    );
}

export default LoginForm;


