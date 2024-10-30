import { Typography,Box } from '@mui/material';
import React from 'react';
import { FpLinkStyle } from './ForgotPasswordLinkStyle';
import { useNavigate } from 'react-router-dom';

function ForgotPasswordLink() {
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={FpLinkStyle.parent}>
        <Typography sx={FpLinkStyle.linktext}
          onClick={() => navigate("/forgotpassword")}>
          Forgot Password?</Typography>
      </Box>
    </div>
  )
}

export default ForgotPasswordLink
