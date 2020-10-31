import React, { useState, useEffect } from 'react'
import { Platform, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons as Icon } from 'expo-vector-icons'
import { usePokemon, useModal } from '../../contexts'
import { heightInCm, weightInKg } from '../../utils'
import { ProgressBar, Modal, Notes } from '../../components'
import { images } from '../../assets'
import colors from '../../styles/colors'
import styles from './styles'

export default () => {
  const { goBack } = useNavigation()
  const { showModal } = useModal()
  const { pokemon, markedAs, notes, loadNotesInStorage } = usePokemon()
  const [modalNotes, setModalNotes] = useState(false)

  async function loadStorage() {
    await loadNotesInStorage(pokemon.id)
  }

  useEffect(() => {
    loadStorage()
  }, [notes])

  return (
    <>
      <Modal id={pokemon.id} name={pokemon.name} image={pokemon.image} />
      <Notes
        id={pokemon.id}
        modalNotes={modalNotes}
        setModalNotes={setModalNotes}
      />

      {pokemon && notes && (
        <styles.ShowContainer
          style={{
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          }}
          typeColor={pokemon.type}
        >
          <styles.HeaderShow>
            <styles.BackContainer onPress={goBack}>
              <styles.BackImage resizeMode="contain" source={images.arrow} />
            </styles.BackContainer>

            <styles.MarkContainer onPress={showModal}>
              <styles.MarkText>Mark as</styles.MarkText>
              <styles.MarkImageContainer>
                <styles.MarkImage
                  resizeMode="contain"
                  source={images[markedAs]}
                />
              </styles.MarkImageContainer>
            </styles.MarkContainer>
          </styles.HeaderShow>

          <styles.ImageContainer>
            <styles.BackgroundContainer style={{ elevation: 1 }}>
              <styles.PokemonImage source={{ uri: pokemon.image }} />

              <styles.IdContainer>
                <styles.TextId>#{pokemon.id}</styles.TextId>
              </styles.IdContainer>

              <styles.PokemonName>{pokemon.name}</styles.PokemonName>

              <styles.TypeContainer>
                <styles.TypeImage
                  resizeMode="contain"
                  source={images[pokemon.type]}
                />
                <styles.TypeText>{pokemon.type}</styles.TypeText>
              </styles.TypeContainer>

              <styles.MeasuresContainer>
                <styles.MeasuresText>
                  Weight: {weightInKg(pokemon.weight)}kg
                </styles.MeasuresText>
                <styles.MeasuresText>
                  Height: {heightInCm(pokemon.height)}cm
                </styles.MeasuresText>
              </styles.MeasuresContainer>
            </styles.BackgroundContainer>
          </styles.ImageContainer>

          <styles.SessionContainer>
            <styles.TitleSession>Stats</styles.TitleSession>
            <ProgressBar title="Hp" value={pokemon?.stats?.hp} />
            <ProgressBar title="Attack" value={pokemon?.stats?.attack} />
            <ProgressBar title="Defense" value={pokemon?.stats?.defense} />
            <ProgressBar
              title="Special Attack"
              value={pokemon?.stats?.specialAttack}
            />
            <ProgressBar
              title="Special defense"
              value={pokemon?.stats?.specialDefense}
            />
            <ProgressBar title="Speed" value={pokemon?.stats?.speed} />
          </styles.SessionContainer>

          <styles.SessionContainer>
            <styles.TitleSession>Abilities</styles.TitleSession>
            {pokemon?.abilities?.map(({ ability }, index) => (
              <styles.AbilitiesItemText key={ability.name}>
                {index + 1} - {ability.name}
              </styles.AbilitiesItemText>
            ))}
          </styles.SessionContainer>

          {markedAs === 'captured' && (
            <styles.SessionContainer>
              <styles.NotesAddButtonContainer
                onPress={() => setModalNotes(true)}
              >
                <styles.TitleSession>Notes</styles.TitleSession>
                <Icon
                  name="plus"
                  size={36}
                  style={{ marginBottom: 12 }}
                  color={colors.dark}
                />
              </styles.NotesAddButtonContainer>

              {notes.enable && (
                <>
                  <styles.NotesTypeContainer>
                    <styles.NotesTypeLabel>Habitat</styles.NotesTypeLabel>
                    <styles.NotesTypeText>
                      {notes.habitat.value}
                    </styles.NotesTypeText>
                  </styles.NotesTypeContainer>

                  <styles.NotesTypeContainer>
                    <styles.NotesTypeLabel>Feeding time</styles.NotesTypeLabel>
                    <styles.NotesTypeText>
                      {notes.feed.value}
                    </styles.NotesTypeText>
                  </styles.NotesTypeContainer>

                  <styles.NotesTypeContainer>
                    <styles.NotesTypeLabel>
                      Capture location
                    </styles.NotesTypeLabel>
                    <styles.NotesTypeText>
                      {notes.capture_location.value}
                    </styles.NotesTypeText>
                  </styles.NotesTypeContainer>
                </>
              )}
            </styles.SessionContainer>
          )}
        </styles.ShowContainer>
      )}
    </>
  )
}
