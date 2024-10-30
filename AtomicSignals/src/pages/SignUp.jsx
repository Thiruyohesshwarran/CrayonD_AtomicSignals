import React from 'react';
import BackgroundDesign from '../assets/BackgroundDesign';
import { Box, Divider, Typography } from '@mui/material';
import AtomicSignals from '../assets/AtomicSignals';
import SignUpOptions from '../components/buttons/SignUpOptions';
import OutLook from '../assets/Outlook';
import Google from '../assets/Google';
import { SignUpstyle } from '../styles/SignUpStyle';
import InputAuth from '../components/input/InputAuth';
import GreenButton from '../components/buttons/GreenButton';
import BottomHint from '../components/BottomHint';
import InputLabelAuth from '../components/label/InputLabelAuth';



function SignUp() {
  return (
    <div>
        <Box sx={SignUpstyle.overallPageLayout}>
        <BackgroundDesign />

        <Box sx={SignUpstyle.contentBox}>
          <AtomicSignals />
          <Box sx={SignUpstyle.Content}>
            <Box sx={SignUpstyle.signupText}>Sign up</Box>
            <Box sx={SignUpstyle.signupDetails}>
              You're just a few details away from setting up a culture of feedback and a thriving environment.
            </Box>
            <Box sx={SignUpstyle.signupOptionsContainer}>
              <SignUpOptions icon={<Google />} text="Google" />
              <SignUpOptions icon={<OutLook />} text="Outlook" />
            </Box>
            <center> <Box sx={SignUpstyle.orline}>
              <Box sx={SignUpstyle.line}><hr/></Box>
              <Box sx={SignUpstyle.ortext}>or</Box>
              <Box sx={SignUpstyle.line}><hr/></Box>
            </Box></center>
            <InputLabelAuth required labeltext="Work Email"/>
            <InputAuth/>
            <Box sx={SignUpstyle.GreenButtonholder}>
            <GreenButton greenbuttontext="Sign up"/>
            </Box>
            <BottomHint question="Already have an account?" linktext="Log in" linkTo="/login"/>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default SignUp
