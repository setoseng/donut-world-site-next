import React, { useState } from 'react'

import FormInput from '../FormInput/FormInput.component'
import Button from '../Button/Button.component'

import { SignUpContainer} from './SignUpForm.styles'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils'

const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetForm = () => setFormFields(defaultFormField);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      let { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, {displayName})
      resetForm();
      alert('Shits working Yo');
    }
    catch(error) {
      if(error.code === 'auth/email-already-in-use') alert('Cannot create user, Email already in use');
      console.log('User creation error', error);
    }

  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <SignUpContainer>
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
        <Button type="submit">Submit</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignInForm