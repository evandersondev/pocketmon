import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  TextMessage,
  Form,
  TextCreateAccount,
  ButtonCreateAccount,
  CreateAccountContainer,
} from './styles'

import { Input, Button } from '../../components'

export default () => {
  const { navigate } = useNavigation()

  function haveAccount() {
    navigate('Signin')
  }

  return (
    <Container>
      <TextMessage>
        Please, you need to use your github username to get some information for
        exmaple: Photo, Bio, Email...
      </TextMessage>
      <Form>
        <Input placeholder="Github username" />
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />

        <Button title="Create account" />
      </Form>

      <CreateAccountContainer>
        <TextCreateAccount>You already have account?</TextCreateAccount>
        <ButtonCreateAccount onPress={haveAccount}>
          <TextCreateAccount style={{ fontWeight: 'bold', color: '#eb4d4b' }}>
            back to login.
          </TextCreateAccount>
        </ButtonCreateAccount>
      </CreateAccountContainer>
    </Container>
  )
}
