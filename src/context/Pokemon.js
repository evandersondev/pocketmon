import React, { createContext, useContext, useState } from 'react'
import api from '../services/api'
import { chekMarkedAs } from '../utils'

const PokemonContext = createContext()

export default function PokemonProvider({ children }) {
  const [markedAs, setMarkedAs] = useState('')
  const [pokemons, setPokemons] = useState([])
  const [pokemon, setPokemon] = useState({
    abilities: [],
    markAs: 'none',
  })

  async function listPokemon({ offset }) {
    if (offset === 0) {
      setPokemons([])
      const { data } = await api.getAllPokemons({ offset })
      setPokemons([...data])
    } else {
      const { data } = await api.getAllPokemons({ offset })
      setPokemons([...pokemons, ...data])
    }
  }

  async function listPokemonById(id) {
    const results = await api.getPokemonById(id)
    const markAs = await getMarkPokemon(id)

    setMarkedAs(markAs ?? 'none')
    setPokemon({ ...results, markAs: markAs ?? 'none' })
  }

  async function getMarkPokemon(id) {
    const { markAs } = await chekMarkedAs(id)

    return markAs
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemon,
        pokemon,
        setPokemons,
        listPokemon,
        listPokemonById,
        markedAs,
        setMarkedAs,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export function usePokemon() {
  const {
    pokemons,
    setPokemons,
    pokemon,
    setPokemon,
    listPokemon,
    listPokemonById,
    markedAs,
    setMarkedAs,
  } = useContext(PokemonContext)
  return {
    pokemons,
    setPokemons,
    pokemon,
    setPokemon,
    listPokemon,
    listPokemonById,
    markedAs,
    setMarkedAs,
  }
}
