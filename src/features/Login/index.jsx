import { useSnackbar } from "notistack";
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import LoginForm from '../Auth/page/Login';

Login.propTypes = {
    
};



function Login(props) {
    const { enqueueSnackbar} = useSnackbar()
    const dispatch = useDispatch()
    const history = useHistory()
    const handleOnSubmit = (values) => {
        localStorage.setItem('user', values)
        enqueueSnackbar('You are login successfully', {variant: 'success'})
        history.push("/photos")
    }

    return (
        <LoginForm onSubmit={handleOnSubmit} />
    );
}

export default Login;