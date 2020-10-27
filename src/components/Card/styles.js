import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.TouchableOpacity``

export const CardContainer = styled.TouchableOpacity`
  width: 100%;
  height: 150px;
  background: ${colors.card};
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 8px 30px;
  flex-direction: row;
  justify-content: space-between;
`
export const Info = styled.View`
  justify-content: space-between;
`

export const PokemonIdContainer = styled.View`
  width: 70px;
  height: 70px;
  background: ${colors.primary}2f;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
`

export const PokemonId = styled.Text`
  color: ${colors.dark};
  font-size: 22px;
  border-radius: 8px;
  font-family: 'Nunito_700Bold';
`

export const PokemonName = styled.Text`
  font-size: 26px;
  font-family: 'Nunito_800ExtraBold';
  color: ${colors.dark};
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 10px;
`

export const ImagePokemon = styled.Image`
  height: 120px;
  width: 120px;
  margin: auto 0;
`
