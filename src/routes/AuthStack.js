import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useLanding } from '../contexts'
import Signin from '../pages/Signin'
import Landing from '../pages/Landing'

const { Navigator, Screen } = createStackNavigator()

export default () => {
  const { check } = useLanding()
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {check && <Screen name="Landing" component={Landing} />}
      <Screen name="Signin" component={Signin} />
    </Navigator>
  )
}
