import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import LandingImage from '../../assets/images/landing.png'
import CheckIcon from '../../assets/images/icons/check.png'
import CheckedIcon from '../../assets/images/icons/checked.png'
import { Button } from '../../components'

import styles from './styles'

export default () => {
  const [checked, setChecked] = useState(true)

  async function toggleCheck() {
    setChecked(!checked)
    await AsyncStorage.setItem('show_landing', checked ? 'check' : 'checked')
  }

  return (
    <styles.LandingContainer>
      <styles.Title>Welcome{'\n'}future trainer</styles.Title>
      <styles.Image resizeMode="contain" source={LandingImage} />
      <styles.SubTitle>
        Before to begin capturing your pokemons you need to create a account.
      </styles.SubTitle>
      <styles.Info>
        If you have a account on Github please to use the same github username.
        For we get some informations addtionals.
      </styles.Info>

      <Button style={{ marginBottom: 15 }} title="Continue" />

      <styles.ShowLanding>
        <styles.TextLanding>Always show me this page</styles.TextLanding>
        <styles.CheckButton onPress={toggleCheck}>
          <styles.Check source={checked ? CheckedIcon : CheckIcon} />
        </styles.CheckButton>
      </styles.ShowLanding>
    </styles.LandingContainer>
  )
}
