import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'
import { Header, Card } from '../../components'

import { ListContainer, ListView, TitlePage } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default () => {
  const [pokemons, setPokemons] = useState([])
  const [offset, setOffeset] = useState(15)
  const { navigate } = useNavigation()

  async function fetchPokemons() {
    setPokemons(await api.getAllPokemons(toString(offset)))
  }

  async function fetchPokemon(id) {
    const data = await api.getPokemonById(id)
    navigate('Show', { ...data })
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <ListContainer>
      <Header />
      <TitlePage>Choose your pokemons</TitlePage>
      <ListView
        data={pokemons}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} onPress={() => fetchPokemon(item.id)}>
            <Card item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={({ id }) => id}
      />
    </ListContainer>
  )
}
