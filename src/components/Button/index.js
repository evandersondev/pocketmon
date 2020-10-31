import React from 'react'
import { MaterialCommunityIcons as Icon } from 'expo-vector-icons'
import colors from '../../styles/colors'
import styles from './styles'

export default ({ title, type, icon, ...rest }) => (
  <styles.ButtonContainer type={type} icon={icon} {...rest}>
    {icon && <Icon name="facebook" size={28} color={colors.ligth} />}
    <styles.TextButton type={type}>{title}</styles.TextButton>
  </styles.ButtonContainer>
)
