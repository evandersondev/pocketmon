import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/nunito'
import { AppLoading } from 'expo'
import AppStack from './src/routes/AppStack'

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <AppStack />

      <StatusBar style="dark-content" backgroundColor="transparent" />
    </>
  )
}
