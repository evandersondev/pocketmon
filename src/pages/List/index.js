import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { usePokemon } from '../../context/Pokemon'

import { Header, Card } from '../../components'

import { TouchableOpacity } from 'react-native-gesture-handler'

import styles from './styles'

export default () => {
  const { pokemons, listPokemon, setPokemons, listPokemonById } = usePokemon()
  const [refreshing, setRefreshing] = useState(false)
  const { navigate } = useNavigation()
  const [offset, setOffset] = useState(0)

  async function goToPageShow(id) {
    await listPokemonById(id)
    navigate('Show')
  }

  function loadMore() {
    setOffset(offset + 10)
  }

  function refreshPokemons() {
    setOffset(0)
  }

  useEffect(() => {
    listPokemon({ offset })
  }, [offset])

  return (
    <styles.ListContainer>
      <Header />

      <styles.TitlePage>Choose your pokemons</styles.TitlePage>

      <styles.ListView
        data={pokemons}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToPageShow(item.id)}>
            <Card pokemon={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.name}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        refreshing={refreshing}
        onRefresh={refreshPokemons}
        showsVerticalScrollIndicator={false}
        scrollToIndex={params => console.log(params)}
      />
    </styles.ListContainer>
  )
}
