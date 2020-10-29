import React from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Facebook from 'expo-facebook'

import { images } from '../../assets'
import styles from './styles'

export default () => {
  const { navigate } = useNavigation()

  async function handleLogout() {
    const auth = await Facebook.getAuthenticationCredentialAsync()

    if (auth) {
      await Facebook.logOutAsync()
      navigate('Signin')
    }
  }

  return (
    <styles.HeaderContainer>
      <styles.Logo resizeMode="contain" source={images.logo} />

      <styles.Logout onPress={handleLogout}>
        <styles.LogoutImage source={images.logout} />
      </styles.Logout>
    </styles.HeaderContainer>
  )
}
