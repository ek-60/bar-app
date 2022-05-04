import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



export default function Footer() {
  return (
    <Box 
    sx={{ 
      flexGrow: 1, 
      marginTop: 4,
      }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h10" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}