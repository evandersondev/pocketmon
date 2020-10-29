import styled from 'styled-components/native'
import colors from '../../styles/colors'

const ListContainer = styled.SafeAreaView`
  flex: 1;
  background: ${colors.ligth};
  padding: 0 30px;
`

const ListView = styled.FlatList``

const TitlePage = styled.Text`
  font-size: 22px;
  font-family: 'Nunito_700Bold';
  margin-bottom: 15px;
  color: ${colors.dark};
`

export default {
  ListContainer,
  ListView,
  TitlePage,
}
