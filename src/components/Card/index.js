import React from 'react'
import styles from './styles'

export default ({ pokemon, type }) => (
  <styles.CardContainer type={type} style={{ elevation: 2 }}>
    <styles.Info type={type}>
      <styles.PokemonIdContainer type={type}>
        <styles.PokemonId type={type}>#{pokemon.id}</styles.PokemonId>
      </styles.PokemonIdContainer>
      <styles.PokemonName type={type}>{pokemon.name}</styles.PokemonName>
    </styles.Info>
    <styles.ImagePokemon
      type={type}
      resizeMode="contain"
      source={{ uri: pokemon.image }}
    />
  </styles.CardContainer>
)
