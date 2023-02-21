import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import { THEME_COLOR } from '../Style';

import SchemaTable from './SchemaTable';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link/Link';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

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

const paginationAttributes = [
  'items: An array of items returned in the current page.',
  'page: The current page number.',
  'total_pages: The total number of pages.',
  'next_page: The URL of the next page if it exists, otherwise null.',
  'previous_page: The URL of the previous page if it exists, otherwise null.'
];

const drawerWidth = 200;
const subTitle = ['Introduction', 'Character', 'Affiliation', 'Episode'];
const subTitleIdMap: { [key: string]: string } = {
  'Base URL': 'baseUrl',
  'Available Resource': 'availableResource',
  Pagination: 'pagination',
  Filters: 'filters',
  'Rate Limiting': 'rateLimiting'
};
function Docs() {
  const [openIntro, setOpenIntro] = useState(false);
  const [openCharacter, setOpenCharacter] = useState(false);
  const [openAffiliation, setOpenAffiliation] = useState(false);
  const [openEpisode, setOpenEpisode] = useState(false);

  const menuItems: { [key: string]: { open: boolean; handleClick: any; subMenu: string[] } } = {
    Introduction: {
      open: openIntro,
      handleClick: () => {
        setOpenIntro(!openIntro);
      },
      subMenu: ['Authentication', 'Rate Limit', 'Request', 'Base URL', 'Response', 'Pagination']
    },
    Character: {
      open: openCharacter,
      handleClick: () => {
        setOpenCharacter(!openCharacter);
      },
      subMenu: ['Character schema', 'Get all characters', 'Get one character', 'Get multiple characters', 'Get character by filters']
    },
    Affiliation: {
      open: openAffiliation,
      handleClick: () => {
        setOpenAffiliation(!openAffiliation);
      },
      subMenu: ['Affiliation schema', 'Get all affiliations', 'Get one affiliation', 'Get multiple affiliations', 'Get affiliation by filters']
    },
    Episode: {
      open: openEpisode,
      handleClick: () => {
        setOpenEpisode(!openEpisode);
      },
      subMenu: ['Episode schema', 'Get all episodes', 'Get one episode', 'Get multiple episodes', 'Get episode by filters']
    }
  };

  const renderMenu = () => {
    return (
      <List component="nav" aria-labelledby="menu_item">
        {Object.keys(menuItems).map((key) => (
          <>
            <ListItemButton dense onClick={menuItems[key].handleClick}>
              {/* todo: add link here */}
              <ListItemText
                primary={key}
                key={`${key}-submenu`}
                sx={{
                  span: {
                    fontSize: '20px'
                  }
                }}
              />
              {menuItems[key].open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={menuItems[key].open} timeout="auto">
              {menuItems[key].subMenu.map((submenu) => (
                <ListItemText
                  primary={submenu}
                  key={`${submenu}-submenu`}
                  sx={{
                    marginLeft: '20px',
                    fontSize: '10px'
                  }}
                />
              ))}
            </Collapse>
          </>
        ))}
      </List>
    );
  };

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
        {renderMenu()}
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
              Characters (add bullet point and link): https://www.theboysapi.com/api/character
            </Box>
            <Box component="span" sx={{ display: 'block', marginBottom: '5px' }}>
              Affiliations (add bullet point and link): https://www.theboysapi.com/api/affiliation
            </Box>
            <Box component="span" sx={{ display: 'block' }}>
              Episodes (add bullet point and link): https://www.theboysapi.com/api/episode
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
            <Typography variant="body1">
              The response format of the API will return a maximum of 20 items per page. If the number of items in the result set is greater than 20, the response will contain a pagination object with
              details on the current page, the total number of pages and the next and previous pages.
            </Typography>
            <br />
            <Typography variant="body1">The response will be a JSON object with the following properties:</Typography>
            <br />
            <List style={{ listStyle: 'disc' }} sx={{ marginLeft: '20px' }}>
              {paginationAttributes.map((text) => (
                <ListItem key={text} style={{ display: 'list-item' }}>
                  <Typography variant="body1">{text}</Typography>
                </ListItem>
              ))}
            </List>
            <br />
            <Typography variant="body1"></Typography>
            <br />
            <Typography variant="h6">Example Response</Typography>
            <br />
            <Typography sx={{ background: 'black' }} variant="body1">
              GET https://www.theboysapi.com/api/character
            </Typography>
            <br />
            <Typography variant="h6">SHOW EXAMPLE RESPONSE HERE</Typography>
            <br />
            <Typography variant="h6">SHow Example on choosing page parameter</Typography>
            <br />

            {/* todo: add pagination example */}
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
            <br />
            <Typography variant="h4">Character</Typography>
            <br />
            <Typography variant="body1">There are total 73 available characters.</Typography>
            <br />

            <Typography variant="h6">Character schema</Typography>
            <br />
            <Box
              sx={{
                height: '900px'
              }}
            >
              <SchemaTable resource={'character'} />
            </Box>
            <br />

            <br />
            <Typography variant="h6">Get all characters</Typography>
            <br />
            <Typography variant="body1">You can get all characters with below request</Typography>
            <br />
            <Typography variant="h6">Get one character by id</Typography>
            <br />
            <Typography variant="body1">You can get a specific character by the id. Check above example above(add a link to homelander)</Typography>
            <br />
            <Typography variant="h6">Get multiple characters</Typography>
            <br />
            <Typography variant="body1">You can get multiple characters by adding multiple ids, seperated by comma like: /character/1,3,5, or by an array of ids, like /character/[1,3,5]</Typography>
            <Typography variant="body1">Noticed invalid id will be ignored</Typography>
            <br />
            <Typography variant="h6">Get character by filters</Typography>
            <br />
            <Typography variant="body1">You can get character by offering filters. Below are accepted filters for Characters</Typography>
            <br />
            <Typography variant="body1">Todo: Add a table of character filter here</Typography>
            <br />

            <br />
            <br />
            <Typography variant="h4">Affiliation</Typography>
            <br />
            <Typography variant="body1">There are total xx available affiliations.</Typography>
            <br />

            <Typography variant="h6">Affiliation schema</Typography>
            <br />
            <Box
              sx={{
                height: '900px'
              }}
            >
              <SchemaTable resource={'affiliation'} />
            </Box>
            <br />

            <br />
            <Typography variant="h6">Get all affiliations</Typography>
            <br />
            <Typography variant="body1">You can get all affiliations with below request</Typography>
            <br />
            <Typography variant="h6">Get one affiliation by id</Typography>
            <br />
            <Typography variant="body1">You can get a specific affiliation by the id. Check above example above(add a link to homelander)</Typography>
            <br />
            <Typography variant="h6">Get multiple affiliations</Typography>
            <br />
            <Typography variant="body1">You can get multiple affiliations by adding multiple ids, seperated by comma like: /character/1,3,5, or by an array of ids, like /character/[1,3,5]</Typography>
            <Typography variant="body1">Noticed invalid id will be ignored</Typography>
            <br />
            <Typography variant="h6">Get affiliation by filters</Typography>
            <br />
            <Typography variant="body1">You can get affiliation by offering filters. Below are accepted filters for Characters</Typography>
            <br />
            <Typography variant="body1">Todo: Add a table of affiliation filter here</Typography>
            <br />

            <br />
            <br />
            <Typography variant="h4">Episode</Typography>
            <br />
            <Typography variant="body1">There are total xx available affiliations.</Typography>
            <br />

            <Typography variant="h6">Episode schema</Typography>
            <br />
            <Box
              sx={{
                height: '900px'
              }}
            >
              <SchemaTable resource={'episode'} />
            </Box>
            <br />

            <br />
            <Typography variant="h6">Get all episodes</Typography>
            <br />
            <Typography variant="body1">You can get all episodes with below request</Typography>
            <br />
            <Typography variant="h6">Get one episode by id</Typography>
            <br />
            <Typography variant="body1">You can get a specific episode by the id. Check above example above(add a link to homelander)</Typography>
            <br />
            <Typography variant="h6">Get multiple episodes</Typography>
            <br />
            <Typography variant="body1">You can get multiple episodes by adding multiple ids, seperated by comma like: /character/1,3,5, or by an array of ids, like /character/[1,3,5]</Typography>
            <Typography variant="body1">Noticed invalid id will be ignored</Typography>
            <br />
            <Typography variant="h6">Get episode by filters</Typography>
            <br />
            <Typography variant="body1">You can get episode by offering filters. Below are accepted filters for Characters</Typography>
            <br />
            <Typography variant="body1">Todo: Add a table of episode filter here</Typography>
            <br />

            <Typography variant="h6"></Typography>
            <br />
            <Typography variant="body1"></Typography>

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
