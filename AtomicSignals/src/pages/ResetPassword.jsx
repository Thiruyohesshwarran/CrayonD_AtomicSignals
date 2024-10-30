import React,{useState,useEffect} from 'react';
import { RPstyle } from '../styles/ResetPasswordStyle'; 
import BackgroundDesign from '../assets/BackgroundDesign';
import { Box } from '@mui/material';
import AtomicSignals from '../assets/AtomicSignals';
import InputLabelAuth from '../components/label/InputLabelAuth';
import PasswordAuth from '../components/input/PasswordAuth';
import GreenButton from '../components/buttons/GreenButton';
import SnackbarClosable from '../components/SnackBarClosable';

function ResetPassword() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    setSnackbarOpen(true); 
  }, []);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  return (
    <div>
        <SnackbarClosable
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message="Link sent to registerd email"
      />
        <Box sx={RPstyle.parent}>
            <BackgroundDesign/>
            <Box sx={RPstyle.contentBox}>
              <AtomicSignals />
              <Box sx={RPstyle.Content}>
                <Box sx={RPstyle.HeadText}>Reset Password</Box>
                <Box sx={RPstyle.Details}>
                  Please provide a new password for your account
                </Box>
                <InputLabelAuth required labeltext="New password"/>
                <PasswordAuth/>
                <br/>
                <InputLabelAuth required labeltext="Confirm new password"/>
                <PasswordAuth/>
                <Box sx={RPstyle.RPButton}>
                <GreenButton greenbuttontext="Reset Password" linkTo="/login"/>
                </Box>
              </Box>
            </Box>
        </Box>
    </div>
  )
}

export default ResetPassword
