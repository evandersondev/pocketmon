import { create } from 'axios'

const api = create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
})

export default {
  async getAllPokemons(limit) {
    const { data: results } = await api.get(`?limit=${limit}`)

    const data = results.results.map((pokemon, index) => {
      const id = index + 1
      const image = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

      return {
        id,
        name: pokemon.name,
        image,
      }
    })

    return [...data]
  },

  async getPokemonById(id) {
    const { data } = await api.get(`/${id}`)
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
  },
}
