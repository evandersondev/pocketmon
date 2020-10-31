import * as Facebook from 'expo-facebook'
export async function signUpFacebook() {
  try {
    await Facebook.initializeAsync({
      appId: process.env.APP_ID,
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
        token,
        user: {
          id: results.id,
          name: results.name,
          image: results.picture.data.url,
        },
      }

      return user
    } else {
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`)
  }
}
