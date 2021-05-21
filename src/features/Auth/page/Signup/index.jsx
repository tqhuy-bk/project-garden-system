import { makeStyles } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import SignupForm from '../../components/SignupForm';

Signup.propTypes = {
    
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

function Signup(props) {
    const classes = useStyles()
    const { enqueueSnackbar} = useSnackbar()
    // const dispatch = useDispatch()
    const history = useHistory()

    const handleOnSubmit = (values) => {
        enqueueSnackbar('You are sinup successfully', {variant: 'success'})
        history.push("/auth/login")
    }
    return (
        <div>
            <h1 className="background-heading">
                <Link to="/" className={classes.heading}>SMART GARDEN</Link>
            </h1>
            <SignupForm onSubmit= {handleOnSubmit} />     
        </div>
    );
}


export default Signup;