import React from 'react'

import {
  Container,
  CardContainer,
  PokemonId,
  Info,
  ImagePokemon,
  PokemonName,
  PokemonIdContainer,
} from './styles'

export default ({ item }) => {
  return (
    <Container>
      <CardContainer style={{ elevation: 2 }}>
        <Info>
          <PokemonIdContainer>
            <PokemonId>#{item.id}</PokemonId>
          </PokemonIdContainer>
          <PokemonName>{item.name}</PokemonName>
        </Info>
        <ImagePokemon resizeMode="contain" source={{ uri: item.image }} />
      </CardContainer>
    </Container>
  )
}
