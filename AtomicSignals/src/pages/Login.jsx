import React from 'react';
import { Box } from '@mui/material';
import BackgroundDesign from '../assets/BackgroundDesign';
import { LoginStyle } from '../styles/LoginStyle';
import AtomicSignals from '../assets/AtomicSignals';
import InputAuth from '../components/input/InputAuth';
import InputLabelAuth from '../components/label/InputLabelAuth';
import PasswordAuth from '../components/input/PasswordAuth';
import GreenButton from '../components/buttons/GreenButton';
import ForgotPasswordLink from '../components/ForgotPasswordLink';

function Login() {
  return (
    <div>
      <Box style={LoginStyle.parent}>
      <BackgroundDesign />

      <Box style={LoginStyle.contentbox}>
      <AtomicSignals />
      <Box style={LoginStyle.Content}>
            <Box style={LoginStyle.HeadText}>Welcome!</Box>
            <Box style={LoginStyle.Details}>
              One positive feedback per day or week can make us grow exponentially
            </Box>
            <InputLabelAuth labeltext="Email"/>
            <InputAuth/>
            <br/>
            <InputLabelAuth labeltext="Password"/>
            <PasswordAuth/>
            <ForgotPasswordLink/>
            <Box sx={LoginStyle.GreenButtonholder}>
            <GreenButton greenbuttontext="Log in" linkTo="/dashboard"/>
            </Box>
      </Box>
      </Box>

      </Box>
    </div>
  )
}

export default Login
