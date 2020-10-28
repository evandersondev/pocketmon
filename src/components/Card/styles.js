import styled from 'styled-components/native'
import colors from '../../styles/colors'
import { Dimensions } from 'react-native'

export const CardContainer = styled.TouchableOpacity`
  width: ${({ type }) =>
    type === 'squad' ? Dimensions.get('screen').width / 2 - 38 : '100%'};
  height: ${({ type }) =>
    type === 'squad' ? Dimensions.get('screen').width / 2 - 38 : '150px'};
  background: ${colors.card};
  margin-left: ${({ type }) => (type === 'squad' ? '10px' : 'auto')};
  margin-right: ${({ type }) => (type === 'squad' ? '10px' : 'auto')};
  border-radius: 8px;
  margin-bottom: 10px;
  padding: ${({ type }) => (type === 'squad' ? '15px' : '8px 30px')};
  flex-direction: row;
  justify-content: space-between;
`
export const Info = styled.View`
  justify-content: space-between;
  width: ${({ type }) => (type === 'squad' ? '100%' : 'auto')};
`

export const PokemonIdContainer = styled.View`
  width: ${({ type }) => (type === 'squad' ? '30px' : '70px')};
  height: ${({ type }) => (type === 'squad' ? '30px' : '70px')};
  background: ${({ type }) =>
    type === 'squad' ? 'transparent' : `${colors.primary}12`};
  border-radius: 35px;
  align-items: center;
  justify-content: center;
`

export const PokemonId = styled.Text`
  color: ${colors.dark};
  font-size: ${({ type }) => (type === 'squad' ? '14px' : '18px')};
  border-radius: 8px;
  font-family: 'Nunito_700Bold';
`

export const PokemonName = styled.Text`
  font-size: ${({ type }) => (type === 'squad' ? '16px' : '26px')};
  font-family: 'Nunito_800ExtraBold';
  color: ${colors.dark};
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: ${({ type }) => (type === 'squad' ? '0px' : '10px')};
  text-align: ${({ type }) => (type === 'squad' ? 'center' : 'left')};
`

export const ImagePokemon = styled.Image`
  height: ${({ type }) => (type === 'squad' ? '90px' : '120px')};
  width: ${({ type }) => (type === 'squad' ? '90px' : '120px')};
  margin: ${({ type }) =>
    type === 'squad' ? '20px 25px auto -130px' : 'auto 0'};
`
