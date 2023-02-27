import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { THEME_COLOR } from '../Style';

//todo: unity golbal style
function About() {
  return (
    <Box
      sx={{
        height: '100%vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: THEME_COLOR.BACKGROUND_COLOR
      }}
    >
      <Box
        sx={{
          width: '70%',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start'
        }}
      >
        <Typography variant="h2">About</Typography>
        <Box
          sx={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start'
          }}
        >
          <Typography variant="h4" sx={{ marginTop: '20px' }}>
            Who
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '15px', marginTop: '5px' }}>
            My name is{' '}
            <Link href="https://www.linkedin.com/in/xiaoyi-zhu/" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
              {' '}
              Xiaoyi Zhu
            </Link>
            , a developer based in San Francisco Bay Area. I am currently working at FreeAgent CRM. Feel free to send me an{' '}
            <Link href="mailto:xiaoyizhusf@gmail.com" style={{ textDecoration: 'none' }}>
              {' '}
              email{' '}
            </Link>
            if you have any questions or thoughts on this API.
          </Typography>
          <Typography variant="h4" sx={{ marginTop: '20px' }}>
            What
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '15px', marginTop: '5px' }}>
            The Boys API is a REST API based on the TV series developed by{' '}
            <Link href="https://en.wikipedia.org/wiki/Eric_Kripke" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
              {' '}
              Eric Kripke
            </Link>{' '}
            for Amazon Prime Video. It collects structured data including characters, affiliations, episodes and seasons, up to season 3 of this series.
          </Typography>
          <Typography variant="h4" sx={{ marginTop: '20px' }}>
            Why
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '15px', marginTop: '5px' }}>
            The Boys is a black-humored and fun TV series(but not for kids). It is one of my favorites, along with others like Rick and Morty, Breaking Bad, which both have their own API, from{' '}
            <Link href="https://rickandmortyapi.com/" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
              {' '}
              The Rick and Morty API{' '}
            </Link>
            and{' '}
            <Link href="https://breakingbadapi.com/" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
              {' '}
              The Breaking Bad API{' '}
            </Link>
            respectively. Hence I figured The boys should have it's own one too, and here it is.
          </Typography>
          <Typography variant="h4" sx={{ marginTop: '20px' }}>
            Copyright
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '15px', marginTop: '5px' }} style={{ whiteSpace: 'pre-line' }}>
            The Boys TV series is developed by{' '}
            <Link href="https://en.wikipedia.org/wiki/Eric_Kripke" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
              {' '}
              Eric Kripke{' '}
            </Link>
            for Amazon Prime Video. The data and images are used without claim of ownership and belong to their respective owners. The majority of this data collected was from Amazon Prime Video and
            Fandom{' '}
            <Link href="https://the-boys.fandom.com/wiki/The_Boys_Wiki" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
              {' '}
              The Boys Wiki
            </Link>
            .{'\n'}
            {'\n'}
            This API is open source and uses a BSD license.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
