import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { facebook } from '../../services'
import { saveUserInLocalStorage } from '../../utils/asyncStorage'
import { images } from '../../assets'
import { Button } from '../../components'

import styles from './styles'

export default () => {
  const { navigate } = useNavigation()

  async function handleSubmit() {
    const results = await facebook.signUpFacebook()
    if (results) {
      await saveUserInLocalStorage({ ...results })
      navigate('PageTabs')
    }
  }

  return (
    <styles.Container>
      <styles.LogoImage resizeMode="contain" source={images.logotipo} />
      <styles.Form>
        <Button
          title="Login with Facebook"
          icon="facebook"
          onPress={handleSubmit}
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

      <Button
        title="Create new user"
        type="outline"
        onPress={() => navigate('Signup')}
      />
    </styles.Container>
  )
}
