import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { AppLoading } from 'expo'
import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/nunito'

import Routes from './src/routes'
import {
  PokemonProvider,
  MarkProvider,
  AuthProvider,
  LandingProvider,
} from './src/contexts'

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
    <PokemonProvider>
      <MarkProvider>
        <LandingProvider>
          <View style={{ flex: 1, backgroundColor: '#f1f2f6' }}>
            <NavigationContainer>
              <AuthProvider>
                <Routes />
              </AuthProvider>
            </NavigationContainer>

            <StatusBar style="dark-content" backgroundColor="transparent" />
          </View>
        </LandingProvider>
      </MarkProvider>
    </PokemonProvider>
  )
}
