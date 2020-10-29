import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { loadPokemonsCaptured } from '../../utils'
import { usePokemon } from '../../context/Pokemon'

import { Header, Card } from '../../components'
import searchIcon from '../../assets/images/icons/search.png'

import styles from './styles'

const Pokedex = () => {
  const { navigate } = useNavigation()
  const [pokemons, setPokemons] = useState([])
  const { listPokemonById } = usePokemon()

  async function loadPokedex() {
    setPokemons(await loadPokemonsCaptured())
  }

  async function fetchPokemon(id) {
    await listPokemonById(id)
    navigate('Show')
  }

  useFocusEffect(() => {
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
          <TouchableOpacity onPress={() => fetchPokemon(item.id)}>
            <Card pokemon={item} type="squad" />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.name}
        numColumns="2"
        columnWrapperStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          width: '100%',
        }}
        contentContainerStyle={{
          // flex: 0.5,
          width: '100%',

          // height: '100%',
          flexGrow: 1,
        }}
      />
    </styles.PokedexContainer>
  )
}

export default Pokedex
