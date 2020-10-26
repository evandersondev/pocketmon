import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import List from '../pages/List'
import Pokedex from '../pages/Pokedex'
import Profile from '../pages/Profile'

// Icons
import EggIcon from '../assets/images/icons/egg.png'
import PokeballIcon from '../assets/images/icons/pokeball.png'
import ProfileIcon from '../assets/images/icons/profile.png'

import EggIconSelected from '../assets/images/icons/egg-selected.png'
import PokeballIconSelected from '../assets/images/icons/pokeball-selected.png'
import ProfileIconSelected from '../assets/images/icons/profile-selected.png'

import colors from '../styles/colors'

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
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        activeBackgroundColor: colors.gray,
        inactiveBackgroundColor: colors.ligth,
      }}
    >
      <Screen
        name="List"
        component={List}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={EggIconSelected} />
            ) : (
              <Image source={EggIcon} />
            )
          },
        }}
      />
      <Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={PokeballIconSelected} />
            ) : (
              <Image source={PokeballIcon} />
            )
          },
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={ProfileIconSelected} />
            ) : (
              <Image source={ProfileIcon} />
            )
          },
        }}
      />
    </Navigator>
  )
}

export default PageTabs
