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

      const results = await response.json()

      const user = {
        id: results.id,
        image: results.picture.data.url,
        token,
        info: [
          {
            name: results.name,
          },
        ],
      }

      return user
    } else {
      return {}
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`)
  }
}
