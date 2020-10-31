import React, { createContext, useContext, useState } from 'react'
import { pokeapi } from '../services'
import { chekMarkedAs, loadPokemonsCapturedByid } from '../utils'

const PokemonContext = createContext()

export default function PokemonProvider({ children }) {
  const [markedAs, setMarkedAs] = useState('')
  const [pokemons, setPokemons] = useState([])
  const [pokemon, setPokemon] = useState({
    abilities: [],
    markAs: 'none',
  })
  const [notes, setNotes] = useState({
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
  })

  async function listPokemon({ offset }) {
    if (offset === 0) {
      setPokemons([])
      const { data } = await pokeapi.getAllPokemons({ offset })
      setPokemons([...data])
    } else {
      const { data } = await pokeapi.getAllPokemons({ offset })
      setPokemons([...pokemons, ...data])
    }
  }

  async function listPokemonById(id) {
    const results = await pokeapi.getPokemonById(id)
    const markAs = await getMarkPokemon(id)

    setMarkedAs(markAs ?? 'none')
    setPokemon({ ...results, markAs: markAs ?? 'none' })
  }

  async function getMarkPokemon(id) {
    const { markAs } = await chekMarkedAs(id)

    return markAs
  }

  function searckPokemon(array, value) {
    if (!value) {
      return array
    }

    const regexp = new RegExp(value, 'i')
    return array.filter(({ name }) => regexp.test(name))
  }

  async function loadNotesInStorage(id) {
    const pokemon = await loadPokemonsCapturedByid(id)
    if (pokemon.notes) {
      setNotes(pokemon.notes)
    } else {
      setNotes({
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
      })
    }
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
        searckPokemon,
        notes,
        setNotes,
        loadNotesInStorage,
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
    searckPokemon,
    notes,
    setNotes,
    loadNotesInStorage,
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
    searckPokemon,
    notes,
    setNotes,
    loadNotesInStorage,
  }
}
