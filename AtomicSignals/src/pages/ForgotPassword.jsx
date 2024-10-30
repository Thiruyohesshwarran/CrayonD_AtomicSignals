import React from 'react';
import { FPstyle } from '../styles/ForgotPasswordStyle';
import { Box } from '@mui/material';
import BackgroundDesign from '../assets/BackgroundDesign';
import AtomicSignals from '../assets/AtomicSignals';
import InputAuth from '../components/input/InputAuth';
import InputLabelAuth from '../components/label/InputLabelAuth';
import GreenButton from '../components/buttons/GreenButton';
import BottomHint from '../components/BottomHint';

function ForgotPassword() {
  return (
    <div>
      <Box sx={FPstyle.parent}>
        <BackgroundDesign/>
        <Box sx={FPstyle.contentBox}>
            <AtomicSignals />
            <Box sx={FPstyle.Content}>
            <Box sx={FPstyle.headText}>Forgot Password</Box>
            <Box sx={FPstyle.Details}>
                Provide us the registered email to reset your password.
            </Box>
            <InputLabelAuth labeltext="Email"/>
            <InputAuth/>
            <Box sx={FPstyle.getlink}>
            <GreenButton greenbuttontext="Get Link" linkTo="/resetpassword"/>
            </Box>
            <BottomHint question="Remembered the password?" linktext="Log in" linkTo="/login"/>
            </Box>
        </Box>
      </Box>
    </div>
  )
}

export default ForgotPassword
