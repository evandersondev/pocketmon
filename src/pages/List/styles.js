import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const ListContainer = styled.SafeAreaView`
  flex: 1;
  background: ${colors.ligth};
  padding: 0 30px;
`

export const ListView = styled.FlatList``

export const TitlePage = styled.Text`
  font-size: 22px;
  font-family: 'Nunito_700Bold';
  margin-bottom: 15px;
  color: ${colors.dark};
`
