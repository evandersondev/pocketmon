import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { images } from '../../assets'
import styles from './styles'

export default () => {
  const { navigate } = useNavigation()

  function handleLogout() {
    navigate('Signin')
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
