import React from 'react'
import styles from './styles'

export default ({ type = 'text', ...rest }) => (
  <styles.InputContainer>
    <styles.Input {...rest} type={type} autoCompleteType="off" />
  </styles.InputContainer>
)
