import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Signin from '../pages/Signin'
import MapPokemon from '../pages/MapPokemon'
import MainTabs from './MainTabs'

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Signin" component={Signin} />
        {/* <Screen name="MapPokemon" component={MapPokemon} />
        <Screen name="MainTabs" component={MainTabs} /> */}
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack
