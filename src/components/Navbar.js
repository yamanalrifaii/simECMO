import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../images/logo.svg';

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuType, setMenuType] = React.useState(null);

  const handleMenuOpen = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuType(null);
  };

  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              sx={{
                height: 40,
                marginRight: 2,
              }}
              alt="ECMO Logo"
              src={logo}
            />
            <Box sx={{ display: 'flex' }}>
              <Button
                color="inherit"
                endIcon={<KeyboardArrowDownIcon />}
                onClick={(e) => handleMenuOpen(e, 'product')}
              >
                Product
              </Button>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Marketplace</Button>
              <Button
                color="inherit"
                endIcon={<KeyboardArrowDownIcon />}
                onClick={(e) => handleMenuOpen(e, 'company')}
              >
                Company
              </Button>
            </Box>
          </Box>
          <Button variant="outlined" color="primary">
            Log in
          </Button>
        </Toolbar>
      </AppBar>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {menuType === 'product' && (
          <Box sx={{ p: 2, width: 300 }}>
            <MenuItem onClick={handleMenuClose}>
              <Box>
                <Box sx={{ fontWeight: 'bold' }}>Analytics</Box>
                <Box sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
                  Get a better understanding of your traffic
                </Box>
              </Box>
            </MenuItem>
          </Box>
        )}
        {menuType === 'company' && (
          <Box sx={{ p: 2, width: 300 }}>
            <MenuItem onClick={handleMenuClose}>About</MenuItem>
            <MenuItem onClick={handleMenuClose}>Careers</MenuItem>
          </Box>
        )}
      </Menu>
    </>
  );
}

export default Navbar;
