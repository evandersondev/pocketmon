import React from 'react'
import { useIsFocused } from '@react-navigation/native'
import { Modal } from 'react-native'
import { MaterialCommunityIcons as Icon } from 'expo-vector-icons'
import { addNotesPokemonByid } from '../../utils'
import { usePokemon } from '../../contexts'
import { Button } from '../../components'
import colors from '../../styles/colors'
import styles from './styles'

export default ({ id, modalNotes, setModalNotes }) => {
  const isFocused = useIsFocused()
  const { notes, setNotes } = usePokemon()

  function changeValuesNote(key, value, id) {
    setNotes({
      ...notes,
      [key]: {
        id: id,
        value: value,
      },
    })
  }

  async function saveNotes() {
    const result = await addNotesPokemonByid(id, notes)
    if (result) {
      closeNotes()
    }
  }

  function closeNotes() {
    setModalNotes(false)
  }

  return (
    <Modal transparent={true} visible={modalNotes}>
      {isFocused && id && (
        <styles.NotesContainer>
          <styles.NotesHeader>
            <styles.CloseNotesButton onPress={closeNotes}>
              <Icon name="close-circle-outline" size={36} color={colors.dark} />
            </styles.CloseNotesButton>
          </styles.NotesHeader>

          <styles.ScrollContainer showsVerticalScrollIndicator={false}>
            <styles.NotesBody>
              <styles.NotesTitle>Feeding time</styles.NotesTitle>
              <styles.NotesItemContainer>
                <styles.NotesItemContainerColumn>
                  <styles.NotesItemButton
                    enable={notes.feed.id === 1}
                    onPress={() => changeValuesNote('feed', '1 times a day', 1)}
                  >
                    <styles.NotesItemValue enable={notes.feed.id === 1}>
                      1 times a day
                    </styles.NotesItemValue>
                  </styles.NotesItemButton>
                  <styles.NotesItemButton
                    enable={notes.feed.id === 2}
                    onPress={() => changeValuesNote('feed', '2 times a day', 2)}
                  >
                    <styles.NotesItemValue enable={notes.feed.id === 2}>
                      2 times a day
                    </styles.NotesItemValue>
                  </styles.NotesItemButton>
                </styles.NotesItemContainerColumn>

                <styles.NotesItemContainerColumn>
                  <styles.NotesItemButton
                    enable={notes.feed.id === 3}
                    onPress={() => changeValuesNote('feed', '3 times a day', 3)}
                  >
                    <styles.NotesItemValue enable={notes.feed.id === 3}>
                      3 times a day
                    </styles.NotesItemValue>
                  </styles.NotesItemButton>
                  <styles.NotesItemButton
                    enable={notes.feed.id === 4}
                    onPress={() => changeValuesNote('feed', 'More than 4', 4)}
                  >
                    <styles.NotesItemValue enable={notes.feed.id === 4}>
                      More than 4
                    </styles.NotesItemValue>
                  </styles.NotesItemButton>
                </styles.NotesItemContainerColumn>
              </styles.NotesItemContainer>

              <styles.NotesTitle>Habitat</styles.NotesTitle>
              <styles.NotesItemContainer>
                <styles.NotesItemContainerColumn>
                  <styles.NotesItemButton
                    enable={notes.habitat.id === 1}
                    onPress={() => changeValuesNote('habitat', 'Air', 1)}
                  >
                    <styles.NotesItemValue enable={notes.habitat.id === 1}>
                      Air
                    </styles.NotesItemValue>
                  </styles.NotesItemButton>
                  <styles.NotesItemButton
                    enable={notes.habitat.id === 2}
                    onPress={() => changeValuesNote('habitat', 'Forest', 2)}
                  >
                    <styles.NotesItemValue enable={notes.habitat.id === 2}>
                      Forest
                    </styles.NotesItemValue>
                  </styles.NotesItemButton>
                </styles.NotesItemContainerColumn>

                <styles.NotesItemContainerColumn>
                  <styles.NotesItemButton
                    enable={notes.habitat.id === 3}
                    onPress={() => changeValuesNote('habitat', 'Ocean', 3)}
                  >
                    <styles.NotesItemValue enable={notes.habitat.id === 3}>
                      Ocean
                    </styles.NotesItemValue>
                  </styles.NotesItemButton>
                  <styles.NotesItemButton
                    enable={notes.habitat.id === 4}
                    onPress={() => changeValuesNote('habitat', 'Desert', 4)}
                  >
                    <styles.NotesItemValue enable={notes.habitat.id === 4}>
                      Desert
                    </styles.NotesItemValue>
                  </styles.NotesItemButton>
                </styles.NotesItemContainerColumn>
              </styles.NotesItemContainer>

              <styles.NotesTitle>Capture place</styles.NotesTitle>
              <styles.NotesItemContainer>
                <styles.NotesItemContainerColumn>
                  <styles.NotesItemButton
                    enable={notes.capture_location.id === 1}
                    onPress={() =>
                      changeValuesNote('capture_location', 'Brazil', 1)
                    }
                  >
                    <styles.NotesItemValue
                      enable={notes.capture_location.id === 1}
                    >
                      Brazil
                    </styles.NotesItemValue>
                  </styles.NotesItemButton>
                  <styles.NotesItemButton
                    enable={notes.capture_location.id === 2}
                    onPress={() =>
                      changeValuesNote('capture_location', 'United States', 2)
                    }
                  >
                    <styles.NotesItemValue
                      enable={notes.capture_location.id === 2}
                    >
                      United States
                    </styles.NotesItemValue>
                  </styles.NotesItemButton>
                </styles.NotesItemContainerColumn>

                <styles.NotesItemContainerColumn>
                  <styles.NotesItemButton
                    enable={notes.capture_location.id === 3}
                    onPress={() =>
                      changeValuesNote('capture_location', 'China', 3)
                    }
                  >
                    <styles.NotesItemValue
                      enable={notes.capture_location.id === 3}
                    >
                      China
                    </styles.NotesItemValue>
                  </styles.NotesItemButton>
                  <styles.NotesItemButton
                    enable={notes.capture_location.id === 4}
                    onPress={() =>
                      changeValuesNote('capture_location', 'Other', 4)
                    }
                  >
                    <styles.NotesItemValue
                      enable={notes.capture_location.id === 4}
                    >
                      Other
                    </styles.NotesItemValue>
                  </styles.NotesItemButton>
                </styles.NotesItemContainerColumn>
              </styles.NotesItemContainer>

              <Button
                onPress={saveNotes}
                title="Save"
                style={{ marginBottom: 60 }}
              />
            </styles.NotesBody>
          </styles.ScrollContainer>
        </styles.NotesContainer>
      )}
    </Modal>
  )
}
