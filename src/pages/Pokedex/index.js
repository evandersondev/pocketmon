import React, { useState } from 'react'
import {
  useNavigation,
  useFocusEffect,
  useIsFocused,
} from '@react-navigation/native'
import { loadPokemonsCaptured } from '../../utils'
import { usePokemon } from '../../context/Pokemon'
import { Header, Card } from '../../components'
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles'

const Pokedex = () => {
  const { navigate } = useNavigation()
  const isFocused = useIsFocused()
  const [pokemons, setPokemons] = useState([])
  const [pokemonsFiltered, setPokemonFiltered] = useState([])
  const [searching, setSearch] = useState(false)
  const { listPokemonById, searckPokemon } = usePokemon()

  async function loadPokedex() {
    setPokemons(await loadPokemonsCaptured())
  }

  async function goToPageShow(id) {
    await listPokemonById(id)
    navigate('Show')
  }

  function filterPokemonByName(value) {
    setSearch(true)
    setPokemonFiltered(searckPokemon(pokemons, value))
  }

  useFocusEffect(() => {
    loadPokedex()
  }, [])

  return (
    <styles.PokedexContainer>
      <Header />
      <styles.TitlePokedex>My Pokedex</styles.TitlePokedex>

      <styles.InputSearchContainer>
        <styles.InputSearch
          onChangeText={filterPokemonByName}
          placeholder="Filter pokemon"
        />
      </styles.InputSearchContainer>

      <styles.ListView
        data={searching ? pokemonsFiltered : pokemons}
        renderItem={({ item }) => (
          <RectButton onPress={() => goToPageShow(item.id)}>
            <Card pokemon={item} type="squad" />
          </RectButton>
        )}
        keyExtractor={item => item.name}
        numColumns="2"
        showsVerticalScrollIndicator={false}
      />
    </styles.PokedexContainer>
  )
}

export default Pokedex
