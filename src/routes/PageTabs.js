import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons as Icon } from 'expo-vector-icons'
import colors from '../styles/colors'
import List from '../pages/List'
import Pokedex from '../pages/Pokedex'
import Profile from '../pages/Profile'

const { Navigator, Screen } = createBottomTabNavigator()

function PageTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 30,
          shadowOpacity: 2,
          height: 64,
          backgroundColor: colors.ligth,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        labelStyle: {
          fontFamily: 'Nunito_700Bold',
          fontSize: 11,
        },
        iconStyle: {
          flex: 0,
          width: 25,
          height: 25,
        },
        activeTintColor: colors.primary,
        keyboardHidesTabBar: true,
      }}
    >
      <Screen
        name="List"
        component={List}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ size, color }) => (
            <Icon name="apps" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          tabBarLabel: 'Pokedex',
          tabBarIcon: ({ size, color }) => (
            <Icon name="pokeball" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <Icon name="account-outline" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}

export default PageTabs
