import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
// import MainTabs from './MainTabs'

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Signin" component={Signin} />
        <Screen name="Signup" component={Signup} />
        {/*<Screen name="MainTabs" component={MainTabs} /> */}
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack
