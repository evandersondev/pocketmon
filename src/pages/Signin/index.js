import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { images } from '../../assets'
import { Input, Button } from '../../components'
import styles from './styles'

export default () => {
  const { navigate } = useNavigation()

  async function handleFormSubmit() {
    navigate('PageTabs')
  }

  function createAccount() {
    navigate('Signup')
  }

  return (
    <styles.Container>
      <styles.LogoImage source={images.logotipo} />
      <styles.Form>
        <Input icon="email" placeholder="E-mail" />
        <Input icon="password" placeholder="Password" />

        <Button title="Login" onPress={handleFormSubmit} />
      </styles.Form>

      <styles.CreateAccountContainer>
        <styles.TextCreateAccount>Don’t have account?</styles.TextCreateAccount>
        <styles.ButtonCreateAccount onPress={createAccount}>
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
