import { useSnackbar } from 'notistack';
import React from 'react';
import { useHistory } from 'react-router';
import LoginForm from '../../components/LoginForm';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';


Login.propTypes = {
    
};

const useStyles = makeStyles({
    heading: {
        textDecoration: 'none',
        fontSize: '2rem',
        // backgroundImage: "linear-gradient(.5turn, #485563, #29323c)",
        // backgroundImage: "linear-gradient(180deg, rgba(145, 202, 248, 0) 12.81%, rgba(145, 202, 248, 0.25) 67.16%, #91CAF8 141.2%)",
        backgroundImage: "linear-gradient(.5turn, #00b4db, #0083b0)",
        '&::-webkit-background-clip': 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginLeft: '2rem'
    }
})

function Login(props) {
    const classes = useStyles()
    const { enqueueSnackbar} = useSnackbar()
    // const dispatch = useDispatch()
    const history = useHistory()

    const handleOnSubmit = (values) => {
        // const dispatch = useDispatch()
        // localStorage.setItem('user', values)
        enqueueSnackbar('You are login successfully', {variant: 'success'})
        history.push("/user/home")
    }
    return (
        <div>
            <h1>
                <Link to="/" className={classes.heading}>SMART GARDEN</Link>
            </h1>
            <LoginForm onSubmit= {handleOnSubmit} />     
        </div>
    );
}

export default Login;