import styled from 'styled-components/native'
import colors from '../../styles/colors'

import { Platform, StatusBar } from 'react-native'

export const ListContainer = styled.SafeAreaView`
  flex: 1;
  background: ${colors.ligth};
  padding: 0 30px;
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0};
`

export const ListView = styled.FlatList``
