import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { facebook } from '../../services'
import { saveUserInLocalStorage } from '../../utils/asyncStorage'
import { images } from '../../assets'
import { Button } from '../../components'
import styles from './styles'

export default () => {
  const { navigate } = useNavigation()

  async function handleSubmit() {
    const results = await facebook.signUpFacebook()
    if (results) {
      await saveUserInLocalStorage({ ...results })
      navigate('PageTabs')
    }
  }

  return (
    <styles.Container>
      <styles.Form>
        <styles.LogoImage resizeMode="contain" source={images.logotipo} />
        <Button
          title="Login with Facebook"
          icon="facebook"
          onPress={handleSubmit}
        />
      </styles.Form>

      <styles.VersionInfoContainer>
        <styles.VersionInfoText>version 1.0.0</styles.VersionInfoText>
      </styles.VersionInfoContainer>
    </styles.Container>
  )
}
