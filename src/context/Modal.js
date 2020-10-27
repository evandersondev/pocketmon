import React, { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export default function ModalProvider({ children }) {
  const [modal, setModal] = useState({
    enable: false,
  })

  const showModal = () => {
    setModal({ enable: true })
  }

  const closeModal = () => {
    setModal({ enable: false })
  }

  return (
    <ModalContext.Provider value={{ modal, showModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const { modal, showModal, closeModal } = useContext(ModalContext)
  return { modal, showModal, closeModal }
}
