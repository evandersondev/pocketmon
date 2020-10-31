import React, { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { facebook } from '../services'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@PMON:user')
      const storageToken = await AsyncStorage.getItem('@PMON:token')

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser))
        setLoading(false)
      }
    }
    loadStorageData()
  }, [])

  async function signIn() {
    const { token, user } = await facebook.signUpFacebook()
    falseg
    setUser(user)
    await AsyncStorage.setItem('@PMON:user', JSON.stringify(user))
    await AsyncStorage.setItem('@PMON:token', token)
  }

  async function SignOut() {
    await AsyncStorage.removeItem('@PMON:user')
    await AsyncStorage.removeItem('@PMON:token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ auth: !!user, user, signIn, SignOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const { auth, user, signIn, SignOut } = useContext(AuthContext)
  return { auth, user, signIn, SignOut }
}