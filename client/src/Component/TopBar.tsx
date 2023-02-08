import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { styled, alpha } from '@mui/material/styles';
import { THEME_COLOR } from '../Style';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../assets/logo_3.svg';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Docs', 'About'];

export default function DrawerAppBar(props: Props) {
  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (item: string | null) => {
    if (item) {
      navigate(`/${item.toLowerCase()}`);
    } else {
      navigate(`/`);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ height: '160', color: 'white' }}>
        <Box sx={{ display: 'flex', height: '50px', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
          <img src={logo} alt={'logo'} />
        </Box>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={item}
                onClick={() => {
                  console.log(`Click on ${item}`);
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', backgroundColor: THEME_COLOR.BACKGROUND_COLOR }}>
      <AppBar component="nav" elevation={0} position="static">
        <Toolbar sx={{ color: THEME_COLOR.SECONDARY, backgroundColor: THEME_COLOR.BACKGROUND_COLOR }}>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, height: '50px' }}>
            <img
              style={{ cursor: 'pointer' }}
              src={logo}
              alt={'logo'}
              height={'50px'}
              onClick={() => {
                handleNavClick(null);
              }}
            />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: '#fff' }}
                onClick={() => {
                  handleNavClick(item);
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/*  <Box component="nav">*/}
      {/*    <Drawer*/}
      {/*      container={container}*/}
      {/*      variant="temporary"*/}
      {/*      open={mobileOpen}*/}
      {/*      onClose={handleDrawerToggle}*/}
      {/*      ModalProps={{*/}
      {/*        keepMounted: true, // Better open performance on mobile.*/}
      {/*      }}*/}
      {/*      sx={{*/}
      {/*        display: { xs: "block", sm: "none" },*/}
      {/*        "& .MuiDrawer-paper": {*/}
      {/*          boxSizing: "border-box",*/}
      {/*          width: drawerWidth,*/}
      {/*        },*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      {drawer}*/}
      {/*    </Drawer>*/}
      {/*  </Box>*/}
    </Box>
  );
}

// todo: 1.add btn in B icon, 2.add docs, 3.add about, 4.finalize the style
