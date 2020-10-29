import React from 'react'
import { images } from '../../assets'
import styles from './styles'

export default ({ icon, type = 'text', ...rest }) => (
  <styles.InputContainer>
    <styles.ImageContainer>
      <styles.InputIcon resizeMode="cover" source={images[icon]} />
    </styles.ImageContainer>
    <styles.Input {...rest} type={type} autoCompleteType="off" />
  </styles.InputContainer>
)
