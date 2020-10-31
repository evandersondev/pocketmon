import React from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Facebook from 'expo-facebook'
import { MaterialCommunityIcons as Icon } from 'expo-vector-icons'
import { useAuth } from '../../contexts'
import { removeDataInStorage } from '../../utils'
import { images } from '../../assets'
import colors from '../../styles/colors'
import styles from './styles'

export default () => {
  const { navigate } = useNavigation()
  const { SignOut } = useAuth()

  async function handleLogout() {
    SignOut()
    // const auth = await Facebook.getAuthenticationCredentialAsync()

    // if (auth) {
    //   await Facebook.logOutAsync()
    //   await removeDataInStorage('user')
    //   navigate('Signin')
    // }
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
