import React from 'react'
import TextField from '@mui/material/TextField';
import { InputAuthStyle } from './InputAuthStyle';

function InputAuth( ) {
  return (
    <div>
    <TextField
        sx={InputAuthStyle.TextFieldAuth}
        id="outlined-required"
        defaultValue="atomicsignals@gmail.com"
        fullWidth
    />
    </div>
  )
}

export default InputAuth
