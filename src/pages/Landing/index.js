import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { images } from '../../assets'
import { Button } from '../../components'

import styles from './styles'

export default () => {
  const { navigate } = useNavigation()
  const [checked, setChecked] = useState(true)

  async function toggleCheck() {
    setChecked(!checked)
    await AsyncStorage.setItem('show_landing', checked ? 'check' : 'checked')
  }

  return (
    <styles.LandingContainer>
      <styles.Title>Welcome{'\n'}future trainer</styles.Title>
      <styles.Image resizeMode="contain" source={images.landing} />
      <styles.SubTitle>
        Before to begin capturing your pokemons you need to create a account.
      </styles.SubTitle>
      <styles.Info>
        If you have a account on Github please to use the same github username.
        For we get some informations addtionals.
      </styles.Info>

      <Button
        style={{ marginBottom: 15 }}
        onPress={() => navigate('Signin')}
        title="Continue"
      />

      <styles.ShowLanding>
        <styles.TextLanding>Always show me this page</styles.TextLanding>
        <styles.CheckButton onPress={toggleCheck}>
          <styles.Check source={checked ? images.checked : images.check} />
        </styles.CheckButton>
      </styles.ShowLanding>
    </styles.LandingContainer>
  )
}
