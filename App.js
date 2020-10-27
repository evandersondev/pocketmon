import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { AppLoading } from 'expo'
import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/nunito'

import AppStack from './src/routes/AppStack'
import ModalProvider from './src/context/Modal'

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
    <ModalProvider>
      <View style={{ flex: 1, backgroundColor: '#f1f2f6' }}>
        <AppStack />

        <StatusBar style="dark-content" backgroundColor="transparent" />
      </View>
    </ModalProvider>
  )
}
