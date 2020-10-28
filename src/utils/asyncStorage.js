import AsyncStorage from '@react-native-community/async-storage'

export async function saveDataPokedex(data) {
  const pokedexStorage = await AsyncStorage.getItem('pokedex')

  if (!pokedexStorage) {
    await AsyncStorage.setItem('pokedex', JSON.stringify([]))
  }

  const pokedexStorageInObject = JSON.parse(pokedexStorage)
  const savePokedex = [...pokedexStorageInObject, { ...data }]

  const convertToJson = JSON.stringify(savePokedex)

  await AsyncStorage.setItem('pokedex', convertToJson)
}

export async function chekMarkedAs(id) {
  const pokedexStorage = await AsyncStorage.getItem('pokedex')
  const pokedexStorageInObject = JSON.parse(pokedexStorage)

  const pokemonFilter = pokedexStorageInObject.filter(
    pokemon => pokemon.id === id,
  )

  if (!pokemonFilter !== []) {
    return {
      markAs: pokemonFilter[0]?.markAs,
    }
  }
}

export async function loadPokedexInStorage() {
  const pokedexStorage = await AsyncStorage.getItem('pokedex')
  const pokedexStorageInObject = JSON.parse(pokedexStorage)

  return pokedexStorageInObject || []
}
