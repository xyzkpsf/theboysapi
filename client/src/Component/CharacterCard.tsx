import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { affiliationObject, nameAndUrl, CharacterCardProps } from '../Utils/types';
import { backdropClasses } from '@mui/material';

const mapAffiliation = (affiliation: affiliationObject[]): JSX.Element[] => {
  // todo: distinguish former affilication and not former
  return (affiliation || []).map((a) => (
    <Typography variant="body2" key={a.name}>
      <Link href={a.url} color="inherit" underline="none" rel="noopener" target="_blank">
        {a.name}
      </Link>
    </Typography>
  ));
};

const mapSeen = (seen: nameAndUrl): JSX.Element | undefined => {
  if (seen && seen.url && seen.name) {
    return (
      <Typography component={'span'} variant="body2">
        <Link href={seen.url} color="inherit" underline="none" rel="noopener" target="_blank">
          {seen.name}
        </Link>
      </Typography>
    );
  }
};

const CharacterCard = ({ data }: CharacterCardProps) => {
  return (
    <Grid item sm={12} md={6} lg={4} key={data.id}>
      <Box
        sx={{
          alignItems: 'center',
          width: '220px',
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '8px',
          backgroundColor: '#DDDDDD !important'
        }}
      >
        <Box
          bgcolor="white"
          sx={{
            alignItems: 'center',
            width: '300px',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '3px',
            backgroundColor: 'white !important'
          }}
        >
          {/* <img src={data.image} alt="" className="characterImg" /> */}
          <Box
            component="img"
            sx={{
              width: '200px',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '12px'
            }}
            alt={data.name}
            src={data.image}
          />
          <Box
            sx={{
              width: '200px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* todo: need to map the original url into href here */}
            <Link href={data.url} variant="h5" color="inherit" underline="none" rel="noopener" target="_blank">
              {data.name}
            </Link>
            <Typography variant="body2">Status:&nbsp;{data.status}</Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default CharacterCard;
