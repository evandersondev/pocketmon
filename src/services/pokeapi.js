import { create } from 'axios'

const api = create({
  baseURL: 'https://pokeapi.co/api/v2',
})

export async function getAllPokemons({ offset, amount = 10 }) {
  const {
    data: { pokemon_entries },
  } = await api.get('pokedex/1/')

  const limit = offset + amount
  const pokemonWithLimit = pokemon_entries.slice(offset, limit)

  const data = pokemonWithLimit.map(pokemon => {
    const id = pokemon.entry_number
    const image = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    return {
      id,
      name: pokemon.pokemon_species.name,
      image,
    }
  })

  return { data }
}

export async function getPokemonById(id) {
  const { data } = await api.get(`pokemon/${id}`)
  const image = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

  return {
    ...data,
    image,
    type: data.types[0].type.name,
    height: data.height,
    weight: data.weight,
    stats: {
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      specialAttack: data.stats[3].base_stat,
      specialDefense: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
    },
  }
}
