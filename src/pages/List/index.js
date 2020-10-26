import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { Header } from '../../components'

import { ListContainer, ListView } from './styles'

export default () => {
  const [pokemos, setPokemos] = useState([])

  useEffect(() => {
    setPokemos(api.getAllPokemos())
  }, [])

  return (
    <ListContainer>
      <Header />
      <ListView />
    </ListContainer>
  )
}
