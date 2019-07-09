import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, TextField, RaisedButton } from 'material-ui/';
import { styles } from 'ansi-colors';

const FormUserDetails = ({ nextStep, userInput, handleChange, check }) => {
  const goFoward = e => {
    e.preventDefault();
    if (check(userInput)) {
      nextStep();
    } else {
      alert('Oops, something went wrong. You must complete all the fields');
    }
  };

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title='Enter user details' />
        <TextField
          name='firstName'
          hintText='Enter your first name'
          floatingLabelText='First Name'
          onChange={e => handleChange(e)}
          defaultValue={userInput.firstName}
        />
        <br />
        <TextField
          name='lastName'
          hintText='Enter your last name'
          floatingLabelText='Last Name'
          onChange={e => handleChange(e)}
          defaultValue={userInput.lastName}
        />
        <br />
        <TextField
          name='email'
          hintText='Enter your email'
          floatingLabelText='Email'
          onChange={e => handleChange(e)}
          defaultValue={userInput.email}
        />
        <br />
        <RaisedButton
          label='Continue'
          primary={true}
          style={myStyles.button}
          onClick={goFoward}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
};

const myStyles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
