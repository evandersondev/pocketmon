import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { images } from '../../assets'
import { Button } from '../../components'

import styles from './styles'

export default () => {
  const { navigate } = useNavigation()

  return (
    <styles.Container>
      <styles.LogoImage resizeMode="contain" source={images.logotipo} />
      <styles.Form>
        <Button
          title="Login with Facebook"
          type="facebook"
          // onPress={signUpFacebook}
        />
      </styles.Form>

      <styles.CreateAccountContainer>
        <styles.TextCreateAccount>Don’t have account?</styles.TextCreateAccount>
        <styles.ButtonCreateAccount>
          <styles.TextCreateAccount
            style={{ fontWeight: 'bold', color: '#eb4d4b' }}
          >
            create here.
          </styles.TextCreateAccount>
        </styles.ButtonCreateAccount>
      </styles.CreateAccountContainer>
    </styles.Container>
  )
}
