import AsyncStorage from '@react-native-community/async-storage'

async function getPokedexInStorage(key) {
  const checkStorage = await AsyncStorage.getItem(key)

  if (!checkStorage) {
    await createStorage(key)
  }

  return await AsyncStorage.getItem(key)
}

async function createStorage(key) {
  await AsyncStorage.setItem(key, JSON.stringify([]))
}

function parseJson(json) {
  return JSON.parse(json)
}

function removeById(array, id) {
  return array?.filter(pokemon => pokemon.id !== id)
}

function filterById(array, id) {
  return array?.filter(pokemon => pokemon.id === id)
}

function filterByCaptured(array) {
  return array.filter(pokemon => pokemon?.markAs === 'captured')
}

async function saveInStorage(key, data) {
  await AsyncStorage.setItem(key, JSON.stringify(data))
}

export async function saveDataPokedex(data) {
  const storage = await getPokedexInStorage('pokedex')
  const pokedexStorage = parseJson(storage)
  const removePokemonById = removeById(pokedexStorage, data.id)
  const filterPokemonById = filterById(pokedexStorage, data.id)

  if (filterPokemonById[0]) {
    const newStorage = [
      ...removePokemonById,
      {
        ...filterPokemonById[0],
        markAs: data.markAs,
        notes:
          data.markAs === 'none'
            ? {
                enable: false,
                feed: {
                  id: 1,
                  value: '1 times a day',
                },
                habitat: {
                  id: 1,
                  value: 'Air',
                },
                capture_location: {
                  id: 1,
                  value: 'Brazil',
                },
              }
            : { ...filterPokemonById[0].notes, enable: false },
      },
    ]
    await saveInStorage('pokedex', newStorage)
  } else {
    await saveInStorage('pokedex', [...pokedexStorage, { ...data }])
  }
}

export async function chekMarkedAs(id) {
  const pokedexStorage = await getPokedexInStorage('pokedex')

  if (!pokedexStorage) {
    return {
      markAs: 'none',
    }
  }

  const parsePokedex = parseJson(pokedexStorage)
  const pokemonFilter = filterById(parsePokedex, id)

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
  const pokedexStorage = await getPokedexInStorage('pokedex')

  if (!pokedexStorage) {
    return []
  }
  const parsePokedex = parseJson(pokedexStorage)

  const filterPokemonsCaptured = filterByCaptured(parsePokedex)

  return filterPokemonsCaptured.sort() || []
}

export async function removeDataInStorage(key) {
  await AsyncStorage.removeItem(key)
}

export async function getUserInLocalStorage() {
  const user = parseJson(await AsyncStorage.getItem('@PMON:user'))
  return user
}

export async function addNotesPokemonByid(id, notes) {
  const storage = await loadPokemonsCaptured()

  const removePokemonById = removeById(storage, id)
  const filterPokemonById = filterById(storage, id)

  const newStorage = [
    ...removePokemonById,
    {
      ...filterPokemonById[0],
      notes,
    },
  ]

  try {
    await saveInStorage('pokedex', newStorage)
    return true
  } catch (err) {
    return false
  }
}

export async function loadPokemonsCapturedByid(id) {
  const storage = await loadPokemonsCaptured()

  if (!storage) {
    return {}
  }

  const filterPokemonById = filterById(storage, id)

  if (filterPokemonById.length === 0) {
    return {}
  } else {
    return filterPokemonById[0]
  }
}

export async function shouldToShowLading(value) {
  if (value) {
    await AsyncStorage.setItem('show_landing', 'check')
  } else {
    await AsyncStorage.setItem('show_landing', 'checked')
  }
}

export async function checkIfShowLandingInStorage() {
  const result = await AsyncStorage.getItem('show_landing')
  if (result === 'check') {
    return true
  } else {
    return false
  }
}
