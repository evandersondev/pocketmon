import React, { useEffect, useState } from 'react'
import { Header } from '../../components'
import github from '../../services/github'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { images } from '../../assets'
import styles from './styles'

export default () => {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    ;(async () => {
      const response = await github.getInfoUser('evandersondev')

      setProfile({ ...response })
    })()
  }, [])

  const [checked, setChecked] = useState(true)

  async function toggleCheck() {
    setChecked(!checked)
    await AsyncStorage.setItem(
      'show_landing',
      checked ? images.check : images.checked,
    )
  }
  return (
    <styles.ProfileContainer>
      <Header />
      <styles.TitleSession>Profile</styles.TitleSession>
      <styles.ImageProfile
        resizeMode="contain"
        source={{ uri: profile.avatar_url }}
      />

      <styles.BodyContainer>
        <styles.InfoContainer>
          <styles.LabelInfoText>Username</styles.LabelInfoText>
          <styles.ValueInfoText>{profile.login}</styles.ValueInfoText>
        </styles.InfoContainer>

        <styles.InfoContainer>
          <styles.LabelInfoText>Name</styles.LabelInfoText>
          <styles.ValueInfoText>{profile.name}</styles.ValueInfoText>
        </styles.InfoContainer>

        <styles.InfoContainer>
          <styles.LabelInfoText>E-mail</styles.LabelInfoText>
          <styles.ValueInfoText>evandersondev@gmail.com</styles.ValueInfoText>
        </styles.InfoContainer>

        <styles.InfoContainer>
          <styles.LabelInfoText>Github page</styles.LabelInfoText>
          <styles.ValueInfoText>{profile.html_url}</styles.ValueInfoText>
        </styles.InfoContainer>
      </styles.BodyContainer>

      <styles.ShowLandingContainer>
        <styles.TextLanding>Show me lading page</styles.TextLanding>
        <styles.CheckButton onPress={toggleCheck}>
          <styles.Check source={checked ? images.checked : images.check} />
        </styles.CheckButton>
      </styles.ShowLandingContainer>
    </styles.ProfileContainer>
  )
}
