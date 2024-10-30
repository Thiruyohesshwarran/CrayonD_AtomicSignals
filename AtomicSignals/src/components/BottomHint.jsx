import React from 'react';
import { BottomHintStyle } from './BottomHintStyle';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function BottomHint({question,linktext,linkTo}) {
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={BottomHintStyle.parent}>
            <Typography sx={BottomHintStyle.question}>{question}</Typography>
            <Typography 
              sx={BottomHintStyle.linktext}
              onClick={() => navigate(linkTo)}>
                {linktext}
              </Typography>
      </Box>
    </div>
  )
}

export default BottomHint
