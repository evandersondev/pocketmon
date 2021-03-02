import React, { createContext, useContext, useState, useEffect } from 'react'
import { View } from 'react-native'
import { shouldToShowLading, checkIfShowLandingInStorage } from '../utils'

const LandingContext = createContext()

export function LandingProvider({ children }) {
  const [check, setCheck] = useState(true)
  const [loading, setLoading] = useState(true)

  async function showLanding() {
    setCheck(!check)
    await shouldToShowLading(!check)
  }

  async function loadCheck() {
    setLoading(true)
    setCheck(await checkIfShowLandingInStorage())
    setLoading(false)
  }

  useEffect(() => {
    loadCheck()
  }, [])

  if (loading) {
    return <View />
  }

  return (
    <LandingContext.Provider value={{ check, showLanding }}>
      {children}
    </LandingContext.Provider>
  )
}

export function useLanding() {
  const { check, showLanding } = useContext(LandingContext)
  return { check, showLanding }
}
