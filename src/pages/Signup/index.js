import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './styles'

import { Input, Button } from '../../components'
import { Alert } from 'react-native'

export default () => {
  const { navigate } = useNavigation()
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })

  function haveAccount() {
    navigate('Signin')
  }

  async function handleFormSubmit() {
    const arrayForm = Object.values(form)
    arrayForm.map(value => {
      if (value === '') {
        return Alert.alert('Some is wwrong', 'vefiry the fildes and try agin!')
      }
    })

    try {
      await AsyncStorage.setItem('user', JSON.stringify(form))
      navigate('Signin')
    } catch (error) {
      Alert.alert('User not created', 'Maybe some information it wrongs!')
    }
  }

  return (
    <styles.Container>
      <styles.TextMessage>
        Please, you need to use your github username to get some information for
        exmaple: Photo, Bio, Email...
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
          icon="password"
          name="password"
          secureTextEntry={true}
          placeholder="Password"
          value={form.password}
          onChangeText={value => setForm({ ...form, password: value })}
        />

        <Button onPress={handleFormSubmit} title="Create account" />
      </styles.Form>

      <styles.CreateAccountContainer>
        <styles.TextCreateAccount>
          You already have account?
        </styles.TextCreateAccount>
        <styles.ButtonCreateAccount onPress={haveAccount}>
          <styles.TextCreateAccount
            style={{ fontWeight: 'bold', color: '#eb4d4b' }}
          >
            back to login.
          </styles.TextCreateAccount>
        </styles.ButtonCreateAccount>
      </styles.CreateAccountContainer>
    </styles.Container>
  )
}
