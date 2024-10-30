import React from 'react';
import { Button } from '@mui/material';
import { GreenButtonStyle } from './GreenButtonStyle';
import { useNavigate } from 'react-router-dom';

function GreenButton({greenbuttontext,linkTo}) {
  const navigate = useNavigate();
  return (
    <div>
      <Button sx={GreenButtonStyle.ButtonStyle}
        onClick={() => navigate(linkTo)}>
        {greenbuttontext}
      </Button>
    </div>
  )
}

export default GreenButton
