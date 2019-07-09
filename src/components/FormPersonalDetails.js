import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, TextField, RaisedButton } from 'material-ui/';

const formPersonalDetails = ({
  prevStep,
  nextStep,
  userInput,
  handleChange,
  check
}) => {
  const goFoward = e => {
    e.preventDefault();
    if (check(userInput)) {
      nextStep();
    } else {
      alert('Oops, something went wrong. You must complete all the fields');
    }
  };
  const goBack = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title='Enter personal details' />
        <TextField
          name='occupation'
          hintText='Enter your occupation'
          floatingLabelText='Occupation'
          onChange={e => handleChange(e)}
          defaultValue={userInput.occupation}
        />
        <br />
        <TextField
          name='city'
          hintText='Enter your city'
          floatingLabelText='City'
          onChange={e => handleChange(e)}
          defaultValue={userInput.city}
        />
        <br />
        <TextField
          name='bio'
          hintText='Enter your bio'
          floatingLabelText='Bio'
          onChange={e => handleChange(e)}
          defaultValue={userInput.bio}
        />
        <br />
        <RaisedButton
          label='Back'
          primary={false}
          style={myStyles.button}
          onClick={goBack}
        />
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

export default formPersonalDetails;
