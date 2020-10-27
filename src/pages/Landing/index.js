import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { useNavigation } from '@react-navigation/native'

import LandingImage from '../../assets/images/landing.png'
import CheckIcon from '../../assets/images/icons/check.png'
import CheckedIcon from '../../assets/images/icons/checked.png'
import { Button } from '../../components'

import {
  LandingContainer,
  Title,
  Image,
  SubTitle,
  Info,
  ShowLanding,
  TextLanding,
  Check,
  CheckButton,
} from './styles'

export default () => {
  const [checked, setChecked] = useState(true)

  async function toggleCheck() {
    setChecked(!checked)
    await AsyncStorage.setItem('show_landing', checked ? 'check' : 'checked')
  }

  return (
    <LandingContainer>
      <Title>Welcome{'\n'}future trainer</Title>
      <Image resizeMode="contain" source={LandingImage} />
      <SubTitle>
        Before to begin capturing your pokemons you need to create a account.
      </SubTitle>
      <Info>
        If you have a account on Github please to use the same github username.
        For we get some informations addtionals.
      </Info>

      <Button style={{ marginBottom: 15 }} title="Continue" />

      <ShowLanding>
        <TextLanding>Always show me this page</TextLanding>
        <CheckButton onPress={toggleCheck}>
          <Check source={checked ? CheckedIcon : CheckIcon} />
        </CheckButton>
      </ShowLanding>
    </LandingContainer>
  )
}
