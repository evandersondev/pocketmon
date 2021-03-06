import React from 'react'
import { MaterialCommunityIcons as Icon } from 'expo-vector-icons'
import { usePokemon, useMark } from '../../contexts'
import { saveDataPokedex } from '../../utils'
import { Modal } from 'react-native'
import colors from '../../styles/colors'
import styles from './styles'

export default ({ id, name, image }) => {
  const { closeMark, mark } = useMark()
  const { setMarkedAs } = usePokemon()

  async function markPokemonAs(markAs) {
    await saveDataPokedex({ id, name, image, markAs })
    setMarkedAs(markAs)
    closeMark()
  }

  return (
    <Modal transparent={true} visible={mark.enable}>
      <styles.MarkScreen>
        <styles.MarkContainer>
          <styles.MarkHeader>
            <styles.CloseButton onPress={closeMark}>
              <Icon name="close-circle-outline" size={36} color={colors.dark} />
            </styles.CloseButton>
          </styles.MarkHeader>

          <styles.BodyContainer>
            <styles.ItemBody onPress={() => markPokemonAs('none')}>
              <Icon
                name="checkbox-blank-outline"
                style={{ marginRight: 30 }}
                size={36}
                color={colors.dark}
              />
              <styles.ItemText>None</styles.ItemText>
            </styles.ItemBody>

            <styles.ItemBody onPress={() => markPokemonAs('visited')}>
              <Icon
                name="eye"
                style={{ marginRight: 30 }}
                size={36}
                color={colors.dark}
              />
              <styles.ItemText>Visited</styles.ItemText>
            </styles.ItemBody>

            <styles.ItemBody onPress={() => markPokemonAs('captured')}>
              <Icon
                name="pokeball"
                style={{ marginRight: 30 }}
                size={36}
                color={colors.dark}
              />
              <styles.ItemText>Captured</styles.ItemText>
            </styles.ItemBody>
          </styles.BodyContainer>
        </styles.MarkContainer>
      </styles.MarkScreen>
    </Modal>
  )
}
