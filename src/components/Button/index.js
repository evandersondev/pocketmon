import React from 'react'
import { images } from '../../assets'
import styles from './styles'

export default ({ title, type, ...rest }) => (
  <styles.ButtonContainer type={type} {...rest}>
    {type && (
      <styles.IconButton resizeMode="contain" source={images.facebook} />
    )}
    <styles.TextButton>{title}</styles.TextButton>
  </styles.ButtonContainer>
)
