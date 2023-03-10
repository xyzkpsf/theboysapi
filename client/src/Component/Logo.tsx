import React from 'react';
import Box from '@mui/material/Box';
import logo from '../assets/logo.svg';
import { THEME_COLOR } from '../Style';

function Logo() {
  return (
    <Box
      sx={{
        marginTop: '-10px',
        height: '180px',
        width: '100%',
        color: THEME_COLOR.SECONDARY,
        backgroundColor: THEME_COLOR.BACKGROUND_COLOR,
        textAlign: 'center'
      }}
    >
      <img src={logo} alt={'logo'} style={{ height: 180, stroke: THEME_COLOR.SECONDARY }} />
    </Box>
  );
}

export default Logo;
