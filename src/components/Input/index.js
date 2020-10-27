import React from 'react'

import {
  InputContainer,
  Input,
  ImageContainer,
  InputIcon,
  TextPassword,
} from './styles'

export default ({ icon, type = 'text', ...rest }) => {
  return (
    <>
      <InputContainer>
        <ImageContainer>
          <InputIcon resizeMode="cover" source={icon} />
        </ImageContainer>
        <Input {...rest} type={type} autoCompleteType="off" />
      </InputContainer>
    </>
  )
}
