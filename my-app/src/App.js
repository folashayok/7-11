import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <p>
        Welcome to the website
        </p>
        
        <img src={logo} className="App-logo" alt="logo" />

        <Button variant="contained" color="secondary">
        Search something fun
        onClick       
        </Button>
       
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" color="secondary" focused />
    </Box>

    

      </header>
    </div>
  );
}

export default App;
