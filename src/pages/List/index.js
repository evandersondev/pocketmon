import React, { useState, useEffect } from 'react'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { usePokemon } from '../../contexts'
import { Header, Card } from '../../components'
import styles from './styles'

export default () => {
  const { pokemons, listPokemon, listPokemonById } = usePokemon()
  const [refreshing] = useState(false)
  const isFocused = useIsFocused()
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

      {isFocused && (
        <styles.ListView
          data={pokemons}
          renderItem={({ item }) => (
            <RectButton onPress={() => goToPageShow(item.id)}>
              <Card pokemon={item} />
            </RectButton>
          )}
          keyExtractor={item => item.name}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          refreshing={refreshing}
          onRefresh={refreshPokemons}
          showsVerticalScrollIndicator={false}
        />
      )}
    </styles.ListContainer>
  )
}
