import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui/';

const Succes = () => {
  return (
    <MuiThemeProvider>
      <AppBar title='Success' />
      <h3>Thank you for your submission</h3>
    </MuiThemeProvider>
  );
};

export default Succes;
