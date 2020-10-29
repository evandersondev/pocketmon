import React from 'react'

import styles from './styles'

export default ({ icon, type = 'text', ...rest }) => (
  <styles.InputContainer>
    <styles.ImageContainer>
      <styles.InputIcon resizeMode="cover" source={icon} />
    </styles.ImageContainer>
    <styles.Input {...rest} type={type} autoCompleteType="off" />
  </styles.InputContainer>
)
