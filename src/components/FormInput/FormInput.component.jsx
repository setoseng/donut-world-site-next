import React from 'react'

import {
  FormInputLabel,
  Input,
  Group,
} from './FormInput.styles'

const FormInput = ({label, inputOption}) => {
  return (
    <Group>
      <Input {...inputOption}/>
      {label &&
        <FormInputLabel>{label}</FormInputLabel>
      }
    </Group>
  )
}

export default FormInput