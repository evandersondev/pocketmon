import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { useAuth } from '../../contexts'
import { images } from '../../assets'
import { Button, Input } from '../../components'

import styles from './styles'

const app = require('../../../app.json')

export default () => {
  const { signIn } = useAuth()
  const [username, setUserName] = useState('')

  async function handleSubmit() {
    await signIn(username)
  }

  function changeInput(value) {
    setUserName(value)
  }

  return (
    <styles.Container>
      <KeyboardAvoidingView behavior="position" />

      <styles.Form>
        <styles.LogoImage resizeMode="contain" source={images.logotipo} />
        <Input
          placeholder="Github username"
          value={username}
          onChangeText={changeInput}
        />
        <Button
          title="Login"
          // icon="facebook"
          onPress={handleSubmit}
        />
      </styles.Form>

      <styles.VersionInfoContainer>
        <styles.VersionInfoText>
          version {app.expo.version}
        </styles.VersionInfoText>
      </styles.VersionInfoContainer>
    </styles.Container>
  )
}
