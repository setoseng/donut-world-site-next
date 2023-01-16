import React, { useState } from 'react'

import FormInput from '../FormInput/FormInput.component'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component'

import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup, 
} from '../../utils/firebase.utils'

const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const LogInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetForm = () => setFormFields(defaultFormField);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if(!event.target) return;
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      resetForm();
      alert('User signed in successfully'); 
    }
    catch(error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password');
          break;
        case 'auth/user-not-found':
          alert('User not found');
          break;
        default:
          console.log(error)
      }
    }
  }

  const signInWithGoogle = async (event) => {
    await signInWithGooglePopup();
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
      <FormInput
          label='Display Name'
          inputOption = {{
            type: 'text',
            required: true,
            name: "displayName",
            onChange: handleChange,
            value: displayName,
          }}
        />
        <FormInput
          label='Email'
          inputOption = {{
            type: 'email',
            required: true,
            name: "email",
            onChange: handleChange,
            value: email,
          }}
        />
        <FormInput
          label='Password'
          inputOption = {{
            type: 'password',
            required: true,
            name: "password",
            onChange: handleChange,
            value: password,
          }}
        />
        <FormInput
          label='Confirm Password'
          inputOption = {{
            type: 'password',
            required: true,
            name: "confirmPassword",
            onChange: handleChange,
            value: confirmPassword,
          }}
        />
        <Button type="submit">Log In</Button>
        <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Log In With Google
          </Button>
      </form>
    </div>
  )
}

export default LogInForm