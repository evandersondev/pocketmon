import React from 'react'
import { useNavigation } from '@react-navigation/native'
import LogoImage from '../../assets//images/logo.png'
import LogoutIcon from '../../assets/images/icons/logout.png'

import styles from './styles'

export default () => {
  const { navigate } = useNavigation()

  function handleLogout() {
    navigate('Signin')
  }

  return (
    <styles.HeaderContainer>
      <styles.Logo resizeMode="contain" source={LogoImage} />

      <styles.Logout onPress={handleLogout}>
        <styles.LogoutImage source={LogoutIcon} />
      </styles.Logout>
    </styles.HeaderContainer>
  )
}
