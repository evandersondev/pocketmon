import React from 'react'
import { usePokemon } from '../../context/Pokemon'
import { saveDataPokedex } from '../../utils'
import { images } from '../../assets'
import { Modal } from 'react-native'
import { useModal } from '../../context/Modal'
import styles from './styles'

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
              <styles.CloseImage resizeMode="contain" source={images.close} />
            </styles.CloseButton>
          </styles.HeaderModal>

          <styles.BodyContainer>
            <styles.ItemBody onPress={() => markPokemonAs('none')}>
              <styles.ItemImage resizeMode="contain" source={images.none} />
              <styles.ItemText>None</styles.ItemText>
            </styles.ItemBody>

            <styles.ItemBody onPress={() => markPokemonAs('visited')}>
              <styles.ItemImage resizeMode="contain" source={images.visited} />
              <styles.ItemText>Visited</styles.ItemText>
            </styles.ItemBody>

            <styles.ItemBody onPress={() => markPokemonAs('captured')}>
              <styles.ItemImage resizeMode="contain" source={images.captured} />
              <styles.ItemText>Captured</styles.ItemText>
            </styles.ItemBody>
          </styles.BodyContainer>
        </styles.ModalContainer>
      </styles.ModelScreen>
    </Modal>
  )
}
