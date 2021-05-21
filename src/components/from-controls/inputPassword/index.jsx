import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

InputPassword.propTypes = {
    
};

function InputPassword({label, name, form}) {

    const [showPassword, setShowpassword] = useState(false)
    
    const handleSetShowPassword = ()=> setShowpassword(x => !x);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
    
    return (
        <Controller
        control={form.control}
        name={name}
        render= {({
            field,
            fieldState: { invalid, isTouched, isDirty, error },
            formState
        }) => (
            <FormControl variant="outlined" fullWidth margin="normal"
            >
            <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
            <OutlinedInput
            label={label}
            error={!!error}
            {...field}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleSetShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            </FormControl>
        )}
        />

    )
}

export default InputPassword;