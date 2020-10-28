import React from 'react'
import { Modal } from 'react-native'
import { saveDataPokedex } from '../../utils'

import { useModal } from '../../context/Modal'

import {
  ModelScreen,
  ModalContainer,
  HeaderModal,
  CloseButton,
  CloseImage,
  BodyContainer,
  ItemBody,
  ItemImage,
  ItemText,
} from './styles'

import closeIcon from '../../assets/images/icons/close.png'
import unvisitedIcon from '../../assets/images/icons/unvisited.png'
import visitedIcon from '../../assets/images/icons/visited.png'
import captureIcon from '../../assets/images/icons/captured.png'

export default ({ id, name, image }) => {
  const { closeModal, modal } = useModal()

  function markPokemonAs(markAs) {
    saveDataPokedex({ id, name, image, markAs })
    console.log('salvo')
  }

  return (
    <Modal transparent={true} visible={modal.enable}>
      <ModelScreen>
        <ModalContainer>
          <HeaderModal>
            <CloseButton onPress={closeModal}>
              <CloseImage resizeMode="contain" source={closeIcon} />
            </CloseButton>
          </HeaderModal>
          <BodyContainer>
            <ItemBody onPress={() => markPokemonAs('unvisited')}>
              <ItemImage resizeMode="contain" source={unvisitedIcon} />
              <ItemText>Unvisited</ItemText>
            </ItemBody>

            <ItemBody onPress={() => markPokemonAs('visited')}>
              <ItemImage resizeMode="contain" source={visitedIcon} />
              <ItemText>Visited</ItemText>
            </ItemBody>

            <ItemBody onPress={() => markPokemonAs('captured')}>
              <ItemImage resizeMode="contain" source={captureIcon} />
              <ItemText>Captured</ItemText>
            </ItemBody>
          </BodyContainer>
        </ModalContainer>
      </ModelScreen>
    </Modal>
  )
}
