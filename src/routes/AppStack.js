import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Show from '../pages/Show'
import PageTabs from './PageTabs'
const { Navigator, Screen } = createStackNavigator()

export default () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="PageTabs" component={PageTabs} />
      <Screen name="Show" component={Show} />
    </Navigator>
  )
}
