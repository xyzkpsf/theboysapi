import React from 'react';
import Box from '@mui/material/Box';
import ReactJson from 'react-json-view';
import { THEME_COLOR } from '../Style';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link/Link';

const responseExample = {
  id: 8,
  name: 'Homelander',
  real_name: 'John',
  species: ['Supe'],
  citizenship: 'American',
  gender: 'Male',
  status: 'Alive',
  affiliation: [
    {
      name: 'The Seven',
      url: 'https://www.theboysapi.com/api/affiliation/2',
      is_former: false
    }
  ],
  families: [
    {
      name: 'Jonah Vogelbaum',
      url: 'https://www.theboysapi.com/api/character/57',
      relationship: 'father figure'
    },
    {
      name: 'Soldier Boy',
      url: 'https://www.theboysapi.com/api/character/20',
      relationship: 'biological father'
    },
    {
      name: 'Ryan Butcher',
      url: 'https://www.theboysapi.com/api/character/47',
      relationship: 'son'
    }
  ],
  portrayed: ['Antony Starr'],
  first_seen: {
    name: 'The Name of the Game',
    url: 'https://www.theboysapi.com/api/episode/1'
  },
  last_seen: {
    name: 'The Instant White-Hot Wild',
    url: 'https://www.theboysapi.com/api/episode/24'
  },
  season: ['1', '2', '3'],
  image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_8.jpg',
  url: 'https://www.theboysapi.com/api/character/8'
};

const drawerWidth = 200;
const subTitle = ['Base URL', 'Available Resource', 'Pagination', 'Filters', 'Rate Limiting'];
const subTitleIdMap: { [key: string]: string } = {
  'Base URL': 'baseUrl',
  'Available Resource': 'availableResource',
  Pagination: 'pagination',
  Filters: 'filters',
  'Rate Limiting': 'rateLimiting'
};
function Docs() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: THEME_COLOR.BACKGROUND_COLOR,
        height: `calc(100vh - 80px)`
      }}
    >
      <Drawer
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '64px', height: `calc(100vh - 64px)`, backgroundColor: THEME_COLOR.BACKGROUND_COLOR, position: 'absolute' }
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {['Introduction', 'Overview', 'Base URL', 'Available Resource', 'Pagination', 'Filters', 'Rate Limiting'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {subTitle.includes(text) ? (
                  <Box
                    sx={{
                      marginLeft: '10px'
                    }}
                  >
                    <Link href={`/docs/#${subTitleIdMap[text]}`} underline="none">
                      <ListItemText primary={<Typography style={{ fontSize: '13px' }}>{text}</Typography>} />
                    </Link>
                  </Box>
                ) : (
                  <ListItemText primary={text} />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        sx={{
          height: '100%vh',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'left',
          alignItems: 'start',
          marginLeft: `${drawerWidth}px`,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Box
          sx={{
            height: `calc(100vh - 80px)`,
            overflow: 'auto',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              width: '80%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography variant="h2">Documentation</Typography>
            <br />
            <Typography variant="h4">Introduction</Typography>
            <br />
            <Typography variant="body1">This documentation offers a quick overview of the API, and a few examples of how to use it. Please take a look before proceeding and have fun!</Typography>
            <br />
            <Typography variant="h4">Overview</Typography>
            <br />

            <Typography variant="h6">Authentication</Typography>
            <br />
            <Typography variant="body1">This is a free open source project that does not require any authentication or API key to access.</Typography>

            <br />
            <Typography variant="h6">Rate Limit</Typography>
            <br />
            <Typography variant="body1">
              To prevent abuse and ensure that the API can continue to serve all users, there is a rate limit in place. The rate limit for this API is 10,000 requests per IP address per day. If you
              exceed this limit, you will receive a 429 Too Many Requests error response. If you think you need a higher rate limit, please contact me.
            </Typography>
            <br />
            <Typography variant="h6">Request</Typography>
            <br />
            <Typography variant="body1">This API only accepts HTTP GET requests.</Typography>
            <br />
            <div id={'baseUrl'}>
              <Typography variant="h6">Base URL</Typography>
            </div>
            <br />
            <Box component="span" sx={{ display: 'block' }}>
              https://www.theboysapi.com/api
            </Box>
            <br />
            <Typography variant="body1">There are three available resources:</Typography>
            <br />
            <Box component="span" sx={{ display: 'block', marginBottom: '5px' }}>
              Characters (link to character schema): https://www.theboysapi.com/api/character
            </Box>
            <Box component="span" sx={{ display: 'block', marginBottom: '5px' }}>
              Affiliations (link to character affiliation): https://www.theboysapi.com/api/affiliation
            </Box>
            <Box component="span" sx={{ display: 'block' }}>
              Episodes (link to character episode): https://www.theboysapi.com/api/episode
            </Box>

            <br />
            <Typography variant="h6">Response</Typography>
            <br />
            <Typography variant="body1">The response will be in JSON format and will contain the requested data. Here's an example of a response:</Typography>
            <br />
            <Typography sx={{ background: 'black' }} variant="body1">
              GET https://www.theboysapi.com/api/character/8
            </Typography>
            <br />
            <ReactJson src={responseExample} theme="pop" enableClipboard={false} displayDataTypes={false} />

            <br />
            <Typography variant="h6">Pagination</Typography>
            <br />
            <Typography variant="body1"></Typography>

            {/* {
              "metadata": {
                "count": 826,
                "pages": 42,
                "next": "https://rickandmortyapi.com/api/character/?page=2",
                "prev": null
              },
              "items": [
                // ...
              ]
            } */}

            <br />
            <Typography variant="h6"></Typography>
            <br />
            <Typography variant="body1"></Typography>


          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Docs;
