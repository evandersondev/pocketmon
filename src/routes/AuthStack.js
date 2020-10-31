import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Signin from '../pages/Signin'

const { Navigator, Screen } = createStackNavigator()

export default () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Signin" component={Signin} />
    </Navigator>
  )
}
