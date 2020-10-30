import React from 'react'
import { images } from '../../assets'
import styles from './styles'

export default ({ title, type, icon, ...rest }) => (
  <styles.ButtonContainer type={type} icon={icon} {...rest}>
    {icon && (
      <styles.IconButton resizeMode="contain" source={images.facebook} />
    )}
    <styles.TextButton type={type}>{title}</styles.TextButton>
  </styles.ButtonContainer>
)
