import React from 'react'
import { useNavigation } from '@react-navigation/native'

import LogoImage from '../../assets//images/logo.png'
import LogoutIcon from '../../assets/images/icons/logout.png'

import { HeaderContainer, Logo, Logout, LogoutImage } from './styles'

export default () => {
  const { navigate } = useNavigation()

  function handleLogout() {
    navigate('Signin')
  }

  return (
    <HeaderContainer>
      <Logo resizeMode="contain" source={LogoImage} />

      <Logout onPress={handleLogout}>
        <LogoutImage source={LogoutIcon} />
      </Logout>
    </HeaderContainer>
  )
}
