import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import { CharacterCardProps, characterType } from '../Utils/types';

const mapSpices = (species: string[]): JSX.Element[] => {
  return species.map((s) => {
    return (
      <Typography component={'span'} variant="body2">
        {s}
      </Typography>
    );
  });
};

const mapStatusAndSpices = (data: characterType): JSX.Element => {
  const iconColor = data.status === 'Alive' ? '#228B22' : '#FF0000';
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <CircleIcon
        sx={{
          color: iconColor,
          fontSize: '15px',
          marginRight: '5px'
        }}
      />
      <Typography component={'span'} variant="body2">
        {data.status}
      </Typography>
    </Box>
  );
};

const CharacterCard = ({ data }: CharacterCardProps) => {
  return (
    <Grid item sm={6} md={4} lg={3} key={data.id} justifyContent={'center'} alignItems={'center'}>
      <Box
        bgcolor={'#DDDDDD'}
        sx={{
          width: '230px',
          height: '220px',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '8px',
          backgroundColor: '#DDDDDD !important',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
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
            marginTop: '5px',
            display: 'flex',
            flexDirection: 'column',
            fontSize: '20px'
          }}
        >
          <Link href={data.url} variant="h6" color="inherit" underline="none" rel="noopener" target="_blank">
            {data.name}
          </Link>
          {mapStatusAndSpices(data)}
          {/* <Button variant="contained" href={data.url} target="_blank">
            More Info
          </Button> */}
        </Box>
      </Box>
    </Grid>
  );
};

export default CharacterCard;
