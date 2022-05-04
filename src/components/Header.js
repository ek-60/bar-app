import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Header() {
  return (
    <Box 
    sx={{ 
      flexGrow: 1, 
      marginBottom: 8.5 
      }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 4}}>
            LOGO
          </Typography>
          <Button color="inherit"><ShoppingCartIcon /></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}