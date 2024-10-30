import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ImportButtonStyle } from './ImportButtonStyle';
import ImportImg from '../../assets/ImportImg';

function ImportButton(linkTo) {
    const navigate = useNavigate();
  return (
    <div>
      <Button variant='outlined' sx={ImportButtonStyle.ImpButton}
        onClick={() => navigate(linkTo)}>
        <ImportImg/>
        Import
      </Button>
    </div>
  )
}

export default ImportButton
