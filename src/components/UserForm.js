import React, { useState, useReducer } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: '',
      lastName: '',
      email: '',
      occupation: '',
      city: '',
      bio: ''
    }
  );

  const firstCheck = userInput => {
    var passed = true;
    var mailCheck = /\S+@\S+\.\S+/;
    const { firstName, lastName, email } = userInput;
    if (firstName === '') passed = false;
    if (lastName === '') passed = false;
    if (email === '') passed = false;
    passed = mailCheck.test(email);

    return passed;
  };

  const secondCheck = userInput => {
    var passed = true;
    const { occupation, city, bio } = userInput;
    if (occupation === '') passed = false;
    if (city === '') passed = false;
    if (bio === '') passed = false;
    return passed;
  };

  //Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };
  //Proceed to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setUserInput({ [name]: newValue });
    console.log(userInput);
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          userInput={userInput}
          check={firstCheck}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          userInput={userInput}
          check={secondCheck}
        />
      );
    case 3:
      return (
        <Confirm
          prevStep={prevStep}
          nextStep={nextStep}
          userInput={userInput}
        />
      );
    case 4:
      return <Success />;
    default:
      return <p>Loading...</p>;
  }
};

export default UserForm;
