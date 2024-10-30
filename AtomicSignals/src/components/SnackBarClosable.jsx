import React, { useState } from 'react';
import { Snackbar, IconButton, Alert } from '@mui/material';
import Close from './icons/Close';
import { SnackbarStyle } from './SnackBarClosableStyle';

function SnackbarClosable({ open, onClose, message }) {
  return (
    <Snackbar
      sx={SnackbarStyle.parent}
      open={open}
      onClose={onClose}
      autoHideDuration={6000} 
      anchorOrigin={{
        vertical:"top",
        horizontal:"center",
      }}
      action={
        <IconButton color="inherit" onClick={onClose}>
          <Close/>
        </IconButton>
      }
    >
    <Alert sx={SnackbarStyle.alertBox}>
        {message}
    </Alert>
    </Snackbar>
  );
}

export default SnackbarClosable;
