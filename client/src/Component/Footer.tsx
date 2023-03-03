import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';

function Footer() {
  return (
    <Box
      sx={{
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '20px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '50px'
        }}
      >
        <Link variant="body1" target="_blank" href="https://www.theboysapi.com/api/character" underline="none">
          Character: 73
        </Link>
        <Link variant="body1" target="_blank" href="https://www.theboysapi.com/api/affiliation" underline="none">
          Affiliation: 22
        </Link>
        <Link variant="body1" target="_blank" href="https://www.theboysapi.com/api/episode" underline="none">
          Episode: 24
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          marginTop: '20px'
        }}
      >
        <Typography variant="body1">@ 2023 By</Typography>
        <Link variant="body1" underline="none" target="_blank" href="https://github.com/xyzkpsf" sx={{ marginLeft: '5px' }}>
          Xiaoyi Zhu
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
