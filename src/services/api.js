import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
})

export default {
  async getAllPokemos() {
    const { data: results } = await api.get('?limit=150')

    const data = results.results.map((pokemon, index) => {
      const id = index + 1
      const image = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

      return {
        id,
        name: pokemon.name,
        image,
      }
    })

    return data
  },
}
