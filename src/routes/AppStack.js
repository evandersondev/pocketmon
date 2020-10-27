import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Landing from '../pages/Landing'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Show from '../pages/Show'
import PageTabs from './PageTabs'

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
  const [landgind, setLanding] = useState(false)

  async function showLanding() {
    const value = await AsyncStorage.getItem('show_landing')
    setLanding(value === 'checked' ? true : false)
  }

  useEffect(() => {
    showLanding()
  }, [])

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {landgind ? (
          <Screen name="Landing" component={Landing} />
        ) : (
          <Screen name="Signin" component={Signin} />
        )}
        <Screen name="Signup" component={Signup} />
        <Screen name="Show" component={Show} />
        <Screen name="PageTabs" component={PageTabs} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack
