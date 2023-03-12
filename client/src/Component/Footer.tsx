import { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { THEME_COLOR } from '../Style';

function Footer() {
  const [cHover, setCHover] = useState(false);
  const [aHover, setAHover] = useState(false);
  const [eHover, setEHover] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

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
        <Link
          sx={{
            color: cHover ? THEME_COLOR.SECONDARY : THEME_COLOR.TERTIARY
          }}
          onMouseEnter={() => setCHover(true)}
          onMouseLeave={() => setCHover(false)}
          variant="body1"
          target="_blank"
          href="https://www.theboysapi.com/api/character"
          underline="none"
        >
          Character: 73
        </Link>
        <Link
          sx={{
            color: aHover ? THEME_COLOR.SECONDARY : THEME_COLOR.TERTIARY
          }}
          onMouseEnter={() => setAHover(true)}
          onMouseLeave={() => setAHover(false)}
          variant="body1"
          target="_blank"
          href="https://www.theboysapi.com/api/affiliation"
          underline="none"
        >
          Affiliation: 22
        </Link>
        <Link
          sx={{
            color: eHover ? THEME_COLOR.SECONDARY : THEME_COLOR.TERTIARY
          }}
          onMouseEnter={() => setEHover(true)}
          onMouseLeave={() => setEHover(false)}
          variant="body1"
          target="_blank"
          href="https://www.theboysapi.com/api/episode"
          underline="none"
        >
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
        <Link
          sx={{
            marginLeft: '5px',
            color: linkHover ? THEME_COLOR.SECONDARY : THEME_COLOR.TERTIARY
          }}
          onMouseEnter={() => setLinkHover(true)}
          onMouseLeave={() => setLinkHover(false)}
          variant="body1"
          underline="none"
          target="_blank"
          href="https://github.com/xyzkpsf"
        >
          Xiaoyi Zhu
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
