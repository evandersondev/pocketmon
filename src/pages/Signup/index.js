import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import styles from './styles'

import { Input, Button } from '../../components'
import { Alert } from 'react-native'

export default () => {
  const { navigate } = useNavigation()
  const [form, setForm] = useState({
    username: '',
    email: '',
    phone: '',
  })

  function goToGithub() {
    Linking.openURL('http://github.com')
  }

  async function handleFormSubmit() {
    const arrayForm = Object.values(form)
    arrayForm.map(value => {
      if (value === '') {
        return Alert.alert(
          'Sorry but only one an input can be empty! Check the fields and try again',
        )
      } else {
        navigate('Signin', { form })
      }
    })
  }

  return (
    <styles.Container>
      <styles.TextMessage>
        First of all we need some information to fill in your profile data. It
        would be interesting if you had an account at Github.
      </styles.TextMessage>
      <styles.Form>
        <Input
          icon="user"
          name="username"
          placeholder="Github username"
          value={form.username}
          onChangeText={value => setForm({ ...form, username: value })}
        />
        <Input
          icon="email"
          name="email"
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChangeText={value => setForm({ ...form, email: value })}
        />
        <Input
          icon="phone"
          name="phone"
          keyboardType="numeric"
          maxLength={9}
          placeholder="Phone|Optional"
          value={form.phone}
          onChangeText={value => setForm({ ...form, phone: value })}
        />

        <Button onPress={handleFormSubmit} title="Next" />
      </styles.Form>

      <styles.CreateAccountContainer>
        <styles.TextCreateAccount>
          Don’t have account on Github?
        </styles.TextCreateAccount>
        <styles.ButtonCreateAccount onPress={goToGithub}>
          <styles.TextCreateAccount
            style={{ fontWeight: 'bold', color: '#eb4d4b' }}
          >
            click here.
          </styles.TextCreateAccount>
        </styles.ButtonCreateAccount>
      </styles.CreateAccountContainer>
    </styles.Container>
  )
}
