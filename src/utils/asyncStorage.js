import AsyncStorage from '@react-native-community/async-storage'

export async function saveDataPokedex(data) {
  const pokedexStorage = await AsyncStorage.getItem('pokedex')

  if (!pokedexStorage) {
    await AsyncStorage.setItem('pokedex', JSON.stringify([]))
  }

  const parsePokedex = JSON.parse(pokedexStorage)

  const removePokemonById = parsePokedex?.filter(
    pokemon => pokemon.id !== data.id,
  )

  const filterPokemonById = parsePokedex?.filter(
    pokemon => pokemon.id === data.id,
  )

  if (!filterPokemonById) {
    const updatePokemon = {
      ...filterPokemonById[0],
      markAs: data.markAs,
    }

    await AsyncStorage.setItem(
      'pokedex',
      JSON.stringify([...removePokemonById, { ...updatePokemon }]),
    )
    console.log('aqui')
  } else {
    await AsyncStorage.setItem(
      'pokedex',
      JSON.stringify([...parsePokedex, { ...data }]),
    )
  }
}

export async function chekMarkedAs(id) {
  const pokedexStorage = await AsyncStorage.getItem('pokedex')

  if (!pokedexStorage) {
    return {
      markAs: 'none',
    }
  }

  const parsePokedex = JSON.parse(pokedexStorage)

  const pokemonFilter = parsePokedex.filter(pokemon => pokemon?.id === id)

  if (!pokemonFilter !== []) {
    return {
      markAs: pokemonFilter[0]?.markAs,
    }
  }
}

export async function loadPokedexInStorage() {
  const pokedexStorage = await AsyncStorage.getItem('pokedex')
  const parsePokedex = JSON.parse(pokedexStorage)

  return parsePokedex || []
}

export async function loadPokemonsCaptured() {
  const pokedexStorage = await AsyncStorage.getItem('pokedex')
  const parsePokedex = JSON.parse(pokedexStorage)

  const filterPokemonsCaptured = parsePokedex.filter(
    pokemon => pokemon?.markAs === 'captured',
  )

  return filterPokemonsCaptured || []
}

export async function removePokedexInStorage() {
  await AsyncStorage.removeItem('pokedex')
}
