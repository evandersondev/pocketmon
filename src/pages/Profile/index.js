import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { Header } from '../../components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { images } from '../../assets'
import { MaterialCommunityIcons as Icon } from 'expo-vector-icons'
import { getUserInLocalStorage } from '../../utils'
import styles from './styles'
import colors from '../../styles/colors'

export default () => {
  const isFocused = useIsFocused()
  const [profile, setProfile] = useState({})
  const [checked, setChecked] = useState(true)

  async function loadUserProfile() {
    setProfile(await getUserInLocalStorage())
  }

  useEffect(() => {
    loadUserProfile()
  }, [])

  async function toggleCheck() {
    setChecked(!checked)
    await AsyncStorage.setItem(
      'show_landing',
      checked ? images.check : images.checked,
    )
  }

  return (
    <styles.ProfileContainer>
      {isFocused && profile.info && (
        <>
          <Header />
          <styles.TitleSession>Profile</styles.TitleSession>
          <styles.ImageProfile
            resizeMode="contain"
            source={{ uri: profile.image }}
          />

          <styles.BodyContainer>
            {profile?.info.map(item => {
              const keys = Object.keys(item)
              return keys.map(key => (
                <styles.InfoContainer key={key}>
                  <styles.LabelInfoText>{key}</styles.LabelInfoText>
                  <styles.ValueInfoText>{item.name}</styles.ValueInfoText>
                </styles.InfoContainer>
              ))
            })}
          </styles.BodyContainer>

          <styles.AddInfoButton>
            <styles.TextAddInfo>Add more information</styles.TextAddInfo>
            <Icon name="plus" size={28} color={colors.dark} />
          </styles.AddInfoButton>

          <styles.ShowLandingContainer>
            <styles.TextLanding>Show me lading page</styles.TextLanding>
            <styles.CheckButton onPress={toggleCheck}>
              {checked ? (
                <Icon name="check-box-outline" color={colors.dark} size={24} />
              ) : (
                <Icon
                  name="checkbox-blank-outline"
                  color={colors.dark}
                  size={24}
                />
              )}
            </styles.CheckButton>
          </styles.ShowLandingContainer>
        </>
      )}
    </styles.ProfileContainer>
  )
}
