import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  LogoImage,
  Form,
  TextCreateAccount,
  ButtonCreateAccount,
  CreateAccountContainer,
} from './styles'

import { Input, Button } from '../../components'
import logotipo from '../../assets/images/logotipo.png'

export default () => {
  const { navigate } = useNavigation()

  async function handleFormSubmit() {}

  function createAccount() {
    navigate('Signup')
  }

  return (
    <Container>
      <LogoImage source={logotipo} />
      <Form>
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />

        <Button title="Login" onPress={handleFormSubmit} />
      </Form>

      <CreateAccountContainer>
        <TextCreateAccount>Don’t have account?</TextCreateAccount>
        <ButtonCreateAccount onPress={createAccount}>
          <TextCreateAccount style={{ fontWeight: 'bold', color: '#eb4d4b' }}>
            create here.
          </TextCreateAccount>
        </ButtonCreateAccount>
      </CreateAccountContainer>
    </Container>
  )
}
