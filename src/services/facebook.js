import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Facebook from 'expo-facebook'

export async function signUpFacebook() {
  try {
    await Facebook.initializeAsync({
      appId: '970285356792125',
    })

    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile', 'email'],
    })

    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?fields=id,name,picture.type(large)&access_token=${token}`,
      )

      const data = await response.json()

      const user = {
        id: data.id,
        name: data.name,
        image: data.picture.data.url,
      }

      await AsyncStorage.setItem('user', JSON.stringify(user))
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`)
  }
}
