import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, List, ListItem, RaisedButton } from 'material-ui/';

const Confirm = ({ prevStep, nextStep, userInput }) => {
  const goFoward = e => {
    e.preventDefault();
    nextStep();
    //SEND FORM DATA TO SERVER
  };
  const goBack = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title='Confirm' />
        <List>
          <ListItem
            primaryText='FistName'
            secondaryText={userInput.firstName}
          />
          <ListItem primaryText='LastName' secondaryText={userInput.lastName} />
          <ListItem primaryText='Email' secondaryText={userInput.email} />
          <ListItem
            primaryText='Occupation'
            secondaryText={userInput.occupation}
          />
          <ListItem primaryText='City' secondaryText={userInput.city} />
          <ListItem primaryText='Bio' secondaryText={userInput.bio} />
        </List>
        <RaisedButton
          label='Back'
          primary={false}
          style={myStyles.button}
          onClick={goBack}
        />
        <RaisedButton
          label='Confirm'
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

export default Confirm;
