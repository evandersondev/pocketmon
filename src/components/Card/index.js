import React from 'react'

import {
  CardContainer,
  PokemonId,
  Info,
  ImagePokemon,
  PokemonName,
  PokemonIdContainer,
} from './styles'

export default ({ item, type }) => {
  return (
    <CardContainer type={type} style={{ elevation: 2 }}>
      <Info type={type}>
        <PokemonIdContainer type={type}>
          <PokemonId type={type}>#{item.id}</PokemonId>
        </PokemonIdContainer>
        <PokemonName type={type}>{item.name}</PokemonName>
      </Info>
      <ImagePokemon
        type={type}
        resizeMode="contain"
        source={{ uri: item.image }}
      />
    </CardContainer>
  )
}
