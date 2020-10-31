import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { images } from '../../assets'
import { MaterialCommunityIcons as Icon } from 'expo-vector-icons'
import { Button } from '../../components'
import colors from '../../styles/colors'
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
      <styles.Info>
        To login you need to have an account on Facebook, for we get some
        informations additionals.
      </styles.Info>

      <Button
        style={{ marginBottom: 15 }}
        onPress={() => navigate('Signin')}
        title="Continue"
      />

      <styles.ShowLanding>
        <styles.TextLanding>Always show me this page</styles.TextLanding>
        <styles.CheckButton onPress={toggleCheck}>
          {checked ? (
            <Icon name="check-box-outline" color={colors.dark} size={24} />
          ) : (
            <Icon name="checkbox-blank-outline" color={colors.dark} size={24} />
          )}
        </styles.CheckButton>
      </styles.ShowLanding>
    </styles.LandingContainer>
  )
}
