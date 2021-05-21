import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import RegisterForm from './components/RegisterForm';
import { signup } from './userSlice';

Register.propTypes = {
    
};



function Register(props) {
    const history = useHistory()
    const dispatch = useDispatch();
    const handleOnSubmit = (values) => {
        dispatch(signup(values))
        history.push("/login")
    }
    return (
        <RegisterForm onSubmit={handleOnSubmit} />
    );
}

export default Register;