import React, { createContext, useContext, useState } from 'react'

const MarkContext = createContext()

export function MarkProvider({ children }) {
  const [mark, setMark] = useState({
    enable: false,
  })

  const showMark = () => {
    setMark({ enable: true })
  }

  const closeMark = () => {
    setMark({ enable: false })
  }

  return (
    <MarkContext.Provider value={{ mark, showMark, closeMark }}>
      {children}
    </MarkContext.Provider>
  )
}

export function useMark() {
  const { mark, showMark, closeMark } = useContext(MarkContext)
  return { mark, showMark, closeMark }
}
