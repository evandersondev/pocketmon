import React from 'react'

import { ButtonContainer, TextButton } from './styles'

export default ({ title, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      <TextButton>{title}</TextButton>
    </ButtonContainer>
  )
}
