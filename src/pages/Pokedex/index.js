import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { loadPokedexInStorage } from '../../utils'

import { Header, Card } from '../../components'
import searchIcon from '../../assets/images/icons/search.png'

import styles from './styles'

const Pokedex = () => {
  const { navigate } = useNavigation()
  const [pokemons, setPokemons] = useState([])

  async function loadPokedex() {
    setPokemons(await loadPokedexInStorage())
  }

  async function fetchPokemon(id) {
    const data = await api.getPokemonById(id)
    navigate('Show', { ...data })
  }

  useEffect(() => {
    loadPokedex()
  }, [])

  return (
    <styles.PokedexContainer>
      <Header />
      <styles.TitlePokedex>My Pokedex</styles.TitlePokedex>

      <styles.InputSearchContainer>
        <styles.InputSearch placeholder="Filter pokemon" />

        <styles.ButtonSearchContainer>
          <styles.ButtonSearchImage resizeMode="contain" source={searchIcon} />
        </styles.ButtonSearchContainer>
      </styles.InputSearchContainer>

      <styles.ListView
        data={pokemons}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} onPress={() => fetchPokemon(item.id)}>
            <Card item={item} type="squad" />
          </TouchableOpacity>
        )}
        keyExtractor={({ id }) => id}
        numColumns="2"
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
        }}
      />
    </styles.PokedexContainer>
  )
}

export default Pokedex
