import React, { useState, useEffect } from 'react'
import { Header } from '../../components'

import { ListContainer, ListView } from './styles'

export default () => {
  return (
    <ListContainer>
      <Header />
      <ListView />
    </ListContainer>
  )
}
