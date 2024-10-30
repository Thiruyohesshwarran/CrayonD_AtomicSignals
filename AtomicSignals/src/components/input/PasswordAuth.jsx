import React from 'react'
import TextField from '@mui/material/TextField';
import { PasswordAuthStyle } from './PasswordAuthStyle';

function PasswordAuth( ) {
  return (
    <div>
    <TextField
        sx={PasswordAuthStyle.TextFieldAuth}
      type="password"
      variant="outlined"
      required
      fullWidth
    />
    </div>
  )
}

export default PasswordAuth
