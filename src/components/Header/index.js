import React from 'react'
import { MaterialCommunityIcons as Icon } from 'expo-vector-icons'
import { useAuth } from '../../contexts'
import { images } from '../../assets'
import colors from '../../styles/colors'
import styles from './styles'

export default () => {
  const { SignOut } = useAuth()

  async function handleLogout() {
    SignOut()
  }

  return (
    <styles.HeaderContainer>
      <styles.Logo resizeMode="contain" source={images.logo} />

      <styles.Logout onPress={handleLogout}>
        <Icon name="logout" color={colors.dark} size={28} />
      </styles.Logout>
    </styles.HeaderContainer>
  )
}
