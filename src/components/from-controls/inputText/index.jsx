import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { Controller } from 'react-hook-form';

InputText.propTypes = {
    
};

const useStyles = makeStyles((theme) => ({
    input: {
        fontSize: '5rem',
        height: '2.8rem'
    }
}))

function InputText({label, name, form}) {
    const classes= useStyles()
    return (
        <Controller
        control={form.control}
        name={name}
        render= {({
            field,
            fieldState: { invalid, isTouched, isDirty, error },
            formState
        }) => (
            <TextField 
            variant="outlined" 
            label={label}
            fullWidth
            margin="normal"
            error={!!error}
            {...field}
            // helperText={JSON.stringify(formState.errors[1])}
            className={classes.input}
            size="normal"
            />
        )}
        />
    )
}

export default InputText;