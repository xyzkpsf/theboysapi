import React from 'react';
import Box from '@mui/material/Box';
import Layout from './Layout';
import Logo from './Logo';
import { THEME_COLOR } from '../Style';

function Home() {
  return (
    <Box
      sx={{
        backgroundColor: THEME_COLOR.BACKGROUND_COLOR,
        height: `calc(100vh - 70px)`
      }}
    >
      <Logo />
      <Layout />
    </Box>
  );
}

export default Home;
