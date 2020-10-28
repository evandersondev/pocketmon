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
  border: 1px solid #bdc0c5;
  color: #bdc0c5;
  border-radius: 8px;
  margin-bottom: 15px;
`

const InputSearch = styled.TextInput`
  padding-left: 30px;
  color: ${colors.gray};
  font-size: 16px;
`

const ButtonSearchContainer = styled.TouchableOpacity`
  width: 76px;
  height: 100%;
  background: ${colors.dark};
  margin-left: auto;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  align-items: center;
  justify-content: center;
`

const ButtonSearchImage = styled.Image`
  width: 25px;
  height: 25px;
`

const ListView = styled.FlatList`
  width: 100%;
`

export default {
  PokedexContainer,
  TitlePokedex,
  InputSearch,
  InputSearchContainer,
  ButtonSearchContainer,
  ButtonSearchImage,
  ListView,
}
