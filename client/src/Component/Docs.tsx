import { useState } from 'react';
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
import { paginationExample, responseExample } from '../Utils/utils';

const allResources: { [key: string]: string } = {
  Characters: 'https://www.theboysapi.com/api/character',
  Affiliations: 'https://www.theboysapi.com/api/affiliation',
  Episodes: 'https://www.theboysapi.com/api/episode'
};

const paginationAttributes = [
  'results: An array of items returned in the current page.',
  'count: The total number of response items for that request.',
  'pages: The total amount of pages.',
  'prev: The URL of the previous page if it exists, otherwise null.',
  'next: The URL of the next page if it exists, otherwise null.'
];

const characterFilter = ['name', 'real_name', 'species', 'citizenship', 'gender', 'status', 'season'];

const drawerWidth = 200;

function Docs() {
  const [openIntro, setOpenIntro] = useState(false);
  const [openCharacter, setOpenCharacter] = useState(false);
  const [openAffiliation, setOpenAffiliation] = useState(false);
  const [openEpisode, setOpenEpisode] = useState(false);

  const menuItems: { [key: string]: { open: boolean; handleClick: any; subMenu: [string, string][] } } = {
    Introduction: {
      open: openIntro,
      handleClick: () => {
        setOpenIntro(!openIntro);
      },
      subMenu: [
        ['Authentication', 'authentication'],
        ['Rate Limit', 'rateLimit'],
        ['Request', 'request'],
        ['Base URL', 'baseURL'],
        ['Response', 'response'],
        ['Pagination', 'pagination']
      ]
    },
    Character: {
      open: openCharacter,
      handleClick: () => {
        setOpenCharacter(!openCharacter);
      },
      subMenu: [
        ['Character schema', 'characterSchema'],
        ['Get all characters', 'getAllCharacters'],
        ['Get one character', 'getOneCharacter'],
        ['Get multiple characters', 'getMultipleCharacters'],
        ['Get character by filters', 'getCharacterByFilters']
      ]
    },
    Affiliation: {
      open: openAffiliation,
      handleClick: () => {
        setOpenAffiliation(!openAffiliation);
      },
      subMenu: [
        ['Affiliation schema', 'affiliationSchema'],
        ['Get all affiliations', 'getAllAffiliations'],
        ['Get one affiliation', 'getOneAffiliation'],
        ['Get multiple affiliations', 'getMultipleAffiliations'],
        ['Get affiliation by filters', 'getAffiliationByFilters']
      ]
    },
    Episode: {
      open: openEpisode,
      handleClick: () => {
        setOpenEpisode(!openEpisode);
      },
      subMenu: [
        ['Episode schema', 'episodeSchema'],
        ['Get all episodes', 'getAllEpisodes'],
        ['Get one episode', 'getOneEpisode'],
        ['Get multiple episodes', 'getMultipleEpisodes'],
        ['Get episode by filters', 'getEpisodeByFilters']
      ]
    }
  };

  const renderMenu = () => {
    return (
      <List component="nav" aria-labelledby="menu_item">
        {Object.keys(menuItems).map((key) => (
          <>
            <ListItemButton dense onClick={menuItems[key].handleClick}>
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
                <Link href={`/docs/#${submenu[1]}`} underline="none">
                  <ListItemText
                    primary={submenu[0]}
                    key={`${submenu[0]}-submenu`}
                    sx={{
                      marginLeft: '20px',
                      fontSize: '10px'
                    }}
                  />
                </Link>
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

            <Typography variant="h6" id="authentication">
              Authentication
            </Typography>
            <br />
            <Typography variant="body1">This is a free open source project that does not require any authentication or API key to access.</Typography>

            <br />
            <Typography variant="h6" id="rateLimit">
              Rate Limit
            </Typography>
            <br />
            <Typography variant="body1">
              To prevent abuse and ensure that the API can continue to serve all users, there is a rate limit in place. The rate limit for this API is 10,000 requests per IP address per day. If you
              exceed this limit, you will receive a 429 Too Many Requests error response. If you think you need a higher rate limit, please contact me.
            </Typography>
            <br />
            <Typography variant="h6" id="request">
              Request
            </Typography>
            <br />
            <Typography variant="body1">This API only accepts HTTP GET requests.</Typography>
            <br />
            <div id={'baseUrl'}>
              <Typography variant="h6" id="baseURL">
                Base URL
              </Typography>
            </div>
            <br />
            <Box component="span" sx={{ display: 'block' }}>
              https://www.theboysapi.com/api
            </Box>
            <br />
            <Typography variant="body1">There are three available resources:</Typography>
            <br />
            <List style={{ listStyle: 'disc' }} sx={{ marginLeft: '20px' }}>
              {Object.keys(allResources).map((key) => (
                <ListItem key={key} style={{ display: 'list-item' }}>
                  <Box display="flex">
                    <Typography variant="body1">{key}</Typography>
                    <Link
                      variant="body1"
                      href={allResources[key]}
                      sx={{
                        marginLeft: '20px'
                      }}
                    >
                      {allResources[key]}
                    </Link>
                  </Box>
                </ListItem>
              ))}
            </List>

            <br />
            <Typography variant="h6" id="response">
              Response
            </Typography>
            <br />
            <Typography variant="body1">The response will be in JSON format and will contain the requested data. Here's an example of a response:</Typography>
            <br />
            <Typography sx={{ background: 'black' }} variant="body1">
              <Box display="flex" id="getOneCharacterExample">
                <Typography variant="body1">GET</Typography>
                <Link
                  variant="body1"
                  href="https://www.theboysapi.com/api/character/8"
                  sx={{
                    marginLeft: '20px'
                  }}
                >
                  https://www.theboysapi.com/api/character/8
                </Link>
              </Box>
            </Typography>
            <br />
            <ReactJson src={responseExample} name={false} theme="pop" enableClipboard={false} displayDataTypes={false} />

            <br />
            <Typography variant="h6" id="pagination">
              Pagination
            </Typography>
            <br />
            <Typography variant="body1">
              The response format of the API will return a maximum of 20 items per page. If the number of items in the result set is greater or equal than 20, the response will contain a pagination
              object with details on the current page, the total number of pages and the next and previous pages.
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
            <Typography variant="h6">Example Paginated Response</Typography>
            <br />
            <Typography sx={{ background: 'black' }} variant="body1">
              <Box display="flex" id="getAllCharacterExample">
                <Typography variant="body1">GET</Typography>
                <Link
                  variant="body1"
                  href="https://www.theboysapi.com/api/character"
                  sx={{
                    marginLeft: '20px'
                  }}
                >
                  https://www.theboysapi.com/api/character
                </Link>
              </Box>
            </Typography>
            <br />
            <ReactJson src={paginationExample} name={false} collapsed={1} theme="pop" enableClipboard={false} displayDataTypes={false} />

            <br />
            <br />
            <Typography variant="h4">Character</Typography>
            <br />
            <Typography variant="body1">There are total 73 available characters.</Typography>
            <br />

            <Typography variant="h6" id="characterSchema">
              Character schema
            </Typography>
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
            <Typography variant="h6" id="getAllCharacters">
              Get all characters
            </Typography>
            <br />
            <Box display="flex">
              <Typography variant="body1">See example</Typography>
              <Link
                href={`/docs/#getAllCharacterExample`}
                variant="body1"
                sx={{
                  marginLeft: '5px'
                }}
              >
                here
              </Link>
            </Box>
            <br />
            <Typography variant="h6" id="getOneCharacter">
              Get one character by id
            </Typography>
            <br />
            <Box display="flex">
              <Typography variant="body1">You can get a specific character by the id. Check example </Typography>
              <Link
                href={`/docs/#getOneCharacterExample`}
                variant="body1"
                sx={{
                  marginLeft: '5px'
                }}
              >
                here
              </Link>
            </Box>
            <br />
            <Typography variant="h6" id="getMultipleCharacters">
              Get multiple characters
            </Typography>
            <br />
            <Typography variant="body1">You can get multiple characters by adding multiple ids, seperated by comma like: /character/1,3,5, or by an array of ids, like /character/[1,3,5]</Typography>
            <Typography variant="body1">Noticed invalid id will be ignored</Typography>
            <br />
            <Typography variant="h6" id="getCharacterByFilters">
              Get character by filters
            </Typography>
            <br />
            <Box display="flex" sx={{ flexDirection: 'column' }}>
              <Typography variant="body1">
                You can filter character data by passing query parameters. To add a single query parameter, append a "?" symbol to the end of the API endpoint, followed by the name of the query
                parameter, an equals sign "=", and the value of the query parameter. To add multiple query parameters, separate each query parameter with an ampersand symbol "&". For example:
                character/?gender=Male&status=Alive
              </Typography>
            </Box>
            <br />
            <Typography variant="body1">Todo: Add a table of character filter here</Typography>
            <br />

            <br />
            <br />
            <Typography variant="h4">Affiliation</Typography>
            <br />
            <Typography variant="body1">There are total xx available affiliations.</Typography>
            <br />

            <Typography variant="h6" id="affiliationSchema">
              Affiliation schema
            </Typography>
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
            <Typography variant="h6" id="getAllAffiliations">
              Get all affiliations
            </Typography>
            <br />
            <Typography variant="body1">You can get all affiliations with below request</Typography>
            <br />
            <Typography variant="h6" id="getOneAffiliation">
              Get one affiliation by id
            </Typography>
            <br />
            <Typography variant="body1">You can get a specific affiliation by the id. Check above example above(add a link to homelander)</Typography>
            <br />
            <Typography variant="h6" id="getMultipleAffiliations">
              Get multiple affiliations
            </Typography>
            <br />
            <Typography variant="body1">You can get multiple affiliations by adding multiple ids, seperated by comma like: /character/1,3,5, or by an array of ids, like /character/[1,3,5]</Typography>
            <Typography variant="body1">Noticed invalid id will be ignored</Typography>
            <br />
            <Typography variant="h6" id="getAffiliationByFilters">
              Get affiliation by filters
            </Typography>
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

            <Typography variant="h6" id="episodeSchema">
              Episode schema
            </Typography>
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
            <Typography variant="h6" id="getAllEpisodes">
              Get all episodes
            </Typography>
            <br />
            <Typography variant="body1">You can get all episodes with below request</Typography>
            <br />
            <Typography variant="h6" id="getOneEpisode">
              Get one episode by id
            </Typography>
            <br />
            <Typography variant="body1">You can get a specific episode by the id. Check above example above(add a link to homelander)</Typography>
            <br />
            <Typography variant="h6" id="getMultipleEpisodes">
              Get multiple episodes
            </Typography>
            <br />
            <Typography variant="body1">You can get multiple episodes by adding multiple ids, seperated by comma like: /character/1,3,5, or by an array of ids, like /character/[1,3,5]</Typography>
            <Typography variant="body1">Noticed invalid id will be ignored</Typography>
            <br />
            <Typography variant="h6" id="getEpisodeByFilters">
              Get episode by filters
            </Typography>
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
