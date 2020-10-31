import React, { useState, useEffect } from 'react'
import { Header } from '../../components'
import { MaterialCommunityIcons as Icon } from 'expo-vector-icons'
import {
  getUserInLocalStorage,
  loadPokemonsCaptured,
  loadPokemonsVisited,
} from '../../utils'
import { useLanding } from '../../contexts'
import colors from '../../styles/colors'
import styles from './styles'

export default () => {
  const { check, showLanding } = useLanding()
  const [user, setUser] = useState({})
  const [pokemonsCaptured, setPokemosCaptured] = useState('')
  const [pokemonsVisited, setPokemosVisited] = useState('')

  async function loadUserProfile() {
    setUser(await getUserInLocalStorage())
  }

  useEffect(() => {
    async function pokemonsLength() {
      const captured = await loadPokemonsCaptured()
      const visited = await loadPokemonsVisited()
      setPokemosCaptured(captured.length)
      setPokemosVisited(visited.length ?? '0')
    }

    loadUserProfile()
    pokemonsLength()
  }, [])

  async function toggleCheck() {
    await showLanding()
  }

  return (
    <styles.ProfileContainer>
      {user && (
        <>
          <Header />
          <styles.TitleSession>Profile</styles.TitleSession>
          <styles.ImageProfile
            resizeMode="contain"
            source={{ uri: user.image }}
          />

          <styles.BodyContainer>
            <styles.InfoContainer>
              <styles.LabelInfoText>Name</styles.LabelInfoText>
              <styles.ValueInfoText>{user.name}</styles.ValueInfoText>
            </styles.InfoContainer>
          </styles.BodyContainer>

          <styles.BodyContainer>
            <styles.InfoContainer>
              <styles.LabelInfoText>Pokemons visited</styles.LabelInfoText>
              <styles.ValueInfoText>
                {pokemonsVisited} visited
              </styles.ValueInfoText>
            </styles.InfoContainer>
          </styles.BodyContainer>

          <styles.BodyContainer>
            <styles.InfoContainer>
              <styles.LabelInfoText>Pokemons captured</styles.LabelInfoText>
              <styles.ValueInfoText>
                {pokemonsCaptured} captured
              </styles.ValueInfoText>
            </styles.InfoContainer>
          </styles.BodyContainer>

          <styles.ShowLandingContainer>
            <styles.TextLanding>Show me lading page</styles.TextLanding>
            <styles.CheckButton onPress={toggleCheck}>
              {check ? (
                <Icon name="check-box-outline" color={colors.dark} size={24} />
              ) : (
                <Icon
                  name="checkbox-blank-outline"
                  color={colors.dark}
                  size={24}
                />
              )}
            </styles.CheckButton>
          </styles.ShowLandingContainer>
        </>
      )}
    </styles.ProfileContainer>
  )
}
