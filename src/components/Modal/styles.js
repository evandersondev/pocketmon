import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import colors from '../../styles/colors'

export const ModelScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: ${colors.dark}aa;
`

export const ModalContainer = styled.View`
  width: ${Dimensions.get('screen').width - 60};
  height: ${Dimensions.get('screen').width - 60};
  background: ${colors.ligth};
  padding: 30px;
  border-radius: 8px;
`

export const HeaderModal = styled.View`
  width: 105%;
  height: 15px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const CloseButton = styled.TouchableOpacity`
  padding: 8px;
`

export const CloseImage = styled.Image`
  width: 32px;
  height: 32px;
`

export const BodyContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const ItemBody = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 60px;
`

export const ItemImage = styled.Image`
  margin-right: 30px;
  width: 32px;
  height: 32px;
`

export const ItemText = styled.Text`
  margin-right: auto;
  font-size: 18px;
  font-family: 'Nunito_400Regular';
`
