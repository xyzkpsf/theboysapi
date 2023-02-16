import React from 'react';
import Box from '@mui/material/Box';
import { THEME_COLOR } from '../Style';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link/Link';

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
          // paddingLeft: '24px',
          // paddingRight: '24px',
          textAlign: 'left',
          alignItems: 'start',
          marginLeft: `${drawerWidth}px`,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Typography variant="h2">Documentation</Typography>

        <Typography variant="h3">Introduction</Typography>
        <Typography variant="h6">This documentation offers a quick overview of the API, and a few examples of how to use it. Please take a look before proceeding and have fun!</Typography>
        <Typography variant="h3">Overview</Typography>
        <div id={'baseUrl'}>
          <Typography variant="h6">
            {'  '}Base Url
            <Box component="span" sx={{ display: 'block' }}>
              Get https://www.theboysapi.com/api/
            </Box>
          </Typography>
        </div>
        <Typography variant="h6">{'  '}Request and Response Format</Typography>
        <Typography variant="body1">{'  '}This api only accepts https get requests and all responses are in JSON format.</Typography>
        <div id={'availableResource'}>{'  '}Available Sources</div>
        <Typography variant="body1">
          <Box component="span" sx={{ display: 'block' }}>
            {/*// todo display : here*/}
            characters, affiliations, episodes
          </Box>
        </Typography>
        <Box
          id={'filters'}
          sx={{
            marginBottom: '30px'
          }}
        >
          <Typography variant="h6">You can apply filters to all the three available resources.</Typography>
        </Box>
        <div id={'pagination'}>
          <Typography variant="h6">{'  '}Pagination</Typography>
        </div>
        <Box
          id={'rateLimiting'}
          sx={{
            marginBottom: '30px'
          }}
        >
          <Typography variant="h6">
            This is a free and open source API, which has no authentication to access. However, in order to prevent abuse, i have implemented a rate limiting of 10,000 requests per day, if you exceed
            this limit, you will be blocked from accessing the API for 24 hours.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Docs;
