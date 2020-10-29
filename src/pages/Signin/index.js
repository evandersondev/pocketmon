import React from 'react'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import { Input, Button } from '../../components'
import logotipo from '../../assets/images/logotipo.png'

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
      <styles.LogoImage source={logotipo} />
      <styles.Form>
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />

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
