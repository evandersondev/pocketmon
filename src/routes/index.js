import React from 'react'
import { useAuth } from '../contexts'
import AuthStack from './AuthStack'
import AppStack from './AppStack'

const Routes = () => {
  const { auth } = useAuth()

  return auth ? <AppStack /> : <AuthStack />
}

export default Routes
