import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import { CharacterCardProps, characterType } from '../Utils/types';
import { THEME_COLOR } from '../Style';

const CharacterCard = ({ data }: CharacterCardProps) => {
  const [hover, sethover] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  const mapStatusAndSpices = (data: characterType): JSX.Element => {
    const iconColor = data.status === 'Deceased' ? '#FF0000' : '#228B22';
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '20px'
        }}
      >
        <CircleIcon
          sx={{
            color: iconColor,
            fontSize: '12px',
            marginRight: '5px'
          }}
        />
        <Typography component={'span'} variant="body1">
          {data.status}
        </Typography>
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
          backgroundColor: THEME_COLOR.PRIMARY,
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'top ease 1s',
          position: 'relative'
        }}
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
      >
        <Box
          component="img"
          sx={{
            width: '200px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '15px',
            transition: 'all .5s ease-in-out',
            transform: hover ? 'scale(1.05)' : 'scale(1)'
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
          <Typography component={'span'} variant="h6" onMouseEnter={() => setLinkHover(true)} onMouseLeave={() => setLinkHover(false)}>
            <Link
              sx={{
                color: linkHover ? THEME_COLOR.SECONDARY : THEME_COLOR.TERTIARY
              }}
              href={data.url}
              underline="none"
              target="_blank"
            >
              {data.name}
            </Link>
          </Typography>
          {mapStatusAndSpices(data)}
        </Box>
      </Box>
    </Grid>
  );
};

export default CharacterCard;
