import React, { createContext, useContext, useState, useEffect } from 'react'
import { shouldToShowLading, checkIfShowLandingInStorage } from '../utils'

const LandingContext = createContext()

export function LandingProvider({ children }) {
  const [check, setCheck] = useState(true)

  async function showLanding() {
    setCheck(!check)
    await shouldToShowLading(!check)
  }

  useEffect(() => {
    async function loadCheck() {
      setCheck(await checkIfShowLandingInStorage())
    }
    loadCheck()
  }, [])

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
