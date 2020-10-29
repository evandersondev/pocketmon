import React from 'react'
import { usePokemon } from '../../context/Pokemon'
import { saveDataPokedex } from '../../utils'
import { Modal } from 'react-native'
import { useModal } from '../../context/Modal'

import styles from './styles'

import closeIcon from '../../assets/images/icons/close.png'
import unvisitedIcon from '../../assets/images/icons/unvisited.png'
import visitedIcon from '../../assets/images/icons/visited.png'
import captureIcon from '../../assets/images/icons/captured.png'

export default ({ id, name, image }) => {
  const { closeModal, modal } = useModal()
  const { setMarkedAs } = usePokemon()

  async function markPokemonAs(markAs) {
    await saveDataPokedex({ id, name, image, markAs })
    setMarkedAs(markAs)
    closeModal()
  }

  return (
    <Modal transparent={true} visible={modal.enable}>
      <styles.ModelScreen>
        <styles.ModalContainer>
          <styles.HeaderModal>
            <styles.CloseButton onPress={closeModal}>
              <styles.CloseImage resizeMode="contain" source={closeIcon} />
            </styles.CloseButton>
          </styles.HeaderModal>

          <styles.BodyContainer>
            <styles.ItemBody onPress={() => markPokemonAs('unvisited')}>
              <styles.ItemImage resizeMode="contain" source={unvisitedIcon} />
              <styles.ItemText>Unvisited</styles.ItemText>
            </styles.ItemBody>

            <styles.ItemBody onPress={() => markPokemonAs('visited')}>
              <styles.ItemImage resizeMode="contain" source={visitedIcon} />
              <styles.ItemText>Visited</styles.ItemText>
            </styles.ItemBody>

            <styles.ItemBody onPress={() => markPokemonAs('captured')}>
              <styles.ItemImage resizeMode="contain" source={captureIcon} />
              <styles.ItemText>Captured</styles.ItemText>
            </styles.ItemBody>
          </styles.BodyContainer>
        </styles.ModalContainer>
      </styles.ModelScreen>
    </Modal>
  )
}
