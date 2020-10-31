import React from 'react'
import { useAuth } from '../../contexts'
import { images } from '../../assets'
import { Button } from '../../components'
import styles from './styles'

export default () => {
  const { signIn } = useAuth()

  async function handleSubmit() {
    await signIn()
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
