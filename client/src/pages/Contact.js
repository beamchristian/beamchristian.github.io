import React, { useCallback, useReducer } from 'react';

import Input from '../components/FormElements/Input';
import Button from '../components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../utils/formValidators';
import './FormStyles.css';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const Contact = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      name: {
        value: '',
        isValid: false,
      },
      email: {
        value: '',
        isValid: false,
      },
      message: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const contactSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <div>
      <h1 className="section-title">Contact Me</h1>
      <div className="contact-style">
        <form className="contact-form" onSubmit={contactSubmitHandler}>
          <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name."
            onInput={inputHandler}
          />
          <Input
            id="email"
            element="input"
            label="Email"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email."
            onInput={inputHandler}
          />
          <Input
            id="message"
            element="text-area"
            label="Message"
            validators={[
              VALIDATOR_REQUIRE(),
              VALIDATOR_MINLENGTH(5),
              VALIDATOR_MAXLENGTH(380),
            ]}
            errorText="Please enter a valid message (Must be between 5 and 380 characters)."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
