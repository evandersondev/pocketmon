import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { Header } from '../../components'
import { MaterialCommunityIcons as Icon } from 'expo-vector-icons'
import { getUserInLocalStorage } from '../../utils'
import { useLanding } from '../../contexts'
import styles from './styles'
import colors from '../../styles/colors'

export default () => {
  const isFocused = useIsFocused()
  const { check, showLanding } = useLanding()
  const [user, setUser] = useState({})

  async function loadUserProfile() {
    setUser(await getUserInLocalStorage())
  }

  useEffect(() => {
    loadUserProfile()
  }, [])

  async function toggleCheck() {
    await showLanding()
  }

  return (
    <styles.ProfileContainer>
      {isFocused && user && (
        <>
          <Header />
          <styles.TitleSession>Profile</styles.TitleSession>
          <styles.ImageProfile
            resizeMode="contain"
            source={{ uri: user.image }}
          />

          <styles.BodyContainer>
            <styles.InfoContainer>
              <styles.LabelInfoText>Name</styles.LabelInfoText>
              <styles.ValueInfoText>{user.name}</styles.ValueInfoText>
            </styles.InfoContainer>
          </styles.BodyContainer>

          <styles.AddInfoButton>
            <styles.TextAddInfo>Add more information</styles.TextAddInfo>
            <Icon name="plus" size={28} color={colors.dark} />
          </styles.AddInfoButton>

          <styles.ShowLandingContainer>
            <styles.TextLanding>Show me lading page</styles.TextLanding>
            <styles.CheckButton onPress={toggleCheck}>
              {check ? (
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
