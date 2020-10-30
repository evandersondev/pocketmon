import styled from 'styled-components/native'
import colors from '../../styles/colors'

const PokedexContainer = styled.View`
  flex: 1;
  padding: 0 30px;
  background: ${colors.ligth};
`

const TitlePokedex = styled.Text`
  font-size: 22px;
  font-family: 'Nunito_700Bold';
  margin-bottom: 15px;
  color: ${colors.dark};
`

const InputSearchContainer = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  border: 0.5px solid ${colors.dark};
  border-radius: 8px;
  margin-bottom: 15px;
`

const InputSearch = styled.TextInput`
  padding: 0 35px;
  color: ${colors.dark};
  font-size: 16px;
`

const ListView = styled.FlatList``

export default {
  PokedexContainer,
  TitlePokedex,
  InputSearch,
  InputSearchContainer,
  ListView,
}
