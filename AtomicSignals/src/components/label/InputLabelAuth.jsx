import React from 'react';
import { InputLabelStyle } from './InputLabelStyle';
import { InputLabel } from '@mui/material';

function InputLabelAuth({labeltext,required}) {
  return (
    <div>
        <InputLabel sx={InputLabelStyle.label} required={required}>{labeltext}</InputLabel>
    </div>
  )
}

export default InputLabelAuth
