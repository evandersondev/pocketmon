import React, { useEffect } from 'react'
import { Modal } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

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

export default ({ id }) => {
  const { closeModal, modal } = useModal()

  async function markPokemonAs(value) {
    const pokemonStorage = await AsyncStorage.getItem('mark_pokemon')

    if (!pokemonStorage) {
      await AsyncStorage.setItem('mark_pokemon', JSON.stringify([]))
    }
    const pokemonStorageInObject = JSON.parse(pokemonStorage)

    await AsyncStorage.setItem(
      'mark_pokemon',
      JSON.stringify({
        ...pokemonStorageInObject,
        [id]: {
          markAs: value,
        },
      }),
    )

    console.log('done')
  }

  // useEffect(() => {
  // markPokemonAs()
  // }, [modal])

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
