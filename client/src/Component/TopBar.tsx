import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { THEME_COLOR } from '../Style';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../assets/logo_3.svg';

interface Props {
  window?: () => Window;
}

const navItems = ['Docs', 'About'];

export default function DrawerAppBar(props: Props) {
  const navigate = useNavigate();

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
    </Box>
  );
}