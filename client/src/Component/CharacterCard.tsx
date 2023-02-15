import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import { CharacterCardProps, characterType } from '../Utils/types';

const CharacterCard = ({ data }: CharacterCardProps) => {
  const [hover, sethover] = useState(false);

  const mapStatusAndSpices = (data: characterType): JSX.Element => {
    const iconColor = data.status === 'Alive' ? '#228B22' : '#FF0000';
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '20px'
        }}
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
      >
        {!hover && (
          <>
            <CircleIcon
              sx={{
                color: iconColor,
                fontSize: '12px',
                marginRight: '5px'
              }}
            />
            <Typography component={'span'} variant="body2">
              {data.status}
            </Typography>
          </>
        )}
        {hover && (
          <Button
            sx={{
              height: '20px'
            }}
            variant="outlined"
            href={data.url}
            target="_blank"
          >
            More Info
          </Button>
        )}
      </Box>
    );
  };

  return (
    <Grid
      item
      sm={6}
      md={4}
      lg={3}
      key={data.id}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          width: '230px',
          height: '230px',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '12px',
          backgroundColor: '	#3C415C',
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
            borderRadius: '15px'
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
          <Typography
            component={'span'}
            variant="h6"
            sx={{
              color: '#D3D3D3'
            }}
          >
            {data.name}
          </Typography>
          {mapStatusAndSpices(data)}
        </Box>
      </Box>
    </Grid>
  );
};

export default CharacterCard;
