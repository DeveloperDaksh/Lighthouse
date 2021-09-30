import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function DenseAppBar() {
  return (
    <Box style={{ marginLeft: "-8px", width: "101%", marginTop: "-8px" }} sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Toolbar variant="dense">

          <Typography variant="h6" color="inherit" component="div">
            Website info
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
