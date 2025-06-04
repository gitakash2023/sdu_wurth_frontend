import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../assets/sdu_logo.webp';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Why Choose Us', path: '/why-choose-us' },
   { label: 'Services', path: '/services' },
  { label: 'Latest Jobs', path: '/latest-jobs' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Our Partners', path: '/partners' },
  { label: 'Contact Us', path: '/contact-us' },
];

const indianRed = '#CD5C5C';
const indianBlue = '#1A237E';
const lightCream = '#FFF8E1';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: lightCream,
          color: indianRed,
          boxShadow: 'none',
        }}
        elevation={0}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box display="flex" alignItems="center">
            <img
              src={logo}
              alt="Easy Job Logo"
              style={{
                height: '45px',
                marginRight: '10px',
                borderRadius: '50%',
              }}
            />
            <Box
              component="span"
              sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: indianRed }}
            >
              SDU_WURTH_WAREHOUSE
            </Box>
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box display="flex" alignItems="center" gap={2}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: indianRed,
                    fontWeight: 'bold',
                    textTransform: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      color: indianBlue,
                      backgroundColor: 'rgba(26, 35, 126, 0.1)', // indianBlue light hover
                      transform: 'scale(1.05)',
                      transition: 'all 0.3s ease-in-out',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: 0,
                      left: 0,
                      backgroundColor: indianBlue,
                      transition: 'width 0.3s',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton edge="end" onClick={toggleDrawer(true)} sx={{ color: indianRed }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { backgroundColor: lightCream },
        }}
      >
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.path}
              component={Link}
              to={item.path}
              onClick={toggleDrawer(false)}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(26, 35, 126, 0.1)', // light indianBlue hover
                  transition: 'background-color 0.3s',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 'bold', color: indianRed }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
