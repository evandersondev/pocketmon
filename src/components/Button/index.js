import React from 'react'

import styles from './styles'

export default ({ title, ...rest }) => (
  <styles.ButtonContainer {...rest}>
    <styles.TextButton>{title}</styles.TextButton>
  </styles.ButtonContainer>
)
